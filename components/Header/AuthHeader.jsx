"use client";

import Image from "next/image";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";

function AuthHeader() {
  return (
    <header className="flex items-center justify-between px-[2rem] h-[70px] border  ">
      <Link href={"/"}>
        <Image
          src="/assets/temologo.png"
          width={168}
          height={29.92}
          alt="logo"
          className="cursor-pointer"
        />
      </Link>
      <div></div>
    </header>
  );
}

export default AuthHeader;
