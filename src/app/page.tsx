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
        Here you can look through my blog, learn a little more about me and my
        projects.
      </h3>
    </header>
  );
};

export default Page;
