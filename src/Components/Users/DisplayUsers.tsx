"use client";
import { UserType } from "@/types/UserType";
import Link from "next/link";
import React from "react";

const DisplayUsers = (user: UserType) => {
  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h2>User Name: {user.username}</h2>
      <h2>User Email: {user.email}</h2>
      <h2>
        User Address:{" "}
        {`${user.address.city} ${user.address.street} ${user.address.zipcode}`}
      </h2>
      <Link href={`/users/${user.id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default DisplayUsers;
