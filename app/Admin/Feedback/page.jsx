import { CiExport } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { RiDeleteBin2Line } from "react-icons/ri";
import Image from "next/image";
import FeedbackCard from "@/components/Admin/FeedbackCard";
import Headline2 from "@/components/Reuseable/Headline2";

const FeedbackData = [
  {
    name: "Teklu Moges",
    email: "Teklu@gmail.com",
    message:
      "Officia sunt laboris elit fugiat adipisicing ex ea nulla aute duis occaecat dolore id et ess",
    tag: "#Update",
    sub: "pre",
    status: "Unseen",
    type: "person",
    image: "/assets/persons/person.png",
  },
  {
    name: "Buna International Bank",
    email: "Buna@gmail.com",
    message:
      "Officia sunt laboris elit fugiat adipisicing ex ea nulla aute duis occaecat dolore id et ess",
    tag: "#Update",
    sub: "pre",
    status: "seen",
    type: "employer",
    image: "/assets/Job/campany/buna.png",
  },
  {
    name: "Teklu Moges",
    email: "Teklu@gmail.com",
    message:
      "Officia sunt laboris elit fugiat adipisicing ex ea nulla aute duis occaecat dolore id et ess",
    tag: "#Update",
    sub: "pre",
    status: "Unseen",
    type: "person",
    image: "/assets/persons/person.png",
  },
  {
    name: "Buna International Bank",
    email: "Buna@gmail.com",
    message:
      "Officia sunt laboris elit fugiat adipisicing ex ea nulla aute duis occaecat dolore id et ess",
    tag: "#Update",
    sub: "pre",
    status: "Unseen",
    type: "employer",
    image: "/assets/Job/campany/buna.png",
  },
  {
    name: "Teklu Moges",
    email: "Teklu@gmail.com",
    message:
      "Officia sunt laboris elit fugiat adipisicing ex ea nulla aute duis occaecat dolore id et ess",
    tag: "#Update",
    sub: "pre",
    status: "seen",
    type: "person",
    image: "/assets/persons/person.png",
  },
  {
    name: "Teklu Moges",
    email: "Teklu@gmail.com",
    message:
      "Officia sunt laboris elit fugiat adipisicing ex ea nulla aute duis occaecat dolore id et ess",
    tag: "#Update",
    sub: "pre",
    status: "Unseen",
    type: "person",
    image: "/assets/persons/person.png",
  },
  {
    name: "Buna International Bank",
    email: "Buna@gmail.com",
    message:
      "Officia sunt laboris elit fugiat adipisicing ex ea nulla aute duis occaecat dolore id et ess",
    tag: "#Update",
    sub: "pre",
    status: "Unseen",
    type: "employer",
    image: "/assets/Job/campany/buna.png",
  },
  {
    name: "Teklu Moges",
    email: "Teklu@gmail.com",
    message:
      "Officia sunt laboris elit fugiat adipisicing ex ea nulla aute duis occaecat dolore id et ess",
    tag: "#Update",
    sub: "pre",
    status: "seen",
    type: "person",
    image: "/assets/persons/person.png",
  },
  {
    name: "Teklu Moges",
    email: "Teklu@gmail.com",
    message:
      "Officia sunt laboris elit fugiat adipisicing ex ea nulla aute duis occaecat dolore id et ess",
    tag: "#Update",
    sub: "pre",
    status: "Unseen",
    type: "person",
    image: "/assets/persons/person.png",
  },
  {
    name: "Buna International Bank",
    email: "Buna@gmail.com",
    message:
      "Officia sunt laboris elit fugiat adipisicing ex ea nulla aute duis occaecat dolore id et ess",
    tag: "#Update",
    sub: "pre",
    status: "Unseen",
    type: "employer",
    image: "/assets/Job/campany/buna.png",
  },
  {
    name: "Teklu Moges",
    email: "Teklu@gmail.com",
    message:
      "Officia sunt laboris elit fugiat adipisicing ex ea nulla aute duis occaecat dolore id et ess",
    tag: "#Update",
    sub: "pre",
    status: "seen",
    type: "person",
    image: "/assets/persons/person.png",
  },
  {
    name: "Buna International Bank",
    email: "Buna@gmail.com",
    message:
      "Officia sunt laboris elit fugiat adipisicing ex ea nulla aute duis occaecat dolore id et ess",
    tag: "#Update",
    sub: "pre",
    status: "Unseen",
    type: "employer",
    image: "/assets/Job/campany/buna.png",
  },
];

function page() {
  return (
    <section>
      {/* <div className="text-center p-16">
        <h1 className="text-[32px] font-bold">Feedbacks</h1>
        <p className="max-w-[753px]  mx-auto text-xl mt-2  text-gray-400">
          Review user feedback to understand user needs and improve our
          services.
        </p>
      </div> */}
      <div>
        <Headline2 headtext={"Feedbacks"} />
      </div>
      <div className="mb-5 w-[90%] mx-auto">
        <hr />
      </div>
      <div className="flex lg:justify-end gap-4 lg:mr-[50px] justify-center">
        <div className="border rounded-md cursor-pointer w-[150px] h-[36px] flex items-center justify-center gap-2">
          <CiExport size={20} className="text-black font-bold" />
          <button>Export </button>
        </div>
        <div className="border w-[130px] h-[36px] cursor-pointer items-center justify-center flex rounded-md">
          <select name="" id="">
            <option value="" className="flex">
              All
            </option>
            <option value="">UnSeen</option>
            <option value="">Premium</option>
            <option value="">Organization</option>
          </select>
        </div>
      </div>

      <div className="p-8 flex  flex-wrap justify-center gap-[32px]">
        {FeedbackData.map((Feed, i) => (
          <FeedbackCard key={i} Feed={Feed} />
        ))}
      </div>

      <div className="flex justify-center my-16">
        <button className="bg-Primarys w-[150px] shadow-md  text-white p-2 rounded-md">
          See more
        </button>
      </div>
    </section>
  );
}

export default page;
