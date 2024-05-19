"use client";
import React from "react";
import ImageCard from "../components/imgc";
import NavBar from "../components/navbar";
export default function Card() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <ImageCard />
    </div>
  );
}
