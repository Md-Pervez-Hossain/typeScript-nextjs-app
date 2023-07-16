"use client";

import { PostType } from "@/types/PostType";
import React from "react";

const page = async ({ params }: any) => {
  const id = params.id;
  async function getPost() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) {
      throw new Error("Failed to Load data");
    }
    return res.json();
  }
  const singlePost: PostType = await getPost();
  console.log(singlePost);
  return (
    <div className="w-9/12 mx-auto my-16">
      <h2>{singlePost.title}</h2>
    </div>
  );
};

export default page;
