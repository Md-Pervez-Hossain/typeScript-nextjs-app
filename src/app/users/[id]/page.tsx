import { UserType } from "@/types/UserType";
import React from "react";

const page = async ({ params }: any) => {
  const id = params.id;
  async function getUser() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) {
      throw new Error("Failed To Load");
    }
    return res.json();
  }

  const user: UserType = await getUser();
  return (
    <div className="w-9/12 mx-auto my-16">
      <h2>Name: {user.name}</h2>
      <h2>User Name: {user.username}</h2>
      <h2>User Email: {user.email}</h2>
      <h2>
        User Address:{" "}
        {`${user.address.city} ${user.address.street} ${user.address.zipcode}`}
      </h2>
    </div>
  );
};

export default page;
