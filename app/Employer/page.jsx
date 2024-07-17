"use client";
import Image from "next/image";
import { useState, useEffect, use } from "react";
import FeedbackModal from "@/components/ModalWindows/FeedbackModal";
import ResponsiveDocumentTable from "@/components/Table/ResponsiveDocumentTable";
import { BiHide } from "react-icons/bi";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";

import { useForm } from "react-hook-form";

function page() {
  const [feedback, setFeedback] = useState(false);
  const [filteredDocuments, setFilteredDocuments] = useState([]);
  const [verifiedDocuments, setVerifiedDocuments] = useState([]);
  const [waitingDocuments, setWaitingDocuments] = useState([]);
  const [userdata, setUserdata] = useState(null);
  const [userDocuments, setUserDocuments] = useState([]);

  const { register, handleSubmit } = useForm();

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

  const handleDocumentUpload = async (data) => {
    const currUser = localStorage.getItem("Userdata");

    const formData = new FormData();
    formData.append("name", data.Degree);
    formData.append("document", data.photo[0]);
    formData.append("ID", data.documentid);
    formData.append("institution", data.institution);
    formData.append("grade", " ");
    formData.append("about", " ");
    formData.append("status", "Waiting");
    formData.append("date", new Date());
    formData.append("owner", data.ownerName + "By" + data.companyName);
    formData.append("ownerSub", currUser.subscrbition);

    try {
      const response = await fetch("/api/Documents/new", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();

        setFilteredDocuments((prev) => [...prev, result.data]);
        setUploadAndVerify(false);
      } else {
        console.error("Failed to upload document");
      }
    } catch (error) {
      console.error("Failed to upload document", error);
    }
  };
  return (
    <section>
      <div
        className="w-full relative h-[307px] "
        style={{
          backgroundImage: `url('/assets/Headline/Employer.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white text-center p-[15px] sm:p-[20px] md:p-[25px] rounded-[20px]">
            <h1 className=" text-2xl md:text-3xl font-bold ">
              {userdata?.fname} {userdata?.lname}
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0">
          <Image
            src="/assets/Headline/half.png"
            alt="Picture of the author"
            width={500}
            height={307}
          />
        </div>
      </div>
      <div>
        <h1
          className="text-[28px] mt-5 font-bold text-center"
          style={{
            fontFamily: "Calibri, sans-serif",
            color: "#2D3748",
          }}
        >
          Verify Documents
        </h1>
        <div className="flex justify-center text-gray-500 font-bold gap-6 mt-2">
          <a
            href="#new"
            className="hover:text-black-500 transition duration-300 ease-in-out"
          >
            New
          </a>
          <a
            href="#history"
            className="hover:text-black-500 transition duration-300 ease-in-out"
          >
            History
          </a>
        </div>
      </div>
      <div id="new" className="mb-10">
        <h1
          style={{
            fontFamily: "Calibri, sans-serif",
          }}
          className="mt-16 text-2xl font-bold text-center text-gray-600"
        >
          Verify New Documents
        </h1>
      </div>
      <div>
        <div className="flex justify-center items-center gap-6">
          <form
            className="flex flex-col gap-4 mb-16"
            onSubmit={handleSubmit(handleDocumentUpload)}
          >
            <div>
              <p className="font-bold text-Primarys mb-1 ">Company Name</p>

              <div>
                <input
                  type="text"
                  placeholder="Buna International Bank"
                  name="companyName"
                  className="w-full sm:w-[500px] h-[50px] bg-primeGray p-2 rounded-md"
                  {...register("companyName")}
                />
              </div>
            </div>
            <div>
              <p className="font-bold text-Primarys mb-1 ">Institution Name</p>

              <div>
                <select
                  name="institutionName"
                  className="w-full sm:w-[500px] h-[50px] bg-primeGray p-2 rounded-md"
                  {...register("institution")}
                >
                  <option value="Addis Ababa University">
                    Addis Ababa University
                  </option>
                  <option value="Addis Ababa Science and Technology">
                    Addis Ababa Science and Technology
                  </option>
                  <option value="Adama Science and Technology">
                    Adama Science and Technology
                  </option>
                </select>
              </div>
            </div>
            <div>
              <p className="font-bold text-Primarys mb-1 ">Owner Name</p>

              <div>
                <input
                  type="text"
                  placeholder="Teklu Moges"
                  name="ownerName"
                  className="w-full sm:w-[500px] h-[50px] bg-primeGray p-2 rounded-md"
                  {...register("ownerName")}
                />
              </div>
            </div>
            <div>
              <p className="font-bold text-Primarys mb-1 ">Degree Name</p>

              <div>
                <input
                  type="text"
                  placeholder="Masters of Business Administration"
                  name="Degree"
                  className="w-full sm:w-[500px] h-[50px] bg-primeGray p-2 rounded-md"
                  {...register("Degree")}
                />
              </div>
            </div>

            <div className="flex gap-[20px] flex-col sm:flex-row">
              <div>
                <p className="font-bold text-Primarys mb-1 ">Document ID</p>
                <div>
                  <input
                    type="text"
                    name="documentid"
                    placeholder="ETD4568"
                    className="w-full sm:w-[240px] h-[50px] bg-primeGray p-2 rounded-md"
                    {...register("ID")}
                  />
                </div>
              </div>
              <div>
                <p className="font-bold text-Primarys mb-1 ">National ID</p>
                <div>
                  <input
                    type="text"
                    name="nationalid"
                    placeholder="50 days"
                    className="w-full sm:w-[240px] h-[50px] bg-primeGray p-2 rounded-md"
                    {...register("ID")}
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold text-Primarys mb-1 ">Upload File</p>
              <div>
                <input
                  type="file"
                  name="image"
                  placeholder="JPEG, PNG, PDF"
                  className="w-full sm:w-[240px] h-[50px] bg-primeGray p-2 rounded-md"
                  {...register("photo")}
                />
              </div>
            </div>
            <div>
              <button className="bg-Primarys text-white w-full sm:w-[500px] h-[50px] text-[18px] font-bold rounded-md">
                Check
              </button>
            </div>
          </form>
          <Image
            src="/assets/storySet/Doc.png"
            alt="ads"
            width={450}
            height={200}
            className="rounded-md  hidden lg:block"
          />
        </div>
      </div>

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
              tableveri={filteredDocuments?.filter((doc) =>
                doc?.owner.split("By").includes(userdata?.fname)
              )}
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
      <div className="my-16 justify-center items-center flex">
        <button
          className="bg-Primarys w-[150px] h-[36px] text-primeGray rounded-md"
          onClick={() => setFeedback(true)}
        >
          Give Feedback
        </button>
      </div>
      {feedback && <FeedbackModal setUploadAndVerify={setFeedback} />}
    </section>
  );
}

export default page;
