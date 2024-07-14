import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiLoader2Fill } from "react-icons/ri";
import { TiDelete, TiDeleteOutline } from "react-icons/ti";
import { CiMenuKebab } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiHide } from "react-icons/bi";
import { RiFolderDownloadLine } from "react-icons/ri";
import { RiShareLine } from "react-icons/ri";

import styled from "styled-components";

const PopUp = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: none;
  z-index: 1000;
`;

const DocumentCardDots = styled.div`
  position: relative;
  &:hover ${PopUp} {
    display: block;
  }
`;

function DocumentCard({ degree, institution, gpa, status, image, desc }) {
  return (
    <div className="bg-white rounded-md shadow-lg sm:w-[494px] w-full">
      <div className="flex ">
        <Image
          src={image}
          alt="Certificate"
          className="w-24 h-24 object-cover rounded-md"
          width={96}
          height={96}
        />
        <div className="ml-4 flex-1 p-1">
          <h2 className="text-[14px] font-semibold">{degree}</h2>
          <p className="text-sm text-gray-500">{institution}</p>
          <div className="sm:flex mt-2 mb-1 hidden ">
            <div className="flex flex-col items-center mr-4 w-[108px] h-[64px] bg-primeGray justify-center rounded-md">
              <span className="text-[13px] text-Primarys">GPA</span>
              <span className="text-[13px] font-bold">{gpa}</span>
              <div className="flex text-[12px]">
                <span className="text-yellow-400">&#9733;</span>
                <span className="text-yellow-400">&#9733;</span>
                <span className="text-yellow-400">&#9733;</span>
                <span className="text-yellow-400">&#9733;</span>
                <span className="text-gray-300">&#9733;</span>
              </div>
            </div>
            <div className="flex flex-col items-center w-[108px] h-[64px]  bg-primeGray justify-center rounded-md">
              <span className="text-[12px] font-medium text-Primarys ">
                STATUS
              </span>
              <span className="text-[12px] font-bold text-black">{status}</span>

              {status === "Verified" ? (
                <span className="text-green-500">
                  <FaRegCheckCircle />
                </span>
              ) : status === "Waiting" ? (
                <span className="text-yellow-500 ">
                  <RiLoader2Fill />
                </span>
              ) : (
                <span className="text-red-500 text-[17px] font-semibold">
                  <TiDeleteOutline />
                </span>
              )}
            </div>
          </div>
        </div>
        <DocumentCardDots className="flex flex-col justify-between">
          <p className="text-black hover:text-gray-600">
            <BsThreeDotsVertical size={25} />
          </p>
          <PopUp>
            <p className="text-black cursor-pointer mb-2  hover:text-gray-600">
              <RiFolderDownloadLine size={20} />
            </p>
            <p className="text-black cursor-pointer  mb-2 hover:text-gray-600">
              <RiShareLine size={20} />
            </p>
            <p className="text-red-600 cursor-pointer mb-2 hover:text-red-500">
              <BiHide size={20} />
            </p>
          </PopUp>
        </DocumentCardDots>
      </div>
      <div className="p-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">About</p>
        <p className="text-sm text-gray-500 mt-2">
          {desc.length > 50 ? desc.slice(0, 70) + "..." : desc}
        </p>
      </div>
    </div>
  );
}

export default DocumentCard;
