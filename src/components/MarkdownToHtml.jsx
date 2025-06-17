import React from "react";
import ReactMarkdown from "react-markdown";

const MarkdownToHtml = ({ contentMarkdown }) => {
  return (
    <article className="prose prose-slate dark:prose-invert mx-auto max-w-4xl">
      <ReactMarkdown>{contentMarkdown}</ReactMarkdown>
    </article>
  );
};

export default MarkdownToHtml;
