import React from "react";
import { BiHide } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";
import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";

const ResponsiveDocumentTable = ({ tableData, type, service }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          <tr className="text-titleGray">
            <th className="w-1/12 px-4 py-2 text-start border">
              <input type="checkbox" />
            </th>
            <th className="w-1/12 px-4 py-2 text-start border">Document</th>
            <th className="w-3/12 px-4 py-2 text-start border">Name</th>
            <th className="w-1/12 px-4 py-2 text-start border">Status</th>
            <th className="w-1/12 px-4 py-2 text-start border">
              {type == !"inst" ? "Subscription" : "DicDetails"}
            </th>
            <th className="w-2/12 px-4 py-2 text-start border">By</th>
            <th className="w-1/12 px-4 py-2 text-start border">Edit</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((user, index) => (
            <tr
              key={index}
              className={`border text-[#171A1F] h-[67.47px] ${
                index % 2 ? "bg-primeGray" : ""
              }`}
            >
              <td className="px-4 py-2 border">
                <input type="checkbox" checked={user.checked} />
              </td>
              <td className="px-4 py-2 border">
                <div className="flex items-center gap-2">
                  <Image
                    src={user.documentImage}
                    alt="Document"
                    className="w-[40px] h-[40px] rounded border border-gray-200"
                    width={36}
                    height={36}
                  />
                </div>
              </td>
              <td className="px-4 py-2 border">{user.name}</td>
              <td
                className={`px-4 py-2 border font-semibold ${
                  user.status === "Accepted"
                    ? "text-green-500"
                    : user.status === "Rejected"
                    ? "text-red-500"
                    : "text-yellow-500"
                }`}
              >
                {user.status}
              </td>
              {type !== "inst" ? (
                <td
                  className={`px-4 py-2 border font-semibold ${
                    user.subscription === "Pre"
                      ? "text-yellow-400"
                      : user.subscription === "Inst"
                      ? "text-green-500"
                      : ""
                  }`}
                >
                  {user.subscription}
                </td>
              ) : (
                <td className="px-4 py-2 border">
                  <button className="bg-primeGray rounded-[15px] border w-[70px] p-1">
                    View
                  </button>
                </td>
              )}
              <td className="px-4 py-2 border">{user.by}</td>

              {service !== "request" ? (
                <td className="px-4 py-2 border">
                  <div className="flex items-center justify-center gap-4 space-x-2">
                    <button className="text-red-600">
                      <TiDeleteOutline size={20} />
                    </button>
                    <button className="text-yellow-500">
                      <BiHide size={20} />
                    </button>
                  </div>
                </td>
              ) : (
                <td className="px-4 py-2 border">
                  {user.status === "Waiting" && (
                    <div className="flex items-center ml-6 gap-4 space-x-2">
                      <button className="text-red-600">
                        <TiDeleteOutline size={20} />
                      </button>
                      <button className="text-green-500">
                        <AiOutlineCheckCircle size={20} />
                      </button>
                    </div>
                  )}
                  {user.status === "Accepted" && (
                    <div className="flex items-center justify-center gap-4 space-x-2">
                      <button className="text-red-600">
                        <TiDeleteOutline size={20} />
                      </button>
                    </div>
                  )}
                  {user.status === "Rejected" && (
                    <div className="flex items-center justify-center gap-4 space-x-2">
                      <button className="text-green-500">
                        <AiOutlineCheckCircle size={20} />
                      </button>
                    </div>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponsiveDocumentTable;
