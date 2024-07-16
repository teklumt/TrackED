import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ datas }) => {
  const data = {
    labels: [datas.name[0], datas.name[1]],
    datasets: [
      {
        data: [datas.value[0], datas.value[1]],
        backgroundColor: [datas.color[0], datas.color[1]],
        hoverBackgroundColor: [datas.color[0], datas.color[1]],
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="border w-[343px] rounded-md p-2 shadow-md">
      <h2 className="text-xl font-bold mb-4">{datas.title}</h2>
      <div className="w-[343px] flex flex-col gap-10 items-center">
        <div className="w-[154px]">
          <Doughnut data={data} options={options} />
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex items-center mb-2 w-[300px] justify-between gap-10">
            <div className="flex items-center">
              <div
                className="w-3 h-3 mr-2"
                style={{ backgroundColor: datas.color[0] }}
              ></div>
              <span>{datas.name[0]}</span>
            </div>
            <div className="flex items-center">
              <span className="ml-auto">{datas.qua[0]}</span>
              <span className="ml-2 text-gray-500">{datas.per[0]}</span>
            </div>
          </div>
          <div className="flex items-center justify-between gap-10">
            <div className="flex items-center">
              <div
                className="w-3 h-3 mr-2"
                style={{ backgroundColor: datas.color[1] }}
              ></div>
              <span>{datas.name[1]}</span>
            </div>
            <div className="flex items-center">
              <span className="ml-auto">{datas.qua[1]}</span>
              <span className="ml-2 text-gray-500">{datas.per[1]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
