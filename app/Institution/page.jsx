import Image from "next/image";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";

function page() {
  return (
    <section>
      <div className="flex relative justify-center gap-4">
        <div className="flex justify-center items-center ">
          <h1
            className=" text-3xl sm:text-4xl font-bold  text-center"
            style={{
              fontFamily: "calibri",
            }}
          >
            Addis Ababa Science and Technology University
          </h1>
        </div>
        <div
          className="md:w-[709px] h-[350px]"
          style={{
            backgroundImage: "url(/assets/Headline/AASTU.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute bottom-0 left-0">
          <Image
            src="/assets/Headline/half.png"
            alt="Picture of the author"
            width={500}
            height={307}
          />
        </div>
      </div>

      <div className="mt-10">
        <h1
          className="text-[28px] font-bold text-center "
          style={{
            fontFamily: "calibri",
          }}
        >
          Documents Statistics
        </h1>
        <p className="max-w-[600px] p-1 mb-[26px] text-[18px]  text-gray-400 mx-auto text-center">
          Quick stats on the number of documents issued, verification requests
          received and verified documents.
        </p>
        <div className="p-6 flex flex-wrap justify-center gap-[32px]">
          <div className="flex items-center p-6 w-[371px] h-[125px] border rounded-md shadow-md justify-between">
            <div className="flex flex-col ">
              <div className="flex font-bold text-[16px]">
                <p>Total Documents</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[25px] font-semibold">1499</p>
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
          <div className="flex items-center p-6 w-[371px] h-[125px] border rounded-md shadow-md justify-between">
            <div className="flex flex-col ">
              <div className="flex font-bold text-[16px]">
                <p>Verification Requests</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[25px] font-semibold">490</p>
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
          <div className="flex items-center p-6 w-[371px] h-[125px] border rounded-md shadow-md justify-between">
            <div className="flex flex-col ">
              <div className="flex font-bold text-[16px]">
                <p>Verified Documents </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[25px] font-semibold text-[#EFB034]">1350</p>
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
        </div>
      </div>
      <div className="flex  flex-col justify-center items-center my-10">
        <h1
          className="text-[28px] font-bold text-center "
          style={{
            fontFamily: "calibri",
          }}
        >
          Verified Documents
        </h1>
        <Image
          src="/assets/Headline/underline.png"
          width={100}
          height={100}
          alt=""
        />
      </div>
    </section>
  );
}

export default page;
