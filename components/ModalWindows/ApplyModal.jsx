"use client";

import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import Image from "next/image";
import styled from "styled-components";
const Modal = styled.div`
  position: fixed;
  z-index: 1000;
  top: 70px;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 50px auto;
  border: 1px solid #888;
  width: 992px;
  border-radius: 10px;

  @media screen and (max-width: 1024px) {
    width: 400px;
  }
`;

const ApplyModal = ({ setUploadAndVerify }) => {
  const { companyName, location, jobtype, about, desc, req, quali, offer } = {
    companyName: "AVBG",
    location: "Addis Ababa",
    jobtype: "Full Time",
    about:
      "We are a company that is dedicated to the development of the country",
    desc: "We are looking for a developer who is experienced in React",
    req: "Experience in React",
    quali: "BSc in Computer Science",
    offer: "We offer a competitive salary",
  };
  return (
    <Modal>
      <ModalContent>
        <div className="p-6 space-y-2">
          <div className="flex justify-between mb-10">
            <p className="font-bold ">Apply</p>
            <div
              className="cursor-pointer text-xl"
              onClick={() => setUploadAndVerify(false)}
            >
              X
            </div>
          </div>
          <div className="flex gap-4">
            <p className="font-bold ">Company:</p>
            <p className="font-semibold text-gray-500">{companyName}</p>
          </div>
          <div className="flex gap-4">
            <p className="font-bold ">Location:</p>
            <p className="font-semibold text-gray-500">{location}</p>
          </div>
          <div>
            <h1 className="font-bold">About the Company</h1>
            <p>{about}</p>
          </div>
          <div>
            <h1 className="font-bold">Job Description</h1>
            <p>{desc}</p>
          </div>
          <div>
            <h1 className="font-bold">Job Responsiblities</h1>
            <p>{req}</p>
          </div>
          <div>
            <h1 className="font-bold">Qualifications</h1>
            <p>{quali}</p>
          </div>
          <div>
            <h1 className="font-bold">What we offer</h1>
            <p>{offer}</p>
          </div>
          <div className="mb-5">
            <h1 className="font-bold">How to Apply</h1>
            <p>
              Interested candidates should fill out the form below and hit the
              submit button. We will reach you through your email. Buna Bank is
              an equal opportunity employer. We celebrate diversity and are
              committed to creating an inclusive environment for all employees.
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <form className="border rounded-md max-w-[520px] p-2">
              <div className="flex flex-col ">
                <label htmlFor="name" className="font-semibold">
                  Name
                </label>
                <div>
                  <input
                    type="text"
                    placeholder="Teklu Moges"
                    name="name"
                    className="w-full sm:w-[500px] h-[50px] bg-primeGray p-2 rounded-md"
                  />
                </div>
              </div>
              <div className="flex flex-col ">
                <label htmlFor="email " className="font-semibold">
                  Email
                </label>
                <div>
                  <input
                    type="text"
                    placeholder="teklumoges482@gmail.com"
                    name="Email"
                    className="w-full sm:w-[500px] h-[50px] bg-primeGray p-2 rounded-md"
                  />
                </div>
              </div>
              <div className="flex flex-col ">
                <label htmlFor="phone" className="font-semibold">
                  Phone
                </label>
                <div>
                  <input
                    type="text"
                    placeholder="0900423958"
                    name="phone"
                    className="w-full sm:w-[500px] h-[50px] bg-primeGray p-2 rounded-md"
                  />
                </div>
              </div>
              <div className="flex flex-col ">
                <label htmlFor="portfolio" className="font-semibold">
                  Portfolio
                </label>
                <div>
                  <input
                    type="text"
                    placeholder="link"
                    name="protfolio"
                    className="w-full sm:w-[500px] h-[50px] bg-primeGray p-2 rounded-md"
                  />
                </div>
              </div>

              <button className="w-full mt-5 sm:w-[500px] h-[50px] bg-Primarys p-2 text-white font-semibold rounded-md">
                Submit
              </button>
            </form>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              className="border p-1 rounded-md w-[100px]"
              onClick={() => setUploadAndVerify(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default ApplyModal;
