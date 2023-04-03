import Image from "next/image";
import React from "react";

const linkClass =
  "text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 hover:underline";

const Page = () => {
  return (
    <>
      <header className="text-center">
        <h1 className="my-8 text-6xl font-extrabold">
          Hi👋, I&apos;m{" "}
          <span className="bg-gradient-to-r from-rose-500 to-violet-500 bg-clip-text  text-transparent">
            Edgar
          </span>
          .
        </h1>
        <h3 className="text-lg font-medium text-gray-600 dark:text-gray-200">
          A Master&apos;s student in Software Engineering. Welcome to my
          personal place.
          <br />
          Here you can look through{" "}
          <a className={linkClass} href="/blog">
            my blog
          </a>
          , learn a little more{" "}
          <a className={linkClass} href="about-me">
            about me
          </a>{" "}
          and{" "}
          <a className={linkClass} href="/portfolio">
            my projects
          </a>
          .
        </h3>
      </header>
      <main className="mt-24">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-4xl font-extrabold">Featured Projects</h2>
          <a href="/portfolio" className={`font-medium ${linkClass}`}>
            See more -{">"}
          </a>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-lg dark:bg-neutral-800">
            <h3 className="mb-2 text-xl font-bold">Project 1</h3>
            <Image
              src="https://365webresources.com/wp-content/uploads/2021/02/Free-Website-and-App-Behance-Presentation.jpg"
              width={470 / 2}
              height={598 / 2}
              alt="Project 1"
            />

            <div className="ml-2">
              <p className="text-gray-600 dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quod, voluptate, quia, voluptas quas voluptates
                quibusdam necessitatibus quae quidem voluptatum quos. Quisquam,
                quae voluptates. Quisquam quod, voluptate, quia, voluptas quas
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-lg dark:bg-neutral-800">
            <h3 className="mb-2 text-xl font-bold">Project 2</h3>
            <Image
              src="https://assets.justinmind.com/wp-content/uploads/2020/08/travel-ecommerce-app-mockup.png"
              width={1500}
              height={1000}
              alt="Project 2"
            />
            <p className="text-gray-600 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptas quas voluptates quibusdam
              necessitatibus quae quidem voluptatum quos. Quisquam, quae
              voluptates. Quisquam quod, voluptate, quia, voluptas quas
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-lg dark:bg-neutral-800">
            <h3 className="mb-2 text-xl font-bold">Project 3</h3>
            <Image
              src="https://assets.justinmind.com/wp-content/uploads/2020/08/travel-ecommerce-app-mockup.png"
              width={1500}
              height={1000}
              alt="Project 3"
            />
            <p className="text-gray-600 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptas quas voluptates quibusdam
              necessitatibus quae quidem voluptatum quos. Quisquam, quae
              voluptates. Quisquam quod, voluptate, quia, voluptas quas
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
