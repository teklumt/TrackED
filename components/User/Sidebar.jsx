"use client";
import Image from "next/image";
import { useState } from "react";

function Sidebar({
  isOpen,
  university = [],
  isSidebarOpen,
  setIsSidebarOpen,
  userdata,
  filteredDocuments,
}) {
  return (
    <div
      className={`fixed border shadow-md inset-0 z-50 bg-gray-800 bg-opacity-75 transition-opacity ${
        isOpen ? "opacity-100 mt-[80px]" : "opacity-0 pointer-events-none"
      } md:opacity-100 md:pointer-events-auto md:relative md:bg-transparent`}
    >
      <div className="relative w-64 h-full bg-white md:shadow-none shadow-lg">
        <button
          className="absolute top-4 right-4 text-black md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        >
          X
        </button>
        <div className="p-4 flex flex-col justify-center">
          <div className="flex items-center flex-col">
            <div
              className="w-[90px] h-[90px] rounded-full"
              style={{
                backgroundImage: `url(${userdata?.photo.split("public")[1]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="ml-4">
              <h2 className="font-bold text-lg">
                {userdata?.fname} {userdata?.lname}
              </h2>
              <p className="text-sm text-gray-600 ">{userdata?.email}</p>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <p className=" text-Primarys text-lg font-calibri  font-semibold">
                Verified Docs
              </p>
              <p className="text-gray-600   ">
                {filteredDocuments.filter(
                  (doc) => doc.status.toUpperCase() === "VERIFIED"
                ).length || 0}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="  text-Primarys text-lg font-calibri  font-semibold">
                Waiting Docs
              </p>
              <p className="text-gray-600">
                {filteredDocuments.filter(
                  (doc) => doc.status.toUpperCase() === "WAITING"
                ).length || 0}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-1">#Institutions</h3>
            <div className="flex flex-wrap  gap-1">
              {filteredDocuments.map((data, index) => (
                <div className="relative" key={index}>
                  <span
                    key={index}
                    className="bg-gray-200  text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
                  >
                    {data.owner === userdata?.email &&
                      data.institution.split(" ")[0]}
                  </span>

                  <span className=" absolute top-0 right-1 cursor-pointer  rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </div>
              ))}
              <p className="text-gray-500 ">see more</p>
            </div>
            <div className="flex absolute bottom-0 left-0 right-0">
              <Image
                src="/assets/ADs/aa.jpg"
                alt="Profile"
                className="w-[351px]  "
                width={380}
                height={456}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
