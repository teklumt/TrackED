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
  width: 709px;

  @media screen and (max-width: 1024px) {
    width: 400px;
  }
`;

const Upgrade = ({ setUploadAndVerify }) => {
  return (
    <Modal>
      <ModalContent>
        <div className=" flex lg:w-full flex-col-reverse lg:flex-row w-[375px] ">
          <div className=" lg:flex flex-col bg-primeGray justify-center hidden">
            <Image
              src="/assets/Doc/Documents.png"
              className="h-100px"
              alt=""
              width={274}
              height={100}
            />
          </div>
          <div className="p-6 ">
            <div className="flex justify-between   ">
              <h1 className="text-[24px] font-bold  font-calibri ml-5 text-yellow-500 ">
                Premium
              </h1>
              <p
                onClick={() => setUploadAndVerify(false)}
                className=" cursor-pointer text-xl"
              >
                X
              </p>
            </div>
            <div className="ml-5 mt-2">
              <p>
                <span className="font-bold">Your User ID:</span>{" "}
                <span className="font-semibold text-gray-400">ET148569</span>
              </p>
            </div>
            <div className="ml-5 text-gray-500 mt-1">
              <p>
                Use your User ID as the reason when you make the payment, and
                upload your electronic receipt or enter your transaction ID. We
                will let you know after we check.
              </p>
            </div>
            <div className="ml-2 mt-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/Job/campany/comer.jpeg"
                    width={50}
                    height={50}
                    alt=""
                  />
                  <p className="font-semibold text-gray-700">
                    Commercial Bank of Ethiopia
                  </p>
                </div>
                <div className="font-bold text-gray-500">
                  <p>1000302233709</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/Job/campany/tele.jpeg"
                    width={50}
                    height={50}
                    alt=""
                  />
                  <p className="font-semibold text-gray-700">Telebirr</p>
                </div>
                <div className="font-bold text-gray-500">
                  <p>0900423958</p>
                </div>
              </div>
            </div>
            <form className="px-6 mt-2 space-y-4">
              <div className="flex flex-col lg:flex-row  sm:gap-8">
                <div className="">
                  <p classname="  ">Transaction ID</p>
                  <div>
                    <input
                      type="text"
                      name="DocumentName"
                      className=" border h-[40px] w-[210px]   border-gray-300 bg-gray-100 rounded-lg p-2"
                    />
                  </div>
                </div>
                <div>
                  <p classname=" ">Upload File</p>
                  <div>
                    <input
                      className=" border h-[40px] w-[230px]   border-gray-300 bg-gray-100 rounded-lg p-1"
                      type="file"
                      name="file"
                      id=""
                    />
                  </div>
                </div>
              </div>
              <p className="text-center mt-[-10px]">
                If this is your first time and you want to try for free, write
                <span className="font-bold"> FreeTrial</span> in the Transaction
                ID.
              </p>

              <div className=" flex gap-2 justify-end mt-2">
                <button type="reset" className="border p-1 rounded-md w-[90px]">
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

export default Upgrade;
