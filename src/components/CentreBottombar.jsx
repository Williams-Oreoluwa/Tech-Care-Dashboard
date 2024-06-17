import React, { useContext } from "react";
import { Globalcontext } from "../context/Context";

const CentreBottombar = () => {
  const { diagnosticsList } = useContext(Globalcontext);

  return (
    <main className="px-3 w-full cursor-pointer">
      <div className="flex flex-col gap-5 bg-[#FFFF] rounded-lg p-5">
        <div className="text-[24px] font-bold capitalize">
          <h2>diagnostics list</h2>
        </div>

        <div className="max-h-[350px] overflow-auto">
          <table className="w-full text-left">
            <thead className="sticky top-0 bg-[#F6F7F8]">
              <tr className="text-[14px] font-bold text-[#072635]">
                <th className="p-[.75rem] rounded-l-[5rem]">Problem/Diagnostics</th>
                <th className="p-[.75rem]">Description</th>
                <th className="p-[.75rem] rounded-r-[5rem]">Status</th>
              </tr>
            </thead>
            <br />
            <tbody>
              {diagnosticsList.map((data, index) => (
                <tr key={index} className="text-[14px] leading-[24px] border-b-[1px] border-[#F6F7F8]">
                  <td className="p-[.85rem]">{data.name}</td>
                  <td className="p-[.85rem]">{data.description}</td>
                  <td className="p-[.85rem]">{data.status}</td>
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default CentreBottombar;
