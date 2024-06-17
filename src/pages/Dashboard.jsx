import React from "react";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import TopRightbar from "../components/TopRightbar";
import BottomRightbar from "../components/BottomRightbar";
import CentreBottombar from "../components/CentreBottombar";
import Graph from "../components/Graph";

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center bg-[#F6F7F8]" >
      <main className="max-w-[1650px] flex flex-col gap-4  w-full font-manrope p-5">
        <Navbar />
        <div className="grid grid-cols-[367px,1fr,357px]">
          <LeftSidebar />
          <div className="flex flex-col gap-4 xl:grid-rows-none">
            <Graph />
            <CentreBottombar />
          </div>

          <div className="flex flex-col justify-stretch xl:grid-rows-none gap-4">
            <TopRightbar />
            <BottomRightbar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
