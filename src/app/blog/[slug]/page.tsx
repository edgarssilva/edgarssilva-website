import React, { cache } from "react";
import { n2m, notion } from "~/server/notion";

import { remark } from "remark";
import html from "remark-html";
import { env } from "~/env.mjs";
import { prisma } from "~/server/db";

import date from "date-and-time";
import ordinal from "date-and-time/plugin/ordinal";
import timespan from "date-and-time/plugin/timespan";

date.plugin(ordinal);
date.plugin(timespan);

// export async function getStaticPaths() {
//   const { results: pages } = await notion.databases.query({
//     database_id: env.NOTION_DATABASE_ID,
//     filter: {
//       property: "Status",
//       status: {
//         equals: "Published",
//       },
//     },
//   });

//   return {
//     paths: pages.map((page) => ({
//       params: { slug: page.properties.Slug.rich_text[0].plain_text },
//     })),
//     fallback: false,
//   };
// }

const getPage = cache(async (slug: string) => {
  const { results: pages } = await notion.databases.query({
    database_id: env.NOTION_DATABASE_ID,
    filter: {
      and: [
        {
          property: "Slug",
          rich_text: {
            equals: slug,
          },
        },
        {
          property: "Status",
          status: {
            equals: "Published",
          },
        },
      ],
    },
  });

  if (!pages) return { page: null, html: "" };
  const page = pages[0];
  if (!page) return { page: null, html: "" };

  const mdblocks = await n2m.pageToMarkdown(page.id);
  const markdown = n2m.toMarkdownString(mdblocks);

  return { page, html: String(await remark().use(html).process(markdown)) };
});

const getStats = async (slug: string) => {
  let post = await prisma.post.findUnique({
    where: {
      slug,
    },
  });

  if (!post) {
    post = await prisma.post.create({
      data: {
        slug,
      },
    });
  }

  if (process.env.NODE_ENV === "development") {
    return post;
  }

  return await prisma.post.update({
    where: {
      id: post.id,
    },
    data: {
      views: {
        increment: 1,
      },
    },
  });
};

const Blog = async ({ params }: { params: { slug: string } }) => {
  const { page, html } = await getPage(params.slug);
  const stats = await getStats(params.slug);
  const pageDate = new Date(page.properties.Date.date.start);

  const now = new Date();
  const diffDate = date.timeSpan(now, pageDate);

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <article className="flex-1 grow">
        <h4 className="font-medium text-neutral-500">
          {date.format(pageDate, "dddd, MMMM DDD YYYY")}
          {/* TODO: Add X amount of minutes/hours/days/months/years ago */}
          {" ("}
          {date.isSameDay(now, pageDate)
            ? diffDate.toHours("H [hours] m [minutes]")
            : diffDate.toDays("D [days]")}
          {" ago)"}
        </h4>
        <h1 className="my-2 text-6xl font-extrabold">
          {page.properties.Title.title[0].plain_text}
        </h1>
        <h4 className="font-medium text-neutral-500">{stats.views} views</h4>
        <div
          className="prose mt-8 max-w-3xl dark:prose-invert "
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
      <aside className="mt-32 h-screen w-72 divide-y divide-gray-300 py-8 dark:divide-neutral-600">
        <div className="mb-6">
          <h2 className="mb-2 text-lg font-semibold">About</h2>
          <p className="w-72 text-sm text-neutral-500">
            Debating on whether to keep this section or not. I think it
            {`&apos;`}s unnecessary. But it be nice to have a place to put some
            ads 🤑
          </p>
          <div className="my-3 flex flex-row flex-wrap gap-3">
            <div className="cursor-pointer rounded-full bg-red-300 px-4 text-red-900 hover:bg-red-400  dark:bg-red-900 dark:text-red-300 dark:hover:bg-red-800 dark:hover:text-red-200 ">
              Test
            </div>
            <div className="cursor-pointer rounded-full bg-yellow-300 px-4 text-yellow-900 hover:bg-yellow-400 dark:bg-yellow-900 dark:text-yellow-300 dark:hover:bg-yellow-800 dark:hover:text-yellow-200">
              Random Shit
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Blog;
