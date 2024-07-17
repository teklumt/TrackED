"use client";

import Headline2 from "@/components/Reuseable/Headline2";
import ResponsiveTable2 from "@/components/Table/Responsivetable2";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";
import { useState } from "react";
import HireModal from "@/components/ModalWindows/HireModal";
const tableData = [
  {
    id: "Code#884",
    name: "Ashley Davis",
    email: "AshleyDavis@email.com",
    resid_id: "ET8251",
    subscription: "Premium",
    image: "/assets/Persons/person2.jpg",
    type: "person",
    status: "Waiting",
  },
  {
    id: "Code#884",
    name: "Richard Davis",
    email: "RichardDavis@email.com",
    resid_id: "ET1836",
    subscription: "Premium",
    image: "/assets/Persons/person3.jpg",
    type: "person",
    status: "Waiting",
  },
  {
    id: "Code#884",
    name: "Brian Harris",
    email: "BrianHarris@email.com",
    resid_id: "ET414",
    subscription: "Premium",
    image: "/assets/Persons/person.png",
    type: "person",
    status: "Accepted",
  },
  {
    id: "Code#884",
    name: "Andrea Sanchez",
    email: "AndreaSanchez@email.com",
    resid_id: "ET9258",
    subscription: "Premium",
    image: "/assets/Persons/person1.jpg",
    type: "person",
    status: "Rejected",
  },

  {
    id: "Code#884",
    name: "Pedro Moreno",
    email: "PedroMoreno@email.com",
    resid_id: "ET2774",
    subscription: "Premium",
    image: "/assets/Persons/person4.jpg",
    type: "person",
    status: "Accepted",
  },
];
function Page() {
  const [hireModal, setHireModal] = useState(false);
  return (
    <section>
      <Headline2 headtext={"Premium"} />
      <div className="mb-10 ">
        <div className="flex mb-3 shadow-md pb-4  gap-10 justify-center font-semibold text-yellow-500">
          <div className="cursor-pointer" onClick={() => setHireModal(true)}>
            Hire
          </div>
          <Link href={"Proposals"}>Proposals</Link>
        </div>
      </div>

      <main className="max-w-[1195px] mx-auto p-3">
        <div>
          <div className="flex flex-wrap  items-center justify-center  400px:justify-between gap-5  mb-2 ">
            <h1 className="400px:text-[24px] text-[20px] font-bold">
              Premium Users
            </h1>
            <div className="flex gap-5">
              <div className="border w-[100px] h-[36px] cursor-pointer items-center justify-center flex rounded-md">
                <select name="" id="">
                  <option value="" className="flex">
                    All
                  </option>
                  <option value="">Free</option>
                  <option value="">Premium</option>
                </select>
              </div>
              <button className="bg-Primarys text-white w-[100px] h-[36px]  rounded-md">
                {" "}
                + Add User
              </button>
            </div>
          </div>
          <hr className="mb-5" />
          <div className="flex flex-wrap  items-center justify-center  400px:justify-between gap-5  mt-16 mb-2 ">
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
              <div className="border w-[100px]  h-[36px] cursor-pointer items-center justify-center flex rounded-md">
                <select name="" id="">
                  <option value="" className="flex">
                    All
                  </option>
                  <option value="">Free</option>
                  <option value="">Premium</option>
                </select>
              </div>
            </div>
          </div>

          <div className="">
            <ResponsiveTable2 tableData={tableData} type={"premium"} />
          </div>

          <div className="flex flex-wrap  items-center justify-center  400px:justify-between gap-5 mt-2  mb-2 ">
            <div className="flex gap-5">
              <div className="flex items-center gap-2">
                <span className="text-red-600">
                  <TiDeleteOutline size={20} />
                </span>
                <p className="font-semibold text-titleGray"> Accept</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">
                  <AiOutlineCheckCircle size={20} />
                </span>
                <p className="font-semibold text-titleGray">Reject</p>
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
        <div>
          <div className="mt-16 mb-16">
            <h1 className="400px:text-[24px] text-[20px] text-center sm:mt-8  font-bold">
              Post ADs
            </h1>

            {/* <hr className="w-[100px] h-[10px] bg-Primarys mx-auto mb-10" /> */}
          </div>
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
                <p className="font-bold text-Primarys mb-1 ">Product Link</p>
                <div>
                  <input
                    type="text"
                    name="ProductLink"
                    placeholder="https://www.buna.com"
                    className="w-full sm:w-[500px] h-[50px] bg-primeGray p-2 rounded-md"
                  />
                </div>
              </div>
              <div className="flex gap-[20px] flex-col sm:flex-row">
                <div>
                  <p className="font-bold text-Primarys mb-1 ">Image</p>
                  <div>
                    <input
                      type="file"
                      name="image"
                      placeholder="JPEG, PNG, GIF"
                      className="w-full sm:w-[240px] h-[50px] bg-primeGray p-2 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-Primarys mb-1 ">How Long</p>
                  <div>
                    <input
                      type="Number"
                      name="HowLong"
                      placeholder="50 days"
                      className="w-full sm:w-[240px] h-[50px] bg-primeGray p-2 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div>
                <button className="bg-Primarys text-white w-full sm:w-[500px] h-[50px] text-[18px] font-bold rounded-md">
                  {" "}
                  Post
                </button>
              </div>
            </form>
            <Image
              src="/assets/storySet/Ads.png"
              alt="ads"
              width={450}
              height={200}
              className="rounded-md hidden lg:block"
            />
          </div>
        </div>
        {hireModal && <HireModal setUploadAndVerify={setHireModal} />}
      </main>
    </section>
  );
}

export default Page;
