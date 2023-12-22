/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="bg-bluePrimary h-screen  py-10 flex justify-center items-center text-2xl text-white">
      <div className="space-y-10">
        <h2 className="font-bold text">OOOPs!!! Sorry, This page doesn't found</h2>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <Link href="/">Go Back Home</Link>
          </span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
