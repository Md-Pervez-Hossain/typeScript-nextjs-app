import React from "react";
import DisplayUsers from "./DisplayUsers";
import { UserType } from "@/types/UserType";

async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Failed To Post");
  }
  return res.json();
}
const Users = async () => {
  const users = await getUser();
  return (
    <div className="w-9/12 mx-auto grid grid-cols-4 gap-16">
      {users.map((user: UserType) => {
        return <DisplayUsers key={user.id} {...user}></DisplayUsers>;
      })}
    </div>
  );
};

export default Users;
