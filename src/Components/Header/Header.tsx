import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-9/12 mx-auto flex justify-between font-bold py-8">
      <Link href={"/"}>Logo</Link>
      <div className="flex gap-5">
        <Link href={"/add-user"}>Add User</Link>
        <Link href={"/post"}>Post</Link>
        <Link href={"/users"}>Users</Link>
      </div>
    </div>
  );
};

export default Header;
