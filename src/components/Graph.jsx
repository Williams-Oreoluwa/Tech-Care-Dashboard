import React, { useContext } from "react";
import { Globalcontext } from "../context/Context";
import { Line } from "react-chartjs-2";
import Cards from "./Cards";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = () => {
  const {
    systolic,
    diastolic,
    getAverageSystolicData,
    getAverageDiastolicData,
    averageRespiratorRate,
    averageHeartRate,
    averageTemperature,
  } = useContext(Globalcontext);
  const data = {
    labels: [
      "Oct, 2023",
      "Nov, 2023",
      "Dec, 2023",
      "Jan, 2024",
      "Feb, 2024",
      "Mar, 2024",
    ],
    datasets: [
      {
        label: "",
        data: systolic,
        fill: false,
        borderColor: "#E66FD2",
        tension: 0.4,
        pointRadius: 5, // Increase point size
        pointBackgroundColor: "#E66FD2",
        pointHoverRadius: 7, // Increase hover point size
      },
      {
        label: "",
        data: diastolic,
        fill: false,
        borderColor: "#7E6CAB",
        tension: 0.4,
        pointRadius: 5, // Increase point size
        pointBackgroundColor: "#8C6FE6",
        pointHoverRadius: 7, // Increase hover point size
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Disable legend
      },
    },
    scales: {
      x: {
        display: true,

        title: {
          display: true,
        },
      },
      y: {
        display: true,
        title: {
          display: true,
        },
      },
    },
  };

  return (
    <main className="px-3 w-full">
      <div className="flex flex-col gap-[1rem] bg-white min-h-screen rounded-lg p-5">
        <h1 className="text-[24px] leading-[33px] font-bold capitalize">
          Diagnosis history
        </h1>
        <br />
        <br />
        <div className="grid grid-cols-[1fr,200px] gap-5 bg-[#F4F0FE] pb-[2rem] p-3 rounded-[.8rem]">
          <div>
            <div className="flex  justify-between mb-4">
              <h2 className="text-[18px] font-bold leading-[19px]">
                Blood pressure
              </h2>
              <div className="text-[14px] flex items-center gap-2 mr-[2rem]">
                <h3>Last 6 months</h3>
                <img
                  src="/assets/expand_more_FILL0_wght300_GRAD0_opsz24.svg"
                  alt=""
                />
              </div>
            </div>
            <Line data={data} options={options} width={300} height={300} />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-[1rem]">
              <div className="flex  gap-3 items-center justify-start">
                <div className="w-[14px] h-[14px] rounded-[5rem] bg-[#E66FD2]"></div>
                <h1 className="text-[14px] font-bold leading-[19px] capitalize">
                  Systolic
                </h1>
              </div>
              <h2 className="text-[22px] font-bold text-left leading-[24px]">
                {getAverageSystolicData}
              </h2>
              <div className="flex items-center justify-start gap-3">
                <img src="/assets/ArrowUp.svg" alt="" />
                <h3 className="text-[14px] leading-[19px] capitalize">
                  Higher than average.
                </h3>
              </div>
              <div className="w-full h-[1px] rounded-[3rem] bg-[#CBC8D4]"></div>
              <div className="flex  gap-3 items-center justify-start">
                <div className="w-[14px] h-[14px] rounded-[5rem] bg-[#8C6FE6]"></div>
                <h1 className="text-[14px] font-bold leading-[19px] capitalize">
                  diastolic
                </h1>
              </div>
              <h2 className="text-[22px] font-bold text-left leading-[24px]">
                {getAverageDiastolicData}
              </h2>
              <div className="flex items-center justify-start gap-3">
                <img src="/assets/ArrowUp.svg" alt="" />
                <h3 className="text-[14px] leading-[19px] capitalize">
                  Higher than average.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <Cards
          averageRespiratorRate={averageRespiratorRate}
          averageHeartRate={averageHeartRate}
          averageTemperature={averageTemperature}
        />
      </div>
    </main>
  );
};

export default Graph;
