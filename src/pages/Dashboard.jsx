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
      <main className="max-w-[1850px]  flex flex-col gap-4  w-full font-manrope p-5">
        <Navbar />
        <div className="grid grid-cols-[367px,1fr,300px]">
          <LeftSidebar />
          <div className="min-h-screen grid grid-rows-[80%,1fr] gap-4 xl:grid-rows-none">
            <Graph />
            <CentreBottombar />
          </div>

          <div className=" grid grid-rows-[1fr,200px] xl:grid-rows-none gap-4">
            <TopRightbar />
            <BottomRightbar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
