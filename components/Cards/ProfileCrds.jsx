import Image from "next/image";
import { FaEnvelope, FaPhone, FaShareAlt, FaEllipsisH } from "react-icons/fa";
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoLinkSharp } from "react-icons/io5";
import { RiDeleteBin2Line } from "react-icons/ri";
import { LuPhone } from "react-icons/lu";
const ProfileCard = ({
  image = "/assets/persons/person1.jpg",
  email = "teklu@gmail.com",
  phone = "0900423958",
  portfolio = "https://www.linkedin.com/in/teklu-moges",
}) => {
  return (
    <div className="">
      <div className="w-[264px] relative h-[340px] border rounded-md shadow-md flex flex-col justify-center items-center gap-2">
        <div
          className="w-[96px] h-[96px] rounded-full"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[20px]">Alemu Kebede</h1>
          <p className="text-gray-400 text-[16px]">Professor</p>
        </div>
        <div className="flex gap-2">
          <a
            className="bg-Primarys w-[44px] h-[44px] text-white rounded-full flex justify-center items-center"
            href={`mailto:${email}`}
          >
            <FaEnvelope />{" "}
          </a>
          <a
            className="bg-Primarys w-[44px] h-[44px] text-white rounded-full flex justify-center items-center"
            href={`${portfolio}`}
          >
            <IoLinkSharp />
          </a>
          <button className="bg-Primarys w-[44px] h-[44px] text-white rounded-full flex justify-center items-center">
            <RiDeleteBin2Line />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-black flex  gap-3 justify-center items-center font-[14px]">
            <LuPhone /> {phone}{" "}
          </p>
          <p className="text-sm text-gray-400">{email}</p>
        </div>
        <div className="absolute top-2 right-2  ">
          <FaStar className="text-Primarys " />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
