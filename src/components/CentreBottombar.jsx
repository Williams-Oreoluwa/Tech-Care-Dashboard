import React, { useContext } from "react";
import { Globalcontext } from "../context/Context";

const CentreBottombar = () => {
  const { diagnosticsList } = useContext(Globalcontext);
  return (
    <main className="px-3  w-full">
      <div className="flex flex-col gap-5 bg-[#FFFF] rounded-lg p-5">
        <div className="text-[24px] font-bold capitalize">
          <h2>diagnostics list</h2>
        </div>

        <table className="gap-4 text-left">
          <thead>
            <tr className="text-[14px] font-bold text-[#072635] bg-[#F6F7F8] p-[10rem] rounded-[5rem]">
              <th className="p-[.75rem] rounded-l-[5rem]">
                Problem/Diagnostics
              </th>
              <th className="p-[.75rem]">Description</th>
              <th className="p-[.75rem] rounded-r-[5rem]">Status</th>
            </tr>
          </thead>
          <tbody className="h-[2px]">
            {diagnosticsList.map((data) => {
              return (
                <>
                  <tr className="ml-[3rem] text-[14px] leading-[24px] border-b-[1px] border-[#F6F7F8]">
                    <td className="p-[.45rem]">{data.name}</td>
                    <td className="p-[.45rem]">{data.description}</td>
                    <td className="p-[.45rem]">{data.status}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default CentreBottombar;
