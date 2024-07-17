"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import FeedbackModal from "@/components/ModalWindows/FeedbackModal";

function page() {
  const [feedback, setFeedback] = useState(false);
  const [filteredDocuments, setFilteredDocuments] = useState([]);
  const [verifiedDocuments, setVerifiedDocuments] = useState([]);
  const [waitingDocuments, setWaitingDocuments] = useState([]);
  const [userdata, setUserdata] = useState(null);
  const [userDocuments, setUserDocuments] = useState([]);

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
              System Overview
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
          <form className="flex flex-col gap-4 mb-16">
            <div>
              <p className="font-bold text-Primarys mb-1 ">Company Name</p>

              <div>
                <input
                  type="text"
                  placeholder="Buna International Bank"
                  name="companyName"
                  className="w-full sm:w-[500px] h-[50px] bg-primeGray p-2 rounded-md"
                />
              </div>
            </div>
            <div>
              <p className="font-bold text-Primarys mb-1 ">Institution Name</p>

              <div>
                <select
                  name="institutionName"
                  className="w-full sm:w-[500px] h-[50px] bg-primeGray p-2 rounded-md"
                >
                  <option value="AAU">Addis Ababa University</option>
                  <option value="AASTU">
                    Addis Ababa Science and Technology
                  </option>
                  <option value="ASTU">Adama Science and Technology</option>
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
