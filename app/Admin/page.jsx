"use client";
import React from "react";
import Image from "next/image";
import { MdArrowUpward } from "react-icons/md";
import { MdArrowDownward } from "react-icons/md";
import DonutChart from "@/components/Charts/DonutChart";
import { fontFamily } from "@mui/system";
import BarChart from "@/components/Charts/BarChart";
import ScrollToTop from "@/components/Reuseable/ScrollToTop";

const chartdata = [
  {
    title: "User",
    name: ["Free", "Premium"],
    value: [1500, 1000],
    color: ["#1c1c1e", "#ffb74d"],
    qua: ["1.5K", "1K"],
    per: ["25%", "75%"],
  },

  {
    title: "Documents",
    name: ["Verified", "Waiting"],
    value: [1060, 900],
    color: ["#0D0C22", "#BDC1CA"],
    qua: ["1.6K", "900"],
    per: ["80%", "20%"],
  },
];

const page = () => {


  







  return (
    <secton>
      <div
        className="w-full relative h-[307px] "
        style={{
          backgroundImage: `url('/assets/Headline/1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white text-center p-[15px] sm:p-[20px] md:p-[35px] rounded-[20px]">
            <h1 className=" text-2xl md:text-4xl font-bold ">
              System Overview
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0">
          <Image
            src="/assets/Headline/half.png"
            alt="Picture of the author"
            width={500}
            height={307}
          />
        </div>
      </div>

      <div className="text-center mt-10 mb-5 ">
        <h1
          className="font-bold text-[28px] mb-2 text-[#171A1F]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          User and Document Statistics
        </h1>
        <p className="max-w-[455px] text-[18px] mx-auto text-[#9095A1]">
          Get insights into user growth and document status trends.
        </p>

        <div className="p-6 flex flex-wrap justify-center gap-[32px]">
          <div className="flex items-center p-6 w-[371px] h-[125px] border rounded-md shadow-md justify-between">
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
          <div className="flex items-center p-6 w-[371px] h-[125px] border rounded-md shadow-md justify-between">
            <div className="flex flex-col ">
              <div className="flex font-bold text-[16px]">
                <p>Documents</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[32px] font-semibold text-[#EFB034]">1980</p>
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
          <div className="flex items-center p-6 w-[371px] h-[125px] border rounded-md shadow-md justify-between">
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

      <div className="p-8 mt-10 border lg:w-[90%] mx-auto rounded-md">
        <h1
          className="text-[24px] font-bold mb-10 text-center sm:text-left "
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Updates
        </h1>
        <div className=" flex justify-center flex-wrap  gap-[32px]">
          <div className="border w-[343px] rounded-md shadow-md p-2">
            <h2 className="text-xl font-bold mb-4">Feedbacks</h2>

            <Image
              src="/assets/storySet/Feedback.png"
              width={230}
              height={200}
              alt="Picture of the a"
            />
            <p className="w-[161px] text-center mx-auto font-semibold">
              Over <span className="text-yellow-500 ">300</span>+ Feedbacks
              Collected
            </p>
          </div>
          {chartdata.map((data, index) => (
            <DonutChart key={index} datas={data} />
          ))}
        </div>
      </div>

      <div className="text-center mt-10 mb-5 ">
        <h1
          className="font-bold text-[28px] mb-2 text-[#171A1F]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Market and Profit Overview
        </h1>
        <p className="max-w-[490px] text-[18px] mx-auto text-[#9095A1]">
          Analyze market trends and track profit growth. Get insights into user
          growth and document status trends.
        </p>
        <div className="p-2 mt-10 border lg:w-[90%] mx-auto rounded-md mb-32">
          <h1
            className="text-[24px] font-bold mb-5 text-center sm:text-left "
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Market
          </h1>

          <div className="flex justify-center flex-wrap  items-center gap-4">
            <BarChart />

            <div className="p-6 flex flex-col justify-center gap-2">
              <div className="flex items-center border-l-[10px] border-l-black p-6 w-[371px] h-[114px] border rounded-[15px] shadow-md justify-between">
                <div className="flex flex-col ">
                  <div className="flex font-bold text-[16px]">
                    <p>Ads</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[32px] font-semibold">$300</p>
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

              <div className="flex items-center border-l-[10px] border-l-black p-6 w-[371px] h-[114px] border rounded-[15px] shadow-md justify-between">
                <div className="flex flex-col ">
                  <div className="flex font-bold text-[16px]">
                    <p>Premium</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[32px] font-semibold">$1000</p>
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
              <div className="flex items-center border-l-[10px] border-l-[#EFB034] p-6 w-[371px] h-[114px] border rounded-[15px] shadow-md justify-between">
                <div className="flex flex-col ">
                  <div className="flex font-bold text-[16px]">
                    <p>Job Commission</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[32px] font-semibold text-[#EFB034]">
                      $1980
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
        </div>
      </div>
      <ScrollToTop />
    </secton>
  );
};

export default page;
