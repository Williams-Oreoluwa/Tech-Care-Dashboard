import React from "react";

const Cards = ({
  averageRespiratorRate,
  averageHeartRate,
  averageTemperature,
}) => {
  return (
    <main>
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col items-start justify-start gap-3 bg-[#E0F3FA] rounded-lg p-3">
          <img src="/assets/respiratory rate.svg" alt="" />
          <div>
            <h2>Respiratory Rate</h2>
            <h1 className="text-[31px] leading-[41px] font-bold">{`${averageRespiratorRate} bpm`}</h1>
          </div>
          <h3>Normal</h3>
        </div>
        <div className="flex flex-col items-start justify-start gap-3 bg-[#FFE6E9] rounded-lg p-3">
          <img src="/assets/temperature.svg" alt="" />
          <div>
            <h2>Temperature</h2>
            <h1 className="text-[31px] leading-[41px] font-bold">{`${averageTemperature} °F`}</h1>
          </div>
          <h3>Normal</h3>
        </div>
        <div className="flex flex-col items-start justify-start gap-3 bg-[#FFE6F1] rounded-lg p-3">
          <img src="/assets/HeartBPM.svg" alt="" />
          <div>
            <h2>Heart Rate</h2>
            <h1 className="text-[31px] leading-[41px] font-bold">{`${averageHeartRate} bpm`}</h1>
          </div>
          <div className="flex items-center justify-center gap-3">
            <img src="/assets/ArrowDown.svg" alt="" />
            <h3>Normal</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cards;
