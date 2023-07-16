"use client";
import React from "react";
import { PostType } from "@/types/PostType";
const DisplayPost = (post: PostType) => {
  console.log(post.title);
  return (
    <div>
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default DisplayPost;
