import Image from "next/image";
import React from "react";
import { MdHomeRepairService } from "react-icons/md";
import { CiBookmark, CiLocationOn } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { PiBuildingOfficeThin } from "react-icons/pi";

import { FaStar } from "react-icons/fa";

const JobCard = ({
  image,
  title,
  price,
  employer,
  location,
  type,
  setShowModal,
}) => {
  return (
    <div className="flex rounded-md border bg-[#FFFFFF] shadow-md justify-between p-2 w-[337px] h-[223px] ">
      <div className="">
        <div className="flex mb-5 gap-2">
          <Image
            // src="/assets/Job/campany/image 136.png"
            src={image}
            alt=""
            width={50}
            height={50}
          />

          <div>
            <h2 className="text-Primarys font-bold text-[18px]">{title}</h2>
            <p className="text-sm text-gray-400">{price}</p>
          </div>
        </div>
        <div className="space-y-3 text-[#9095A1]">
          <div className="flex gap-2  items-center ">
            <PiBuildingOfficeThin size={20} />
            <p>{employer}</p>
          </div>
          <div className="flex gap-2  items-center ">
            <CiLocationOn size={20} />
            <p>{location}</p>
          </div>
          <div className="flex gap-2  items-center ">
            <CiBookmark size={20} />
            <p>{type}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <div className="cursor-pointer">
          <FaRegStar />
        </div>

        <button
          className="text-[12px] w-[45px] h-[28px] bg-[#EFB034] text-white rounded-md font-bold"
          onClick={() => setShowModal(true)}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobCard;
