import React from "react";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import TopRightbar from "../components/TopRightbar";

const Dashboard = () => {
  return (
    <main className="flex flex-col gap-4 bg-[#F6F7F8] w-full min-h-screen font-manrope p-5">
      <Navbar />
      <div className="grid grid-cols-[367px,1fr,330px]">
        <LeftSidebar />
        <h3>fh</h3>
        <div>
            <TopRightbar/>

        </div>
      </div>
    </main>
  );
};

export default Dashboard;
