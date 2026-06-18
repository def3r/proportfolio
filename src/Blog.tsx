import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { marked } from 'marked';
import { type BlogEntry } from './data';
import "./blog.css";

export default function BlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const [html, setHtml] = useState<string>('');
  const [notFound, setNotFound] = useState(false);

  // https://raw.githubusercontent.com/def3r/SIGSEGV/refs/heads/main/blogs/hall.md

  useEffect(() => {
    const baseUrl = "https://raw.githubusercontent.com/def3r/SIGSEGV/refs/heads/main/blogs"
    fetch(`${baseUrl}/registry.json`)
      .then(res => res.json())
      .then((blogs: BlogEntry[]) => {
        const blog = blogs.find(b => b.slug === slug);

        if (!blog) {
          setNotFound(true);
          return;
        }

        // 2. Fetch the actual markdown file using the file name found
        return fetch(`${baseUrl}/${blog.file}.md`);
      })
      .then(res => {
        if (!res) return; // Handled by the notFound block above
        if (!res.ok) throw new Error("Markdown file not found");
        return res.text();
      })
      .then(rawMarkdown => {
        if (rawMarkdown) {
          // 1. Let marked convert everything normally to a string of HTML
          const initialHtml = marked.parse(rawMarkdown) as string;

          // 2. Globally replace relative src paths with the remote absolute URL
          // This matches src="./blog-images/..." or src="/blog-images/..."
          const cleanBaseUrl = baseUrl.replace(/\/$/, ""); // ensures no double trailing slash
          const absoluteHtml = initialHtml.replace(
            /src=["'](?:\.\/|\/)?(blog-images\/[^"']+)["']/g,
            `src="${cleanBaseUrl}/$1"`
          );

          setHtml(absoluteHtml);
        }
      })
      .catch(err => {
        console.error(err);
        setNotFound(true);
      });
  }, [slug]);

  if (notFound) {
    return (
      <div className="text-text inter-regular bg-bg min-h-svh flex flex-col items-center justify-center gap-4">
        <div>Blog not found.</div>
        <Link to="/" className="hover:underline hover:text-hover">← Back</Link>
      </div>
    );
  }

  return (
    <div className="text-text inter-regular bg-bg min-h-svh">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <Link to="/" className="hover:underline hover:text-hover text-sm">← Back</Link>
        <div
          className="mt-8 prose blog-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
