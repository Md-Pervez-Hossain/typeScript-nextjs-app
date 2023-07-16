"use client";
import React from "react";
import { PostType } from "@/types/PostType";
import Link from "next/link";
const DisplayPost = ({ title, body, id }: PostType) => {
  console.log(title);
  return (
    <div>
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{body}</p>
      <Link href={`/post/${id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default DisplayPost;
