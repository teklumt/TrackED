import Headline2 from "@/components/Reuseable/Headline2";
import ResponsiveTable from "@/components/Table/ResponsiveTable";
import Responsivetable2 from "@/components/Table/Responsivetable2";
import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiHide } from "react-icons/bi";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";

const tableData = [
  {
    id: "Code#884",
    name: "Brian Harris",
    email: "BrianHarris@email.com",
    resid_id: "ET414",
    subscription: "Free",
    image: "/assets/Persons/person.png",
    type: "person",
  },
  {
    id: "Code#884",
    name: "Andrea Sanchez",
    email: "AndreaSanchez@email.com",
    resid_id: "ET9258",
    subscription: "Premium",
    image: "/assets/Persons/person1.jpg",
    type: "person",
  },
  {
    id: "Code#884",
    name: "Ashley Davis",
    email: "AshleyDavis@email.com",
    resid_id: "ET8251",
    subscription: "Free",
    image: "/assets/Persons/person2.jpg",
    type: "person",
  },
  {
    id: "Code#884",
    name: "Richard Davis",
    email: "RichardDavis@email.com",
    resid_id: "ET1836",
    subscription: "Free",
    image: "/assets/Persons/person3.jpg",
    type: "person",
  },
  {
    id: "Code#884",
    name: "Pedro Moreno",
    email: "PedroMoreno@email.com",
    resid_id: "ET2774",
    subscription: "Premium",
    image: "/assets/Persons/person4.jpg",
    type: "person",
  },
];

const instdata = [
  {
    id: "Code#884",
    name: "Addis Ababa Science and Technology University",
    email: "AASTU@gmail.com",
    inst_id: "ET414",
    status: "Waiting",
    image: "/assets/Persons/person.png",
    type: "institution",
  },
  {
    id: "Code#886",
    name: "Addis Ababa University",
    email: "AAU@gmail.com",
    inst_id: "ET414",
    status: "Accepted",
    image: "/assets/Persons/person1.jpg",
    type: "institution",
  },
  {
    id: "Code#887",
    name: "St. Mary's University",
    email: "St@gmail.com",
    inst_id: "ET414",
    status: "Rejected",
    image: "/assets/Persons/person2.jpg",
    type: "institution",
  },
];

const EmploData = [
  {
    id: "Code#884",
    name: "Brian Harris",
    email: "BrianHarris@email.com",
    emp_id: "ET414",
    subscription: "Free",
    image: "/assets/Persons/person.png",
    type: "employer",
  },
  {
    id: "Code#884",
    name: "Andrea Sanchez",
    email: "AndreaSanchez@email.com",
    emp_id: "ET9258",
    subscription: "Premium",
    image: "/assets/Persons/person1.jpg",
    type: "employer",
  },
  {
    id: "Code#884",
    name: "Ashley Davis",
    email: "AshleyDavis@email.com",
    emp_id: "ET8251",
    subscription: "Free",
    image: "/assets/Persons/person2.jpg",
    type: "employer",
  },
  {
    id: "Code#884",
    name: "Richard Davis",
    email: "RichardDavis@email.com",
    emp_id: "ET1836",
    subscription: "Free",
    image: "/assets/Persons/person3.jpg",
    type: "employer",
  },
  {
    id: "Code#884",
    name: "Pedro Moreno",
    email: "PedroMoreno@email.com",
    emp_id: "ET2774",
    subscription: "Premium",
    image: "/assets/Persons/person4.jpg",
    type: "employer",
  },
];

function page() {
  return (
    <section>
      <div className="shadow-md mb-4">
        <Headline2 headtext={"Users"} />
      </div>
      <div className="max-w-[1195px] mx-auto p-3">
        <div className="flex flex-wrap  items-center justify-center  400px:justify-between gap-5   mb-2 ">
          <h1 className="400px:text-[24px] text-[20px] font-bold">
            Individual Users
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
        <hr className="mb-10" />
        <div>
          <div className="flex flex-wrap justify-center gap-[20px]">
            <div className="flex items-center p-6 sm:w-[360px] w-full h-[125px] border rounded-md shadow-md justify-between">
              <div className="flex flex-col ">
                <div className="flex font-bold text-[16px]">
                  <p>Users</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-[32px] font-semibold">2490</p>
                  <p className="w-[70px] border text-[#117B34] text-[16px] font-semibold flex justify-center items-center rounded-full h-[36px] bg-[#EEFDF3]">
                    <MdArrowUpward className="mr-[6px]" size={17} /> 5%
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src="/assets/Line/Line Chart 9.png"
                  alt="Picture of the author"
                  width={101}
                  height={44}
                />
              </div>
            </div>
            <div className="flex items-center p-6 w-full sm:w-[360px] h-[125px] border rounded-md shadow-md justify-between">
              <div className="flex flex-col ">
                <div className="flex font-bold text-[16px]">
                  <p>Documents</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-[32px] font-semibold text-[#EFB034]">
                    1980
                  </p>
                  <p className="w-[70px] border text-[#DE3B40] text-[16px] font-semibold flex justify-center items-center rounded-full h-[36px] bg-[#FDF2F2]">
                    <MdArrowDownward className="mr-[6px]" size={17} /> 25%
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src="/assets/Line/Line Chart 10.png"
                  alt="Picture of the author"
                  width={101}
                  height={44}
                />
              </div>
            </div>
            <div className="flex items-center p-6 w-full sm:w-[360px] h-[125px] border rounded-md shadow-md justify-between">
              <div className="flex flex-col ">
                <div className="flex font-bold text-[16px]">
                  <p>Verification Req</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-[32px] font-semibold">490</p>
                  <p className="w-[70px] border text-[#117B34] text-[16px] font-semibold flex justify-center items-center rounded-full h-[36px] bg-[#EEFDF3]">
                    <MdArrowUpward className="mr-[6px]" size={17} /> 12%
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src="/assets/Line/Line Chart 11.png"
                  alt="Picture of the author"
                  width={101}
                  height={44}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
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
            <ResponsiveTable tableData={tableData} type={"user"} />
          </div>

          <div className="flex flex-wrap  items-center justify-center  400px:justify-between gap-5 mt-2  mb-2 ">
            <div className="flex gap-5">
              <div className="flex items-center gap-2">
                <span className="text-red-600">
                  <TiDeleteOutline size={20} />
                </span>
                <p className="font-semibold text-titleGray"> Remove</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">
                  <BiHide size={20} />
                </span>
                <p className="font-semibold text-titleGray"> Block</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">
                  <BiHide size={20} />
                </span>
                <p className="font-semibold text-titleGray"> Blocked</p>
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
          <div className="flex flex-wrap  items-center justify-center  400px:justify-between gap-5  mt-32 mb-2 ">
            <h1 className="400px:text-[24px] text-[20px] font-bold">
              Institutions
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
            <Responsivetable2 tableData={instdata} type={"institution"} />
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

        <div className="mb-16">
          <div className="flex flex-wrap   items-center justify-center  400px:justify-between gap-5  mt-32 mb-2 ">
            <h1 className="400px:text-[24px] text-[20px] font-bold">
              Employers
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
            <ResponsiveTable tableData={EmploData} type={"Employe"} />
          </div>

          <div className="flex flex-wrap  items-center justify-center  400px:justify-between gap-5 mt-2  mb-2 ">
            <div className="flex gap-5">
              <div className="flex items-center gap-2">
                <span className="text-red-600">
                  <TiDeleteOutline size={20} />
                </span>
                <p className="font-semibold text-titleGray"> Remove</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">
                  <BiHide size={20} />
                </span>
                <p className="font-semibold text-titleGray"> Block</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">
                  <BiHide size={20} />
                </span>
                <p className="font-semibold text-titleGray"> Blocked</p>
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
      </div>
    </section>
  );
}

export default page;
