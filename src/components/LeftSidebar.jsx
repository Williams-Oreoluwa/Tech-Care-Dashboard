import React, { useContext } from "react";
import { Globalcontext } from "../context/Context";

const LeftSidebar = () => {
  const { users } = useContext(Globalcontext);

  return (
    <main className="w-full rounded-lg bg-[#FFFFFF] pb-[1rem]">
      <div className=" flex flex-col gap-4">
        <div className=" w-full flex items-center justify-between gap-4 px-3 py-5">
          <h2 className="text-[24px] font-bold">Patients</h2>
          <img src="/assets/search_FILL0_wght300_GRAD0_opsz24.svg" alt="" />
        </div>
        <div className="flex flex-col gap-6 h-[1054px] overflow-y-auto  items-start justify-between px-4">
          {users.map((user) => {
            return (
              <>
                <div className={`cursor-pointer w-full flex items-center justify-between p-2 ${user.name === 'Jessica Taylor' ? "bg-[#D8FCF7] pr-3 rounded-md" : ""}`}>
                  <div className="flex flex-row gap-3 items-center justify-between">
                    <img
                      src={user.profile_picture}
                      alt=""
                      className="w-[44px] h-[44px] rounded-[50%]"
                    />
                    <div className="flex flex-col  ">
                      <h2>{user.name}</h2>
                      <div className="flex">
                        <h3>{user.gender},</h3>
                        <h3>{user.age}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <img
                      src="/assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg"
                      alt=""
                    />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default LeftSidebar;
