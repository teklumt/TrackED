"use client";
import Headlines from "@/components/Reuseable/Headlines";
import Swip from "@/components/Reuseable/Swip";
import SwipCards from "@/components/Reuseable/SwipCards";
import JobCard from "@/components/User/JobCard";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

import ApplyModal from "@/components/ModalWindows/ApplyModal";
import { useState } from "react";

function page() {
  const slides = [
    {
      image: "/assets/Job/campany/Group.png",
      name: "AVBG",
      testi: "20 Jobs | Addis Ababa ",
    },
    {
      image: "/assets/Job/campany/Image 141.png",
      name: "ZK Bank",
      testi: "10 Jobs | Addis Ababa ",
    },
    {
      image: "/assets/Job/campany/Image 143.png",
      name: "RFGB",
      testi: "20 Jobs | Addis Ababa ",
    },
    {
      image: "/assets/Job/campany/Image 142.png",
      name: "CDFG",
      testi: "20 Jobs | Addis Ababa ",
    },
    {
      image: "/assets/Job/campany/Group.png",
      name: "AVBG",
      testi: "20 Jobs | Addis Ababa ",
    },
    {
      image: "/assets/Job/campany/Image 143.png",
      name: "RFGB",
      testi: "20 Jobs | Addis Ababa ",
    },
  ];
  const slides2 = [
    {
      image: "/assets/Job/Filds/Container 148.png",
      name: "Finance",
      testi: "200 Jobs ",
    },
    {
      image: "/assets/Job/Filds/Container 150.png",
      name: "Education",
      testi: "100 Jobs ",
    },
    {
      image: "/assets/Job/Filds/Container 152.png",
      name: "IT",
      testi: "200 Jobs ",
    },
    {
      image: "/assets/Job/Filds/Container 154.png",
      name: "Marketing",
      testi: "200 Jobs ",
    },
    {
      image: "/assets/Job/Filds/Container 148.png",
      name: "Finance",
      testi: "200 Jobs ",
    },
  ];
  const slides3 = [
    {
      image: "/assets/Job/campany/image 136.png",
      title: "Senior Software Engineer",
      price: "$100K - $120K",
      employer: "Buna International Bank",
      location: "Addis Ababa",
      type: "Full Time",
    },

    {
      image: "/assets/Job/campany/image 141.png",
      title: " React Developer",
      price: "$100K - $120K",
      employer: "CBE",
      location: "Addis Ababa",
      type: "Full Time, Remote",
    },
    {
      image: "/assets/Job/campany/image 142.png",
      title: "Senior Software Engineer",
      price: "$100K - $120K",
      employer: "Buna International Bank",
      location: "Addis Ababa",
      type: "Full Time",
    },
    {
      image: "/assets/Job/campany/image 143.png",
      title: " React Developer",
      price: "$100K - $120K",
      employer: "CBE",
      location: "Addis Ababa",
      type: "Full Time, Remote",
    },
    {
      image: "/assets/Job/campany/image 136.png",
      title: "Senior Software Engineer",
      price: "$100K - $120K",
      employer: "Buna International Bank",
      location: "Addis Ababa",
      type: "Full Time",
    },
    {
      image: "/assets/Job/campany/image 141.png",
      title: " React Developer",
      price: "$100K - $120K",
      employer: "CBE",
      location: "Addis Ababa",
      type: "Full Time, Remote",
    },

    {
      image: "/assets/Job/campany/image 143.png",
      title: " React Developer",
      price: "$100K - $120K",
      employer: "CBE",
      location: "Addis Ababa",
      type: "Full Time, Remote",
    },

    {
      image: "/assets/Job/campany/image 142.png",
      title: "Frontend Developer",
      price: "$80K - $100K",
      employer: "Tech Company",
      location: "Remote",
      type: "Full Time",
    },
    {
      image: "/assets/Job/campany/image 141.png",
      title: "UI/UX Designer",
      price: "$70K - $90K",
      employer: "Design Studio",
      location: "New York",
      type: "Full Time",
    },
  ];

  const [showModal, setShowModal] = useState(false);

  return (
    <section className=" ">
      <div className="bg-primeGray lg:mt-[-20px]">
        <Headlines
          title="1780+ Jobs For You "
          description="Discover Over 1780 Job Opportunities Tailored to Your Skills and Aspirations. Join Thousands of Successful Candidates Who Found Their Dream Jobs with Us!"
          buttonTextPrimary="Explore now"
          buttonTextSecondary="Stay Updated"
          imageUrl="/assets/Job/Werh.png"
          URL1="/SignUp"
          URL2="#update"
        />
      </div>
      <div className="text-center mt-7 mb-8 max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Top companies</h2>
        <p className="mt-1 mb-1 max-w-[645px] mx-auto text-[18px] text-gray-500 ">
          Highlighting the leading companies in the industry based on recent
          performance and market influence.
        </p>
        <SwipCards slides={slides} />
      </div>
      <div className=" p-1 sm:p-2 md:p-0 md:mt-32 text-center">
        <h2 className="text-4xl font-bold mb-10 text-center">Explore jobs</h2>

        <p className="mt-1 mb-3 max-w-[645px] mx-auto text-[18px] text-gray-500 ">
          Find the best job opportunities in your area of expertise. We have
          over 1780 job opportunities for you!
        </p>
        <form className="lg:w-[1024px]">
          <div className="flex   justify-end items-center w-[10] gap-2 flex-wrap">
            <input
              type="text"
              placeholder="Search"
              className=" border h-[45px] md:max-w-[441px] w-full border-gray-300 bg-gray-100 rounded-lg p-2"
            />
            <select
              name=""
              id=""
              className="md:w-[168px] w-full border h-[45px] rounded-md p-1"
            >
              <option value="100K" className="font-bold">
                100,000 +
              </option>
              <option value="50k">50,000 +</option>
              <option value="10K">10,000 +</option>
              <option value="1k">1000 +</option>
              <option value="100">100 +</option>
              <option value="any">Any</option>
            </select>
            <select
              name=""
              id=""
              className="md:w-[168px] w-full border h-[45px] rounded-md p-1"
            >
              <option value="ETHAA">Addis Ababa</option>
              <option value="ETHBDR">Bahir Dar</option>
              <option value="ETHJIMMA">Jimma</option>
              <option value="ETHHAWASSA">Hawassa</option>
              <option value="any">Any</option>
            </select>
          </div>
          <div className="flex mx-auto md:my-3 justify-end  mt-1   items-center w-[10] gap-2 flex-wrap">
            <select
              name=""
              id=""
              className="md:w-[168px] w-full border h-[45px] rounded-md p-1"
            >
              <option value="all">All</option>
              <option value="IT">IT</option>
              <option value="Finance">Finance</option>
              <option value="wating">Marketing</option>
              <option value="Education">Education</option>
            </select>
            <button className="bg-Primarys flex items-center justify-center h-[45px] w-full md:w-[168px] text-white rounded-lg p-2">
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="p-10 flex flex-wrap justify-center gap-10">
        {slides3.map((slide, index) => (
          <JobCard
            key={index}
            image={slide.image}
            title={slide.title}
            price={slide.price}
            employer={slide.employer}
            location={slide.location}
            type={slide.type}
            setShowModal={setShowModal}
          />
        ))}
      </div>
      <div className="flex gap-3 justify-end mr-10 ">
        <GrFormPrevious className="bg-primeGray rounded-full" size={40} />
        <GrFormNext className="bg-primeGray rounded-full" size={40} />
      </div>

      <div className="text-center mt-10 mb-8 max-w-[1200px] mx-auto">
        <h2 className="text-4xl font-calibri font-bold mb-10 text-center">
          Fields to Explore Here
        </h2>

        <SwipCards slides={slides2} wid={80} hei={80} />
      </div>

      <div className="my-10 flex justify-center">
        <button className="bg-Primarys text-white font-bold p-1 rounded-md w-[150px]">
          Give Feedback
        </button>
      </div>

      {showModal && <ApplyModal setUploadAndVerify={setShowModal} />}
    </section>
  );
}

export default page;
