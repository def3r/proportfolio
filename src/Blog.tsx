import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { marked } from 'marked';
import { blogs } from './data';
import "./blog.css";

const markdownFiles = import.meta.glob('./blogs/*.md', { query: '?raw', import: 'default' });

export default function BlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const [html, setHtml] = useState<string>('');
  const [notFound, setNotFound] = useState(false);

  const blog = blogs.find(b => b.slug === slug);

  useEffect(() => {
    if (!blog) {
      setNotFound(true);
      return;
    }
    const loader = markdownFiles[`./blogs/${blog.file}.md`];
    if (!loader) {
      setNotFound(true);
      return;
    }
    loader().then((raw) => {
      setHtml(marked.parse(raw as string) as string);
    });
  }, [blog]);

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
          className="mt-8 prose"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
