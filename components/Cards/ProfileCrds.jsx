import Image from "next/image";
import { FaEnvelope, FaPhone, FaShareAlt, FaEllipsisH } from "react-icons/fa";
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoLinkSharp } from "react-icons/io5";
import { RiDeleteBin2Line } from "react-icons/ri";
const ProfileCard = ({
  image = "/assets/persons/person1.jpg",
  email = "teklu@gmail.com",
  phone = "0900423958",
  portfolio = "https://www.linkedin.com/in/teklu-moges",
}) => {
  return (
    <div className="w-[264px] h-[340px] border rounded-md shadow-md flex flex-col gap-2">
      <div
        className="w-[96px] h-[96px] rounded-full"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <h1>Alemu Kebede</h1>
      <p className="text-gray-400">Professor</p>
      <div className="flex">
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

      <p className="text-black">
        <FaPhone /> {phone}{" "}
      </p>
      <p className="text-sm text-gray-400">{email}</p>
    </div>
  );
};

export default ProfileCard;
