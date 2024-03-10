import React from "react";
import Sidebar from "src/components/Sidebar";
import Post from "src/components/Post";

const Posts = () => {
  return (
    <div>
      <Sidebar currentView="Posts" />
      <div className="ml-80 p-6">
        <h1 className="mb-3 font-bold text-xl font-Montserrat">Post a picture from events you went to</h1>
        <Post/>
      </div>
      
    </div>
    
  );
};

export default Posts;
