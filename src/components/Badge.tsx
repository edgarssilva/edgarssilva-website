import React from "react";

type PropsType = {
  color:
    | "red"
    | "blue"
    | "green"
    | "yellow"
    | "indigo"
    | "purple"
    | "pink"
    | "gray";
  content: string;
};

// Tailwind CSS classes for each color because of purging (can't use dynamic classes 🫠)
const classes = {
  red: "bg-red-100 text-red-900 hover:bg-red-200 dark:bg-red-900 dark:text-red-100 dark:hover:bg-red-800 dark:hover:text-red-200",
  blue: "bg-blue-100 text-blue-900 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800 dark:hover:text-blue-200",
  green:
    "bg-green-100 text-green-900 hover:bg-green-200 dark:bg-green-900 dark:text-green-100 dark:hover:bg-green-800 dark:hover:text-green-200",
  yellow:
    "bg-yellow-100 text-yellow-900 hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-100 dark:hover:bg-yellow-800 dark:hover:text-yellow-200",
  indigo:
    "bg-indigo-100 text-indigo-900 hover:bg-indigo-200 dark:bg-indigo-900 dark:text-indigo-100 dark:hover:bg-indigo-800 dark:hover:text-indigo-200",
  purple:
    "bg-purple-100 text-purple-900 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-100 dark:hover:bg-purple-800 dark:hover:text-purple-200",
  pink: "bg-pink-100 text-pink-900 hover:bg-pink-200 dark:bg-pink-900 dark:text-pink-100 dark:hover:bg-pink-800 dark:hover:text-pink-200",
  gray: "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200",
};

export default function Badge({ color, content }: PropsType) {
  return (
    <span className={`cursor-pointer rounded-full px-4 ${classes[color]}`}>
      {content}
    </span>
  );
}
