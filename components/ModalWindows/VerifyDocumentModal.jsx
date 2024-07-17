import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import Image from "next/image";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Modal = styled.div`
  position: fixed;
  z-index: 1000;
  top: 70px;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 50px auto;
  border: 1px solid #888;
  width: 1049px;

  @media screen and (max-width: 1024px) {
    width: 400px;
  }
`;

const VerifyDocumentModal = ({
  setUploadAndVerify,
  setUserDocuments,
  setUserdata,
  userdata,
  setFilteredDocuments,
}) => {
  const { register, handleSubmit } = useForm();

  const handleDocumentUpload = async (data) => {
    const currUser = localStorage.getItem("Userdata");

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("document", data.document[0]);
    formData.append("ID", data.ID);
    formData.append("institution", data.institution);
    formData.append("grade", data.grade);
    formData.append("about", data.about);
    formData.append("status", "Waiting");
    formData.append("date", new Date());
    formData.append("owner", localStorage.getItem("Email"));
    formData.append("ownerSub", currUser.subscrbition);

    try {
      const response = await fetch("/api/Documents/new", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();

        setFilteredDocuments((prev) => [...prev, result.data]);
        setUploadAndVerify(false);
      } else {
        console.error("Failed to upload document");
      }
    } catch (error) {
      console.error("Failed to upload document", error);
    }
  };

  return (
    <Modal>
      <ModalContent>
        <div className=" flex lg:w-full flex-col-reverse lg:flex-row w-[375px] ">
          <div className=" lg:flex flex-col bg-primeGray justify-center hidden">
            <Image
              src="/assets/Doc/Documents.png"
              className="h-100px"
              alt=""
              width={274}
              height={100}
            />
          </div>
          <div className="p-6 ">
            <div className="flex justify-between   ">
              <h1 className="text-[24px] font-bold  font-calibri ml-5 ">
                Upload and verify
              </h1>
              <p
                onClick={() => setUploadAndVerify(false)}
                className=" cursor-pointer text-xl"
              >
                X
              </p>
            </div>
            <form
              className="p-6 space-y-4"
              onSubmit={handleSubmit(handleDocumentUpload)}
            >
              <div className="flex flex-col lg:flex-row justify-between gap-4">
                <div className="">
                  <p classname="  ">Document Name</p>
                  <div>
                    <input
                      type="text"
                      name="name"
                      required={true}
                      className=" border h-[40px] w-[300px]   border-gray-300 bg-gray-100 rounded-lg p-2"
                      {...register("name")}
                    />
                  </div>
                </div>
                <div>
                  <p classname="  ">Upload File</p>
                  <div>
                    <input
                      className=" border h-[40px] w-[300px]   border-gray-300 bg-gray-100 rounded-lg p-1"
                      type="file"
                      name="document"
                      id=""
                      required={true}
                      {...register("document")}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-4">
                <div>
                  <p classname="">Document ID</p>
                  <div>
                    <input
                      type="text"
                      name="ID"
                      className=" border h-[40px] w-[300px]   border-gray-300 bg-gray-100 rounded-lg p-2"
                      {...register("ID")}
                    />
                  </div>
                </div>
                <div>
                  <p classname="  ">Institution</p>
                  <div>
                    <select
                      className="border h-[40px] w-[300px]   border-gray-300 bg-gray-100 rounded-lg p-2"
                      name="institution"
                      id=""
                      {...register("institution")}
                    >
                      <option value="Addis Ababa University">
                        Addis Ababa University
                      </option>
                      <option value="Addis Ababa Science and Technology university">
                        Addis Ababa Science and Tech.
                      </option>
                      <option value="Adama Science and Technology university">
                        Adama Science and Tech.
                      </option>
                      <option value="Hawassa University">
                        Hawassa University
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row-reverse gap-4 ">
                <div className="">
                  <p classname="  ">Grade</p>
                  <div>
                    <input
                      type="number"
                      name="grade"
                      className=" border h-[40px] w-[300px]   border-gray-300 bg-gray-100 rounded-lg p-2"
                      {...register("grade")}
                    />
                  </div>
                </div>
                <div className="">
                  <p classname="  ">Little description</p>
                  <p>
                    <textarea
                      name=""
                      className="border h-[100px] w-[300px]   border-gray-300 bg-gray-100 rounded-lg p-2"
                      id=""
                      cols="30"
                      rows="2"
                      {...register("about")}
                      onResize={false}
                    ></textarea>
                  </p>
                </div>
              </div>
              <div className=" flex gap-2 justify-end mt-2">
                <button
                  type="reset"
                  className="border p-1 rounded-md w-[100px]"
                >
                  Reset
                </button>
                <button className="border p-1 rounded-md w-[100px] bg-Primarys text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default VerifyDocumentModal;
