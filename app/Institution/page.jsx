"use client";

import ResponsiveDocumentTable from "@/components/Table/ResponsiveDocumentTable";
import Image from "next/image";
import { BiHide } from "react-icons/bi";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { useState } from "react";
const tableData1 = [
  {
    checked: true,
    documentImage: "/assets/Documents/1.png",
    name: "Masters of Computer Science",
    status: "Accepted",
    subscription: "Free",
    by: "Teklu Moges",
    to: "ASTU",
  },
  {
    checked: true,
    documentImage: "/assets/Documents/2.png",
    name: "Masters of Business Admins.",
    status: "Accepted",
    subscription: "Free",
    by: "Teklu Moges",
    to: "AASTU",
  },
  {
    checked: false,
    documentImage: "/assets/Documents/3.png",
    name: "Masters of Computer Science",
    status: "Accepted",
    subscription: "Pre",
    by: "Mahfouz Teyib",
    to: "AASTU",
  },
  {
    checked: false,
    documentImage: "/assets/Documents/4.jpg",
    name: "Masters of Business Admins.",
    status: "Accepted",
    subscription: "Free",
    by: "Miheret girmachew",
    to: "AAIT",
  },
  {
    checked: false,
    documentImage: "/assets/Documents/5.jpg",
    name: "Bachelor's Degree in Mechanical Engineering",
    status: "Rejected",
    subscription: "Inst",
    by: "AASTU BY Samuel Mulugeta",
    to: "AAIT",
  },
  {
    checked: true,
    documentImage: "/assets/Documents/6.jpg",
    name: "Masters of Business Admins.",
    status: "Accepted",
    subscription: "Free",
    by: "Miheret girmachew",
    to: "AAIT",
  },
  {
    checked: false,
    documentImage: "/assets/Documents/5.jpg",
    name: "Masters of Computer Science",
    status: "Accepted",
    subscription: "Pre",
    by: "Mahfouz Teyib",
    to: "AASTU",
  },
  {
    checked: false,
    documentImage: "/assets/Documents/2.png",
    name: "Masters of Computer Science",
    status: "Accepted",
    subscription: "Free",
    by: "Teklu Moges",
    to: "AAIT",
  },
  {
    checked: true,
    documentImage: "/assets/Documents/4.jpg",
    name: "Bachelor's Degree in Software Engineering",
    status: "Accepted",
    subscription: "Inst",
    by: "AAIT BY Bereket sintayehu",
    to: "AASTU",
  },
  {
    checked: true,
    documentImage: "/assets/Documents/3.png",
    name: "Masters of Software Engineering",
    status: "Accepted",
    subscription: "Pre",
    by: "Mahfouz Teyib",
    to: "ASTU",
  },
  {
    checked: false,
    documentImage: "/assets/Documents/1.png",
    name: "Bachelor's Degree in Mechanical Engineering",
    status: "Rejected",
    subscription: "Free",
    by: "Miheret girmachew",
    to: "AAU",
  },
];

const tableData2 = [
  {
    checked: true,
    documentImage: "/assets/Documents/1.png",
    name: "Masters of Computer Science",
    status: "Waiting",
    subscription: "Free",
    by: "Teklu Moges",
    to: "ASTU",
  },
  {
    checked: true,
    documentImage: "/assets/Documents/2.png",
    name: "Masters of Business Admins.",
    status: "Waiting",
    subscription: "Free",
    by: "Teklu Moges",
    to: "AASTU",
  },
  {
    checked: false,
    documentImage: "/assets/Documents/3.png",
    name: "Masters of Computer Science",
    status: "Waiting",
    subscription: "Pre",
    by: "Mahfouz Teyib",

    to: "AASTU",
  },
  {
    checked: false,
    documentImage: "/assets/Documents/4.jpg",
    name: "Masters of Business Admins.",
    status: "Waiting",
    subscription: "Free",
    by: "Miheret girmachew",

    to: "AAIT",
  },
  {
    checked: false,
    documentImage: "/assets/Documents/5.jpg",
    name: "Bachelor's Degree in Mechanical Engineering",
    status: "Rejected",
    subscription: "Inst",
    by: "AASTU BY Samuel Mulugeta",
    to: "AAIT",
  },
  {
    checked: true,
    documentImage: "/assets/Documents/6.jpg",
    name: "Masters of Business Admins.",
    status: "Rejected",
    subscription: "Free",
    by: "Miheret girmachew",
    to: "AAIT",
  },
];

function page() {
  return (
    <section>
      <div className="flex relative justify-center gap-4">
        <div className="flex justify-center items-center ">
          <h1
            className=" text-3xl sm:text-4xl font-bold  text-center"
            style={{
              fontFamily: "calibri",
            }}
          >
            Addis Ababa Science and Technology University
          </h1>
        </div>
        <div
          className="md:w-[709px] h-[350px]"
          style={{
            backgroundImage: "url(/assets/Headline/AASTU.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute bottom-0 left-0">
          <Image
            src="/assets/Headline/half.png"
            alt="Picture of the author"
            width={500}
            height={307}
          />
        </div>
      </div>

      <div className="mt-10">
        <h1
          className="text-[28px] font-bold text-center "
          style={{
            fontFamily: "calibri",
          }}
        >
          Documents Statistics
        </h1>
        <p className="max-w-[600px] p-1 mb-[26px] text-[18px]  text-gray-400 mx-auto text-center">
          Quick stats on the number of documents issued, verification requests
          received and verified documents.
        </p>
        <div className="p-6 flex flex-wrap justify-center gap-[32px]">
          <div className="flex items-center p-6 w-[371px] h-[125px] border rounded-md shadow-md justify-between">
            <div className="flex flex-col ">
              <div className="flex font-bold text-[16px]">
                <p>Total Documents</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[25px] font-semibold">1499</p>
                <p className="w-[70px] border text-[#117B34] text-[16px] font-semibold flex justify-center items-center rounded-full h-[36px] bg-[#EEFDF3]">
                  <MdArrowUpward className="mr-[6px]" size={17} /> 5%
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/assets/Line/Line Chart 9.png"
                alt="Picture of the author"
                width={101}
                height={44}
              />
            </div>
          </div>
          <div className="flex items-center p-6 w-[371px] h-[125px] border rounded-md shadow-md justify-between">
            <div className="flex flex-col ">
              <div className="flex font-bold text-[16px]">
                <p>Verification Requests</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[25px] font-semibold">490</p>
                <p className="w-[70px] border text-[#117B34] text-[16px] font-semibold flex justify-center items-center rounded-full h-[36px] bg-[#EEFDF3]">
                  <MdArrowUpward className="mr-[6px]" size={17} /> 12%
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/assets/Line/Line Chart 11.png"
                alt="Picture of the author"
                width={101}
                height={44}
              />
            </div>
          </div>
          <div className="flex items-center p-6 w-[371px] h-[125px] border rounded-md shadow-md justify-between">
            <div className="flex flex-col ">
              <div className="flex font-bold text-[16px]">
                <p>Verified Documents </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[25px] font-semibold text-[#EFB034]">1350</p>
                <p className="w-[70px] border text-[#DE3B40] text-[16px] font-semibold flex justify-center items-center rounded-full h-[36px] bg-[#FDF2F2]">
                  <MdArrowDownward className="mr-[6px]" size={17} /> 25%
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/assets/Line/Line Chart 10.png"
                alt="Picture of the author"
                width={101}
                height={44}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex  flex-col justify-center items-center my-10">
        <h1
          className="text-[28px] font-bold text-center "
          style={{
            fontFamily: "calibri",
          }}
        >
          Verified Documents
        </h1>
        <Image
          src="/assets/Headline/underline.png"
          width={100}
          height={100}
          alt=""
        />
      </div>
      <div className="max-w-[1195px] mx-auto p-3">
        <div className="flex flex-wrap  items-center justify-center  400px:justify-between gap-5   mb-2 ">
          <p className="">
            <span className="text-Primarys font-bold">2490</span> users
          </p>
          <div className="flex gap-5">
            <div>
              <input
                type="text"
                className="w-max-[359px] bg-primeGray p-2 rounded-md"
                placeholder="🔍 Search"
              />
            </div>
            <div className="border   h-[36px] cursor-pointer items-center justify-center flex rounded-md">
              <button className="bg-Primarys h-[36px] text-white p-1 rounded-md ">
                + Add Documents
              </button>
            </div>
          </div>
        </div>

        <div className="mb-32">
          <ResponsiveDocumentTable
            tableData={tableData1}
            type={"inst"}
            service={"Veri"}
          />

          <div className="flex flex-wrap  items-center justify-center  400px:justify-between gap-5 mt-2  mb-2 ">
            <div className="flex gap-5">
              <div className="flex items-center gap-2">
                <span className="text-red-600">
                  <TiDeleteOutline size={20} />
                </span>
                <p className="font-semibold text-titleGray"> Remove</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">
                  <BiHide size={20} />
                </span>
                <p className="font-semibold text-titleGray"> Block</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">
                  <BiHide size={20} />
                </span>
                <p className="font-semibold text-titleGray"> Blocked</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex gap-3">
                <GrFormPrevious
                  className="bg-primeGray rounded-[10px] cursor-pointer"
                  size={36}
                />
                <GrFormNext
                  className="bg-primeGray rounded-[10px]     cursor-pointer"
                  size={36}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex  flex-col justify-center items-center my-10">
        <h1
          className="text-[28px] font-bold text-center "
          style={{
            fontFamily: "calibri",
          }}
        >
          Verification Requests
        </h1>
        <Image
          src="/assets/Headline/underline.png"
          width={100}
          height={100}
          alt=""
        />
      </div>
      <div className="max-w-[1195px] mx-auto p-3">
        <div className="flex flex-wrap  items-center justify-center  400px:justify-between gap-5   mb-2 ">
          <p className="">
            <span className="forn-semibold text-Yellow-500 mr-6  ">
              Waiting 6
            </span>
            <span className="forn-semibold text-red-500 ">Rejected 29</span>
          </p>
          <div className="flex gap-5">
            <div>
              <input
                type="text"
                className="w-max-[359px] bg-primeGray p-2 rounded-md"
                placeholder="🔍 Search"
              />
            </div>
            <div className="border w-[100px]  h-[36px] cursor-pointer items-center justify-center flex rounded-md">
              <select name="" id="">
                <option value="all" className="flex">
                  All
                </option>
                <option value="wating">Wating</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-32">
          <ResponsiveDocumentTable
            tableData={tableData2}
            type={"inst"}
            service={"request"}
          />

          <div className="flex flex-wrap  items-center justify-center  400px:justify-between gap-5 mt-2  mb-2 ">
            <div className="flex gap-5">
              <div className="flex items-center gap-2">
                <span className="text-red-600">
                  <TiDeleteOutline size={20} />
                </span>
                <p className="font-semibold text-titleGray"> Remove</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">
                  <BiHide size={20} />
                </span>
                <p className="font-semibold text-titleGray"> Block</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">
                  <BiHide size={20} />
                </span>
                <p className="font-semibold text-titleGray"> Blocked</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex gap-3">
                <GrFormPrevious
                  className="bg-primeGray rounded-[10px] cursor-pointer"
                  size={36}
                />
                <GrFormNext
                  className="bg-primeGray rounded-[10px]     cursor-pointer"
                  size={36}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <button className="bg-Primarys  rounded-md p-1  text-primeGray">
          Give Feedback
        </button>
      </div>
    </section>
  );
}

export default page;
