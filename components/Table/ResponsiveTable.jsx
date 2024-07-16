import React from "react";
import { BiHide } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";

const ResponsiveTable = ({ tableData, type }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          <tr className="text-titleGray">
            <th className="w-1/12 px-4 py-2 text-start border">User_ID</th>
            <th className="w-1/4 px-4 py-2 text-start border">Customer</th>
            <th className="w-1/4 px-4 py-2 text-start border">Email</th>
            <th className="w-1/6 px-4 py-2 text-start border">
              {type === "user" ? "Residence ID" : "Employer_ID"}
            </th>
            <th className="w-1/12 px-4 py-2 text-start border">Subscription</th>
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
                  <div>{user.name}</div>
                </div>
              </td>
              <td className="px-4 py-2 border">{user.email}</td>
              <td className="px-4 py-2 border">
                {type === "user" ? user.resid_id : user.emp_id}
              </td>
              <td
                className={`px-4 py-2 border font-semibold  ${
                  user.subscription === "Premium" ? "text-yellow-400" : ""
                }`}
              >
                {user.subscription}
              </td>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponsiveTable;
