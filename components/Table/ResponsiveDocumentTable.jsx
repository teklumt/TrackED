import React from "react";
import { BiHide } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";
import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { set } from "react-hook-form";

const ResponsiveDocumentTable = ({
  tableData,
  type,
  service,
  tableveri,
  setFilteredDocuments,
}) => {
  console.log(tableveri);
  function handleRequist(e, index, condition) {
    e.preventDefault();
    const temp = [...tableveri];
    temp[index].status = condition;
    setFilteredDocuments(temp);

    fetch("/api/Documents/Update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: temp[index]._id,
        status: condition,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function handleHide(e, index) {
    setFilteredDocuments(
      tableveri.filter((doc) => doc._id !== tableveri[index]._id)
    );
  }

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
          {tableveri?.map((user, index) => (
            <tr
              key={index}
              className={`border text-[#171A1F] h-[67.47px] ${
                index % 2 ? "bg-primeGray" : ""
              }`}
            >
              <td className="px-4 py-2 border">
                <input type="checkbox" checked={user?.checked || false} />
              </td>
              <td className="px-4 py-2 border">
                <div className="flex items-center gap-2">
                  <Image
                    src={user?.document.split("public")[1] || user?.photo}
                    alt="Document"
                    className="w-[40px] h-[40px] rounded border border-gray-200"
                    width={36}
                    height={36}
                  />
                </div>
              </td>
              <td className="px-4 py-2 border">{user?.name}</td>
              <td
                className={`px-4 py-2 border font-semibold ${
                  user.status === "Accepted"
                    ? "text-green-500"
                    : user.status === "Rejected"
                    ? "text-red-500"
                    : "text-yellow-500"
                }`}
              >
                {user?.status}
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
                  {user?.subscription || "N/A"}
                </td>
              ) : (
                <td className="px-4 py-2 border">
                  <a
                    href={`${user?.document.split("public")[1]}`}
                    download={`${user?.document.split("public")[1]}`}
                    className="bg-primeGray rounded-[15px] border w-[70px] p-1"
                  >
                    View
                  </a>
                </td>
              )}
              <td className="px-4 py-2 border">
                {user?.owner || user?.by || ""}
              </td>

              {service !== "request" ? (
                <td className="px-4 py-2 border">
                  <div className="flex items-center justify-center gap-4 space-x-2">
                    <button
                      className="text-red-600"
                      onClick={(e) => handleRequist(e, index, "Rejected")}
                    >
                      <TiDeleteOutline size={20} />
                    </button>
                    <button className="text-yellow-500">
                      <BiHide size={20} />
                    </button>
                  </div>
                </td>
              ) : (
                <td className="px-4 py-2 border">
                  {user.status.toUpperCase() === "WAITING" && (
                    <div className="flex items-center ml-6 gap-4 space-x-2">
                      <button
                        className="text-red-600"
                        onClick={(e) => handleRequist(e, index, "Rejected")}
                      >
                        <TiDeleteOutline size={20} />
                      </button>
                      <button
                        className="text-green-500"
                        onClick={(e) => handleRequist(e, index, "Accepted")}
                      >
                        <AiOutlineCheckCircle size={20} />
                      </button>
                    </div>
                  )}
                  {user.status === "Accepted" && (
                    <div className="flex items-center justify-center gap-4 space-x-2">
                      <button className="text-red-600">
                        <TiDeleteOutline
                          size={20}
                          onClick={(e) => handleRequist(e, index, "Rejected")}
                        />
                      </button>
                    </div>
                  )}
                  {user.status === "Rejected" && (
                    <div className="flex items-center justify-center gap-4 space-x-2">
                      <button className="text-green-500">
                        <AiOutlineCheckCircle
                          size={20}
                          onClick={(e) => handleRequist(e, index, "Accepted")}
                        />
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
