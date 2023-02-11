import React from "react";

const NoContent = () => {
  return (
    <div className="flex flex-col items-center justify-center text-2xl h-96">
      <div className="container flex flex-col bg-slate-400/90 p-5 rounded-md shadow-lg items-center justify-center space-y-3">
        <h1 className="text-4xl">Hello Reddit</h1>
        <p className="text-sm">This is the Reddit Viewer App</p>
        <p className="text-center">
          A simple application that allows you to search any subreddit on Reddit
          and view the first 100 images from that subreddit.
        </p>
      </div>
    </div>
  );
};

export default NoContent;
