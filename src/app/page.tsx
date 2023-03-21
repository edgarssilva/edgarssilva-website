import React from "react";

const Page = () => {
  return (
    <header className="text-center">
      <h1 className="my-8 text-6xl font-extrabold">
        Hi👋, I&apos;m{" "}
        <span className="bg-gradient-to-r from-rose-500 to-violet-500 bg-clip-text  text-transparent">
          Edgar
        </span>
        .
      </h1>
                  <h3 className="text-lg font-medium text-gray-600 dark:text-gray-200">
        A Master&apos;s student in Software Engineering. Welcome to my personal
        place.
                 <br />
        Here you can look through{" "}
        <a className="text-blue-600 dark:text-blue-400" href="/blog">
          my blog
        </a>
        , learn a little more{" "}
        <a className="text-blue-600 dark:text-blue-400" href="about-me">
          about me
        </a>{" "}
        and{" "}
        <a className="text-blue-600 dark:text-blue-400" href="/portfolio">
          my projects
        </a>
        .
      </h3>
    </header>
  );
};

export default Page;
