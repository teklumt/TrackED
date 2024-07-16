import React from "react";
import { BiHide } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";
import { AiOutlineCheckCircle } from "react-icons/ai";

const ResponsiveTable2 = ({ tableData, type }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          <tr className="text-titleGray">
            <th className="w-1/12 px-4 py-2 text-start border">User_ID</th>
            <th className="w-1/4 px-4 py-2 text-start border">Name</th>
            <th className="w-1/4 px-4 py-2 text-start border">Email</th>
            <th className="w-1/6 px-4 py-2 text-start border">
              {type === "institution" ? "Institution ID" : "Prem_ID"}
            </th>
            <th className="w-1/12 px-4 py-2 text-start border">Status</th>
            <th className="w-1/6 px-4 py-2 text-start border">Actions</th>
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
              <td className="px-4 py-2 text-[#3796df] border">{user.id}</td>
              <td className="px-4 py-2 border">
                <div className="flex items-center gap-2">
                  <div
                    className="w-[36px] h-[36px] rounded-full border border-gray-200"
                    style={{
                      backgroundImage: `url(${user.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="">{user.name}</div>
                </div>
              </td>
              <td className="px-4 py-2 border">{user.email}</td>
              <td className="px-4 py-2 border">
                {type === "institution" ? user.institution_id : user.resid_id}
              </td>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponsiveTable2;
