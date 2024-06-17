import React, { useContext } from "react";
import { Globalcontext } from "../context/Context";

const BottomRightbar = () => {
  const { labResults } = useContext(Globalcontext);
  return (
    <main className="w-full rounded-md bg-[#FFFFFF] ">
      <div className="flex flex-col gap-3 p-3">
        <div>
          <h2 className="capitalize text-[#072635] font-bold  text-[24px]">
            lab results
          </h2>
        </div>
        <div className="">
        <div className="w-full  py-[2rem] p-4 flex flex-col gap-3 overflow-y-scroll h-[15.5rem]">
          {labResults.map((list, index) => {
            return (
              <>
                <div
                  key={index}
                  className="flex items-center justify-between hover:bg-[#F6F7F8] cursor-pointer p-2 rounded-md"
                >
                  <h2 className="capitalize">{list}</h2>
                  <img
                    src="/assets/download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                    alt=""
                  />
                </div>
              </>
            );
          })}
        </div>
        </div>
       
      </div>
    </main>
  );
};

export default BottomRightbar;
