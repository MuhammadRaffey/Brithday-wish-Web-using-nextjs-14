"use client";
import React from "react";
import Card from "./components/card";
import NavBar from "./components/navbar";
const page = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Card />
    </div>
  );
};

export default page;
