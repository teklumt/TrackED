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
  width: 760px;

  @media screen and (max-width: 1024px) {
    width: 400px;
  }
`;

const VerifyDocumentModal = ({ setUploadAndVerify }) => {
  return (
    <Modal>
      <ModalContent>
        <div className=" flex lg:w-full flex-col-reverse lg:flex-row w-[375px] h-[365px] ">
          <div className=" lg:flex flex-col bg-primeGray justify-center hidden">
            <Image
              src="/assets/ADs/aac.jpg"
              className="h-[365px] w-[274px] object-cover"
              alt=""
              width={274}
              height={100}
            />
          </div>
          <div className="p-6 ">
            <div className="flex justify-between   ">
              <h1 className="text-[24px] font-bold  font-calibri ml-5 ">
                Give Feedback
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
                  <p classname="">Tag</p>
                  <div>
                    <input
                      type="text"
                      name="DocumentName"
                      className=" border h-[40px] w-[300px]   border-gray-400 bg-gray-100 rounded-lg p-2"
                    />
                  </div>
                </div>
              </div>

              <div className="">
                <p classname="">Your Feedback</p>
                <p>
                  <textarea
                    name=""
                    className="border h-[100px] w-[300px]   border-gray-400 bg-gray-100 rounded-lg p-2"
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

export default VerifyDocumentModal;
