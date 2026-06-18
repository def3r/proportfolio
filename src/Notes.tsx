import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { marked } from 'marked';
import "./blog.css";

const NOTES_API = 'https://github-notes-proxy.def3r.workers.dev/?path=';
const baseUrl = 'https://raw.githubusercontent.com/def3r/SIGSEGV/refs/heads/main/notes/'

interface GithubItem {
  name: string;
  type: 'file' | 'dir';
  path: string;
  download_url: string | null;
}

export default function NotesPage() {
  const { '*': subPath } = useParams<{ '*': string }>();
  const [items, setItems] = useState<GithubItem[] | null>(null);
  const [html, setHtml] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const currentPath = subPath?.replace(/\/$/, '') ?? '';
  const apiUrl = currentPath ? `${NOTES_API}${currentPath}` : NOTES_API;

  const pathParts = currentPath ? currentPath.split('/') : [];
  const backPath =
    pathParts.length === 0
      ? '/'
      : pathParts.length === 1
        ? '/notes'
        : `/notes/${pathParts.slice(0, -1).join('/')}`;

  useEffect(() => {
    setLoading(true);
    setError(false);
    setItems(null);
    setHtml(null);

    fetch(apiUrl)
      .then(res => {
        if (!res.ok) throw new Error('not found');
        return res.json();
      })
      .then((data: GithubItem | GithubItem[]) => {
        if (Array.isArray(data)) {
          setItems(data);
          setLoading(false);
        } else {
          if (!data.download_url) throw new Error('no download url');
          fetch(data.download_url)
            .then(r => r.text())
            .then(raw => {
              if (raw) {
                const initialHtml = marked.parse(raw) as string;

                const cleanBaseUrl = baseUrl.replace(/\/$/, "");
                const absoluteHtml = initialHtml.replace(
                  /src=["'](?:\.\/|\/)?(notes-images\/[^"']+)["']/g,
                  `src="${cleanBaseUrl}/$1"`
                );

                setHtml(absoluteHtml);
              }
              setLoading(false);
            });
        }
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [apiUrl]);

  if (loading) {
    return (
      <div className="text-text inter-regular bg-bg min-h-svh flex items-center justify-center">
        loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-text inter-regular bg-bg min-h-svh flex flex-col items-center justify-center gap-4">
        <div>Not found.</div>
        <Link to={backPath} className="hover:underline hover:text-hover text-sm">← Back</Link>
      </div>
    );
  }

  if (html !== null) {
    return (
      <div className="text-text inter-regular bg-bg min-h-svh">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <Link to={backPath} className="hover:underline hover:text-hover text-sm">← Back</Link>
          <div
            className="mt-8 prose blog-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="text-text inter-regular bg-bg min-h-svh">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-sm mb-8 flex items-center gap-1 flex-wrap">
          <Link to="/notes" className="hover:underline hover:text-hover">notes</Link>
          {pathParts.map((part, i) => (
            <span key={i} className="flex items-center gap-1">
              <span className="opacity-50">/</span>
              <Link
                to={`/notes/${pathParts.slice(0, i + 1).join('/')}`}
                className="hover:underline hover:text-hover"
              >
                {part}
              </Link>
            </span>
          ))}
        </div>

        <ul className="flex flex-col gap-2">
          {items
            ?.slice()
            .sort((a, b) => {
              if (a.type !== b.type) return a.type === 'dir' ? -1 : 1;
              return a.name.localeCompare(b.name);
            })
            .map(item => {
              const linkPath = `/notes/${item.path.slice('notes/'.length)}`;
              return (
                <li key={item.name}>
                  <Link to={linkPath} className="hover:underline hover:text-hover">
                    <span className="opacity-50 mr-2 font-mono text-xs">
                      {item.type === 'dir' ? 'dir' : 'file'}
                    </span>
                    {item.name}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
