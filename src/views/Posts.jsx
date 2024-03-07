import React from "react";
import Sidebar from "src/components/Sidebar";

const Posts = () => {
  return (
    <div>
      <Sidebar currentView="Posts" />
      <div className="ml-60">
        <h1>Posts</h1>
        <p>Welcome to the Posts</p>
      </div>
    </div>
  );
};

export default Posts;
