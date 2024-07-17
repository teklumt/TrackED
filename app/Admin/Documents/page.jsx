"use client";

import Headline2 from "@/components/Reuseable/Headline2";
import ResponsiveDocumentTable from "@/components/Table/ResponsiveDocumentTable";
import { BiHide } from "react-icons/bi";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";

import { useState, useEffect } from "react";

const tableData = [
  {
    checked: true,
    documentImage: "/assets/Documents/1.png",
    name: "Masters of Computer Science",
    status: "Waiting",
    subscription: "Free",
    by: "Teklu Moges",
  },
  {
    checked: true,
    documentImage: "/assets/Documents/2.png",
    name: "Masters of Business Admins.",
    status: "Accepted",
    subscription: "Free",
    by: "Teklu Moges",
  },
  {
    checked: false,
    documentImage: "/assets/Documents/3.png",
    name: "Masters of Computer Science",
    status: "Accepted",
    subscription: "Pre",
    by: "Mahfouz Teyib",
  },
  {
    checked: false,
    documentImage: "/assets/Documents/4.jpg",
    name: "Masters of Business Admins.",
    status: "Accepted",
    subscription: "Free",
    by: "Miheret girmachew",
  },
  {
    checked: false,
    documentImage: "/assets/Documents/5.jpg",
    name: "Bachelor's Degree in Mechanical Engineering",
    status: "Rejected",
    subscription: "Inst",
    by: "AASTU BY Samuel Mulugeta",
  },
  {
    checked: true,
    documentImage: "/assets/Documents/6.jpg",
    name: "Masters of Business Admins.",
    status: "Accepted",
    subscription: "Free",
    by: "Miheret girmachew",
  },
  {
    checked: false,
    documentImage: "/assets/Documents/5.jpg",
    name: "Masters of Computer Science",
    status: "Accepted",
    subscription: "Pre",
    by: "Mahfouz Teyib",
  },
  {
    checked: false,
    documentImage: "/assets/Documents/2.png",
    name: "Masters of Computer Science",
    status: "Waiting",
    subscription: "Free",
    by: "Teklu Moges",
  },
  {
    checked: true,
    documentImage: "/assets/Documents/4.jpg",
    name: "Bachelor's Degree in Software Engineering",
    status: "Accepted",
    subscription: "Inst",
    by: "AAIT BY Bereket sintayehu",
  },
  {
    checked: true,
    documentImage: "/assets/Documents/3.png",
    name: "Masters of Software Engineering",
    status: "Accepted",
    subscription: "Pre",
    by: "Mahfouz Teyib",
  },
  {
    checked: false,
    documentImage: "/assets/Documents/1.png",
    name: "Bachelor's Degree in Mechanical Engineering",
    status: "Rejected",
    subscription: "Free",
    by: "Miheret girmachew",
  },
];

function page() {
  const [verifiedDocuments, setVerifiedDocuments] = useState([]);
  const [waitingDocuments, setWaitingDocuments] = useState([]);
  const [userdata, setUserdata] = useState(null);
  const [userDocuments, setUserDocuments] = useState([]);
  const [filteredDocuments, setFilteredDocuments] = useState([]);

  useEffect(() => {
    const email = localStorage.getItem("Email");
    async function fetchData() {
      try {
        const response = await fetch(`/api/user/${email}`, {
          method: "GET",
        });
        const result = await response.json();
        setUserdata(result);

        setFilteredDocuments(result.Documents);
        localStorage.setItem("Userdata", JSON.stringify(result));
      } catch (error) {
        console.error("Failed to fetch the data", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchDocuments() {
      try {
        const response = await fetch("/api/Documents", {
          method: "GET",
        });
        const result = await response.json();
        setFilteredDocuments(result);
        setUserDocuments(result);
      } catch (error) {
        console.error("Failed to fetch the data", error);
      }
    }
    fetchDocuments();
  }, [userdata]);

  useEffect(() => {
    if (userdata) {
      const verified = filteredDocuments.filter(
        (doc) =>
          (doc.status.toUpperCase() === "ACCEPTED" ||
            doc.status.toUpperCase() === "REJECTED") &&
          doc.to === userdata.fname
      );
      const waiting = filteredDocuments.filter(
        (doc) =>
          doc.status.toUpperCase() === "WAITING" && doc.to === userdata.fname
      );
      setWaitingDocuments(waiting);
      setVerifiedDocuments(verified);
    }
  }, [filteredDocuments, userdata]);
  return (
    <section>
      <div className="shadow-md mb-3">
        <Headline2 headtext={"Documents"} />
      </div>
      <main className="max-w-[1195px] mx-auto p-3">
        <h1 className="400px:text-[24px] text-[20px] font-bold mb-8">
          Documents listing
        </h1>

        <div>
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
              </div>
            </div>

            <div className="mb-32">
              <ResponsiveDocumentTable
                // tableData={tableData1}
                tableveri={filteredDocuments}
                type={"inst"}
                service={"Veri"}
                setFilteredDocuments={setFilteredDocuments}
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
        </div>
      </main>
    </section>
  );
}

export default page;
