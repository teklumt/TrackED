"use client";
import { useState } from "react";
import Sidebar from "@/components/User/Sidebar";
import DocumentCard from "@/components/User/DocumentCard";
import { FaAnglesRight } from "react-icons/fa6";
import styled from "styled-components";

function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const Documents = [
    {
      degree: "Bachelor's Degree in Mechanical Engineering",
      institution: "Addis Ababa Science and Technology University",
      gpa: "3.90",
      status: "Verified",
      image: "/assets/Documents/1.png",
      desc: "A degree of Bachelor of Science in Mechanical Engineering from Addis Ababa Science and Technology University with a GPA of 3.90",
    },
    {
      degree: "Master of Business Administration (MBA)",
      institution: "Addis Ababa Science and Technology University",
      gpa: "3.76",
      status: "Rejected",
      image: "/assets/Documents/2.png",
      desc: "A degree of Master of Business Administration from Addis Ababa Science and Technology University with a GPA of 3.76",
    },
    {
      degree: "Bachelor's Degree in Mechanical Engineering",
      institution: "Addis Ababa Science and Technology University",
      gpa: "3.86",
      status: "Waiting",
      image: "/assets/Documents/3.png",
      desc: "A degree of Bachelor of Science in Mechanical Engineering from Addis Ababa Science and Technology University with a GPA of 3.86",
    },
    {
      degree: "Bachelor's Degree in Mechanical Engineering",
      institution: "Addis Ababa Science and Technology University",
      gpa: "3.90",
      status: "Verified",
      image: "/assets/Documents/1.png",
      desc: "A degree of Bachelor of Science in Mechanical Engineering from Addis Ababa Science and Technology University with a GPA of 3.90",
    },
    {
      degree: "Master of Business Administration (MBA)",
      institution: "Addis Ababa Science and Technology University",
      gpa: "3.76",
      status: "Rejected",
      image: "/assets/Documents/2.png",
      desc: "A degree of Master of Business Administration from Addis Ababa Science and Technology University with a GPA of 3.76",
    },
    {
      degree: "Bachelor's Degree in Mechanical Engineering",
      institution: "Addis Ababa Science and Technology University",
      gpa: "3.86",
      status: "Waiting",
      image: "/assets/Documents/3.png",
      desc: "A degree of Bachelor of Science in Mechanical Engineering from Addis Ababa Science and Technology University with a GPA of 3.86",
    },
  ];
  const university = [
    "AASTU",
    "AAU",
    "St. Mary's University",
    "Design",
    "Fine Art",
  ];

  return (
    <div className="min-h-screen flex">
      <Sidebar
        isOpen={isSidebarOpen}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        university={university}
      />
      <div className="flex-1 p-6">
        <button
          className="md:hidden mb-2  top-[80px] left-0 sticky bg-gray-200 hover:text-yellow-800 hover:pl-5 p-2 rounded-lg"
          onClick={() => setIsSidebarOpen(true)}
        >
          <FaAnglesRight size={20} />
        </button>

        <div className="md:mt-5">
          <form>
            <div className="flex mx-auto lg:w-[703px] justify-center items-center w-[10] gap-2 flex-wrap">
              <select
                name=""
                id=""
                className="md:w-[168px] w-full border h-[45px] rounded-md p-1"
              >
                <option value="institution">Institutin</option>
                <option value="document">Document</option>
              </select>
              <input
                type="text"
                placeholder="Search"
                className=" border h-[40px] md:max-w-[441px] w-full border-gray-300 rounded-lg p-2"
              />
              <button className="bg-Primarys flex items-center justify-center h-[40px] w-full md:w-[70px] text-white rounded-lg p-2">
                Search
              </button>
            </div>
            <div className="flex mx-auto md:my-3  mt-1 lg:w-[703px] p-1 items-center w-[10] gap-2 flex-wrap">
              <select
                name=""
                id=""
                className="md:w-[168px] w-full border h-[40px] rounded-md p-1"
              >
                <option value="all">All</option>
                <option value="verified">Verified</option>
                <option value="rejected">Rejected</option>
                <option value="wating">Wating</option>
              </select>

              <input
                type="file"
                name=""
                className="w-[250px] h-[40px] border items-center rounded-md p-1"
                id=""
              />
            </div>
          </form>
        </div>

        <div className="flex justify-center flex-wrap gap-10 mt-10">
          {Documents.map((job, index) => (
            <DocumentCard key={index} {...job} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Page;
