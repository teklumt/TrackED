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
  width: 1049px;

  @media screen and (max-width: 1024px) {
    width: 400px;
  }
  @media screen and (max-width: 768px) {
    width: 375px;
  }
`;

const HireModal = ({ setUploadAndVerify }) => {
  return (
    <Modal>
      <ModalContent>
        <div className=" flex lg:w-full flex-col-reverse lg:flex-row w-[375px] ">
          <div
            className=" lg:flex flex-col bg-primeGray justify-center hidden w-[277.93px] h-[1034.94px]"
            style={{
              backgroundImage: "url(/assets/ADs/ac.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <Image
              src="/assets/ADs/ac.jpg"
              className="h-100px"
              alt=""
              width={274}
              height={100}
            /> */}
          </div>
          <div className="p-6 ">
            <div className="flex justify-between   ">
              <h1 className="text-[24px] font-bold  font-calibri ml-5 text-yellow-500">
                Hire
              </h1>
              <p
                onClick={() => setUploadAndVerify(false)}
                className=" cursor-pointer text-xl"
              >
                X
              </p>
            </div>
            <form className="p-6 space-y-4">
              <div className="flex flex-col lg:flex-row justify-between gap-4">
                <div className="">
                  <p classname="  ">Company Name</p>
                  <div>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Buna international bank"
                      className=" border h-[40px] lg:w-[400px] w-[full]  border-gray-300 bg-gray-100 rounded-lg p-2"
                    />
                  </div>
                </div>
                <div>
                  <p classname=" ">Location</p>
                  <div>
                    <input
                      className=" border h-[40px] lg:w-[200px] w-full   border-gray-300 bg-gray-100 rounded-lg p-1"
                      type="text"
                      name="location"
                      id=""
                      placeholder="Addis Ababa"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-4">
                <div>
                  <p classname="">Job Title</p>
                  <div>
                    <input
                      type="text"
                      name="jobtitle"
                      placeholder="UI/UX Designer"
                      className=" border h-[40px] lg:w-[400px] w-full   border-gray-300 bg-gray-100 rounded-lg p-2"
                    />
                  </div>
                </div>
                <div>
                  <p classname="  ">Job Type</p>
                  <div>
                    <input
                      type="text"
                      name="jobType"
                      placeholder="Full-Time, Remote"
                      className=" border h-[40px] lg:w-[200px] w-full   border-gray-300 bg-gray-100 rounded-lg p-2"
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <p classname="">About Your Campany</p>
                <p>
                  <textarea
                    name="aboutYourCampany"
                    className="border h-[100px] w-[616px]   border-gray-300 bg-gray-100 rounded-lg p-2"
                    id=""
                    cols="30"
                    rows="2"
                    onResize={false}
                  ></textarea>
                </p>
              </div>

              <div className="">
                <p classname="">Job Description</p>
                <p>
                  <textarea
                    name="jobDescription"
                    className="border h-[100px] w-[616px]   border-gray-300 bg-gray-100 rounded-lg p-2"
                    id=""
                    cols="30"
                    rows="2"
                    onResize={false}
                  ></textarea>
                </p>
              </div>
              <div className="">
                <p classname="">Job Responsiblity</p>
                <p>
                  <textarea
                    name="jobResponsiblity"
                    className="border h-[100px] w-[616px]   border-gray-300 bg-gray-100 rounded-lg p-2"
                    id=""
                    cols="30"
                    rows="2"
                    onResize={false}
                  ></textarea>
                </p>
              </div>
              <div className="">
                <p classname="">Job Qualification</p>
                <p>
                  <textarea
                    name="jobQualification"
                    className="border h-[100px] w-[616px]   border-gray-300 bg-gray-100 rounded-lg p-2"
                    id=""
                    cols="30"
                    rows="2"
                    onResize={false}
                  ></textarea>
                </p>
              </div>

              <div className="">
                <p classname="">Job Offers</p>
                <p>
                  <textarea
                    name="jobOffers"
                    className="border h-[100px] w-[616px]   border-gray-300 bg-gray-100 rounded-lg p-2"
                    id=""
                    cols="30"
                    rows="2"
                    onResize={false}
                  ></textarea>
                </p>
              </div>

              <div className=" flex gap-2 justify-end mt-2">
                <button
                  type="reset"
                  className="border p-1 rounded-md w-[100px]"
                >
                  Reset
                </button>
                <button className="border p-1 rounded-md w-[100px] bg-Primarys text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default HireModal;
