import React, { useState } from "react";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";

export default function NavBar() {
  return (
    <Navbar>
      <NavbarContent className=" sm:flex gap-4 justify-center mr-10">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/image">
            Image Card
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
