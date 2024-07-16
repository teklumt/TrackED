import Headline2 from "@/components/Reuseable/Headline2";
import ResponsiveDocumentTable from "@/components/Table/ResponsiveDocumentTable";
import { BiHide } from "react-icons/bi";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";

const tableData = [
  {
    checked: true,
    documentImage: "/assets/Documents/1.png",
    name: "Masters of Computer Science",
    status: "Waiting",
    subscription: "Free",
    by: "Teklu Moges",
  },
  {
    checked: true,
    documentImage: "/assets/Documents/2.png",
    name: "Masters of Business Admins.",
    status: "Accepted",
    subscription: "Free",
    by: "Teklu Moges",
  },
  {
    checked: false,
    documentImage: "/assets/Documents/3.png",
    name: "Masters of Computer Science",
    status: "Accepted",
    subscription: "Pre",
    by: "Mahfouz Teyib",
  },
  {
    checked: false,
    documentImage: "/assets/Documents/4.jpg",
    name: "Masters of Business Admins.",
    status: "Accepted",
    subscription: "Free",
    by: "Miheret girmachew",
  },
  {
    checked: false,
    documentImage: "/assets/Documents/5.jpg",
    name: "Bachelor's Degree in Mechanical Engineering",
    status: "Rejected",
    subscription: "Inst",
    by: "AASTU BY Samuel Mulugeta",
  },
  {
    checked: true,
    documentImage: "/assets/Documents/6.jpg",
    name: "Masters of Business Admins.",
    status: "Accepted",
    subscription: "Free",
    by: "Miheret girmachew",
  },
  {
    checked: false,
    documentImage: "/assets/Documents/5.jpg",
    name: "Masters of Computer Science",
    status: "Accepted",
    subscription: "Pre",
    by: "Mahfouz Teyib",
  },
  {
    checked: false,
    documentImage: "/assets/Documents/2.png",
    name: "Masters of Computer Science",
    status: "Waiting",
    subscription: "Free",
    by: "Teklu Moges",
  },
  {
    checked: true,
    documentImage: "/assets/Documents/4.jpg",
    name: "Bachelor's Degree in Software Engineering",
    status: "Accepted",
    subscription: "Inst",
    by: "AAIT BY Bereket sintayehu",
  },
  {
    checked: true,
    documentImage: "/assets/Documents/3.png",
    name: "Masters of Software Engineering",
    status: "Accepted",
    subscription: "Pre",
    by: "Mahfouz Teyib",
  },
  {
    checked: false,
    documentImage: "/assets/Documents/1.png",
    name: "Bachelor's Degree in Mechanical Engineering",
    status: "Rejected",
    subscription: "Free",
    by: "Miheret girmachew",
  },
];

function page() {
  return (
    <section>
      <div className="shadow-md mb-3">
        <Headline2 headtext={"Documents"} />
      </div>
      <main className="max-w-[1195px] mx-auto p-3">
        <h1 className="400px:text-[24px] text-[20px] font-bold mb-8">
          Documents listing
        </h1>
        <div className="flex flex-wrap  items-center justify-center  400px:justify-between gap-5   mb-2 ">
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
                <option value="all" className="flex">
                  All
                </option>
                <option value="free">Free</option>
                <option value="premium">Premium</option>
                <option value="wating">Wating</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-32">
          <ResponsiveDocumentTable tableData={tableData} />

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
      </main>
    </section>
  );
}

export default page;
