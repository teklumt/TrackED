"use client";
import { useState } from "react";
import Sidebar from "@/components/User/Sidebar";
import DocumentCard from "@/components/User/DocumentCard";
import { FaAnglesRight } from "react-icons/fa6";
import styled from "styled-components";
import UploadC from "@/components/Upload/UploadC";
import { IoCloudUploadOutline } from "react-icons/io5";
import VerifyDocumentModal from "@/components/ModalWindows/VerifyDocumentModal";

function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [UploadAndVerify, setUploadAndVerify] = useState(false);

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
          <div>
            <div className="flex mx-auto lg:w-[703px] justify-center items-center w-[10] gap-2 flex-wrap">
              <select
                name=""
                id=""
                className="lg:w-[168px] bg-gray-100 w-full border h-[45px]  max-w-[441px] rounded-md p-1"
              >
                <option value="institution">Institutin</option>
                <option value="document">Document</option>
              </select>
              <input
                type="text"
                placeholder="Search"
                className=" border h-[45px] max-w-[441px] w-full border-gray-300 bg-gray-100 rounded-lg p-2"
              />
              <button className="hidden  max-w-[441px] bg-Primarys lg:flex items-center justify-center h-[45px] w-full lg:w-[70px] text-white rounded-lg p-2">
                Search
              </button>
            </div>
            <div className="flex mx-auto md:my-3 p-1  max-w-[441px]    mt-1 lg:max-w-[703px]  items-center w-[10] gap-2 flex-wrap">
              <select
                name=""
                id=""
                className="lg:w-[168px] w-full border  max-w-[441px]  bg-gray-100 h-[45px] rounded-md p-1"
              >
                <option value="all">All</option>
                <option value="verified">Verified</option>
                <option value="rejected">Rejected</option>
                <option value="wating">Wating</option>
              </select>
              <button className="flex bg-Primarys  max-w-[441px] lg:hidden items-center justify-center h-[45px] w-full lg:w-[70px] text-white rounded-lg p-2">
                Search
              </button>

              <button
                className="flex gap-5 justify-center items-center border border-black p-1 rounded-full md:w-[235px] hover:bg-Primarys hover:text-white"
                onClick={() => setUploadAndVerify(true)}
              >
                <IoCloudUploadOutline /> Upload and verify
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-wrap gap-10 mt-10">
          {Documents.map((job, index) => (
            <DocumentCard key={index} {...job} />
          ))}
        </div>

        {UploadAndVerify && (
          <VerifyDocumentModal
            UploadAndVerify={UploadAndVerify}
            setUploadAndVerify={setUploadAndVerify}
          />
        )}
        <div className="my-10 flex justify-center">
          <button className="bg-Primarys text-white font-bold p-1 rounded-md w-[150px]">
            Give Feedback
          </button>
        </div>
      </div>
    </div>
  );
}
export default Page;
