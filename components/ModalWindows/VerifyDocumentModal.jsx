import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import Image from "next/image";
import styled from "styled-components";
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

const VerifyDocumentModal = ({ setUploadAndVerify }) => {
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
            <form className="p-6 space-y-4">
              <div className="flex flex-col lg:flex-row justify-between gap-4">
                <div className="">
                  <p classname="  ">Document Name</p>
                  <div>
                    <input
                      type="text"
                      name="DocumentName"
                      className=" border h-[40px] w-[300px]   border-gray-300 bg-gray-100 rounded-lg p-2"
                    />
                  </div>
                </div>
                <div>
                  <p classname="  ">Upload File</p>
                  <div>
                    <input
                      className=" border h-[40px] w-[300px]   border-gray-300 bg-gray-100 rounded-lg p-1"
                      type="file"
                      name="file"
                      id=""
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
                      name="DocumentID"
                      className=" border h-[40px] w-[300px]   border-gray-300 bg-gray-100 rounded-lg p-2"
                    />
                  </div>
                </div>
                <div>
                  <p classname="  ">Institution</p>
                  <div>
                    <select
                      className="border h-[40px] w-[300px]   border-gray-300 bg-gray-100 rounded-lg p-2"
                      name=""
                      id=""
                    >
                      <option value="AAU">Addis Ababa University</option>
                      <option value="AASTU">
                        Addis Ababa Science and Tech.
                      </option>
                      <option value="ASTU">Adama Science and Tech.</option>
                      <option value="Hawassa">Hawassa University</option>
                    </select>
                  </div>
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
                    onResize={false}
                  ></textarea>
                </p>
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

// import { useState } from "react";
// import styled from "styled-components";

// const Modal = styled.div`
//   position: fixed;
//   z-index: 1000;
//   top: 70px;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: auto;
//   background-color: rgba(0, 0, 0, 0.4);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ModalContent = styled.div`
//   background-color: #fefefe;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   width: 90%;
//   max-width: 800px;
//   padding: 20px;
//   position: relative;
//   display: flex;
//   margin-top: 120px;
// `;

// const Sidebar = styled.div`
//   width: 40%;
//   background-color: #f5f5f5;
//   padding: 20px;
//   border-radius: 10px 0 0 10px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const MainContent = styled.div`
//   width: 60%;
//   padding: 20px;
// `;

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   border-bottom: 1px solid #ddd;
//   padding-bottom: 10px;
//   margin-bottom: 20px;
// `;

// const CloseButton = styled.button`
//   background: none;
//   border: none;
//   font-size: 1.5rem;
//   cursor: pointer;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
// `;

// const FormField = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 5px;
// `;

// const Label = styled.label`
//   font-weight: bold;
// `;

// const Input = styled.input`
//   padding: 10px;
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   font-size: 1rem;
// `;

// const Select = styled.select`
//   padding: 10px;
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   font-size: 1rem;
// `;

// const TextArea = styled.textarea`
//   padding: 10px;
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   font-size: 1rem;
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   gap: 10px;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   font-size: 1rem;
//   cursor: pointer;
//   background-color: ${(props) => (props.primary ? "#007BFF" : "#6c757d")};
//   color: #fff;
// `;

// const VerifyDocumentModal = () => {
//   return (
//     <Modal>
//       <ModalContent>
//         <Sidebar>
//           <img src="/path-to-your-image.png" alt="Illustration" />
//         </Sidebar>
//         <MainContent>
//           <Header>
//             <h1>Verify your Document</h1>
//             <CloseButton
//               onClick={() => {
//                 /* close modal logic */
//               }}
//             >
//               X
//             </CloseButton>
//           </Header>
//           <Form>
//             <div className="flex">
//               <FormField>
//                 <Label>Document Name</Label>
//                 <Input
//                   type="text"
//                   placeholder="Masters of Software Engineering"
//                 />
//               </FormField>
//               <FormField>
//                 <Label>Upload Doc</Label>
//                 <Input className="bg-gray-400" type="file" placeholder="JPEG, JPG, PDF ..." />
//               </FormField>
//             </div>
//             <FormField>
//               <Label>Document ID</Label>
//               <Input className="bg-gray-400" type="text" placeholder="Document ID" />
//             </FormField>
//             <FormField>
//               <Label>Select Institution</Label>
//               <Select>
//                 <option value="">Select Institution</option>
//                 <option value="AAU">Addis Ababa University</option>
//                 <option value="AASTU">Addis Ababa Science and Tech.</option>
//                 <option value="ASTU">Adama Science and Tech.</option>
//                 <option value="Hawassa">Hawassa University</option>
//               </Select>
//             </FormField>
//             <FormField>
//               <Label>Little description</Label>
//               <TextArea rows="4" placeholder="A master's ..."></TextArea>
//             </FormField>
//             <ButtonGroup>
//               <Button
//                 onClick={() => {
//                   /* cancel logic */
//                 }}
//               >
//                 Cancel
//               </Button>
//               <Button primary type="submit">
//                 Submit
//               </Button>
//             </ButtonGroup>
//           </Form>
//         </MainContent>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default VerifyDocumentModal;
