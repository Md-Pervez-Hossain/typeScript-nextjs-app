import React from "react";
import DisplayPost from "../DisplayPost.tsx/DisplayPost";
import { PostType } from "@/types/PostType";
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed To Fetch");
  }
  return res.json();
}
const Post = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className="w-9/12 mx-auto grid grid-cols-3 gap-10">
      {data.map((post: PostType) => {
        return <DisplayPost key={post.id} {...post}></DisplayPost>;
      })}
    </div>
  );
};

export default Post;
