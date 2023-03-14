import React from "react";
import { n2m } from "~/server/notion";

import { remark } from "remark";
import html from "remark-html";

const getPage = async () => {
  const mdblocks = await n2m.pageToMarkdown("51e421206a914d299def6b106a1e1b03");

  const markdown = n2m.toMarkdownString(mdblocks);

  return String(await remark().use(html).process(markdown));
};

const Blog = async () => {
  const page = await getPage();
  return (
    <article className="prose mx-auto">
      <h1>Test Blog</h1>
      <div dangerouslySetInnerHTML={{ __html: page }} />
    </article>
  );
};

export default Blog;
