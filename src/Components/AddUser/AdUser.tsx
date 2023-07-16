"use client";

import React, { useState } from "react";

const AdUser = () => {
  const [name, setName] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name);
  };

  console.log(name);
  return (
    <div className="w-9/12 mx-auto my-16">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-gray-200 rounded-lg px-4 py-2 w-full mb-5"
        />
        <button className="bg-blue-400 px-4 py-2 text-white text-xl font-bold rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdUser;
