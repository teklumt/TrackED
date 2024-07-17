"use client";

import Image from "next/image";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";

function LandingHeading() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="900px:flex items-center justify-between px-[2rem] h-[80px] border hidden ">
        <Link href={"/"}>
          <Image
            src="/assets/temologo.png"
            width={168}
            height={29.92}
            alt="logo"
            className="cursor-pointer"
          />
        </Link>

        <div className="flex gap-10 font-dm-sans text-gray-500 text-[18px] font-medium">
          <div className="cursor-pointer">
            <a href="#feature">Features</a>{" "}
          </div>
          <div className="cursor-pointer">
            <a href="#price">Pricing</a>
          </div>
          <div className="cursor-pointer">
            <Link href={"#trust"}>Trust</Link>
          </div>
          <div className="cursor-pointer">
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="flex  items-center">
          <div className=" cursor-pointer w-[94px] h-[36px] flex items-center justify-center font-bold  text-[16px]">
            <Link href={"/auth"}> Login</Link>
          </div>
          <div className="cursor-pointer  border w-[94px] h-[36px] flex items-center justify-center font-bold  text-[16px] text-white bg-Primarys rounded-md ">
            <Link href={"/auth/Signup"}>Sign Up</Link>
          </div>
        </div>
      </header>
      <div>
        <div className="flex items-center justify-between px-1 sm:px-[2rem] h-[80px]  900px:hidden border ">
          <Link href={"/"}>
            <Image
              src="/assets/temologo.png"
              width={168}
              height={29.92}
              alt="logo"
              className="cursor-pointer"
            />
          </Link>
          <div className="flex  items-center">
            <div className=" cursor-pointer w-[94px] h-[36px] flex items-center justify-center font-bold  text-[16px]">
              <Link href={"/Login"}> Login</Link>
            </div>
            <div className="cursor-pointer  border w-[94px] h-[36px] flex items-center justify-center font-bold  text-[16px] text-white bg-Primarys rounded-md ">
              <Link href={"/SignUp"}>Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        {showMenu && (
          <div className="flex gap-4 absolute top-[60px]  text-[18px] font-semibold w-full items-center p-2 mt-4 flex-col justify-center text-2xl text-gray-600 font-calibri bg-white">
            <div className="cursor-pointer  hover:text-black hover:text-bold">
              <a href="#feature">Features</a>
            </div>
            <div className="cursor-pointer  hover:text-black hover:text-bold">
              <a href="#price">Pricing</a>
            </div>
            <div className="cursor-pointer  hover:text-black hover:text-bold">
              <Link href={"/AboutUs"}>About Us</Link>
            </div>
            <div className="cursor-pointer  hover:text-black hover:text-bold">
              <a href="#contact">Contact</a>
            </div>
          </div>
        )}
        <div
          className="absolute  top-[80px] 900px:hidden cursor-"
          onClick={() => setShowMenu((showMenu) => !showMenu)}
        >
          {!showMenu && (
            <MdMenu
              size={35}
              className="font-bold text-black  border bg-white "
            />
          )}
          {showMenu && <p className="text-lg ml-3 text-black font-bold">X</p>}
        </div>
      </div>
    </>
  );
}

export default LandingHeading;
