import React, { useEffect, useState } from "react";

const navLinks = [
  {
    name: "Overview",
    img: "/assets/home_FILL0_wght300_GRAD0_opsz24.svg",
    patients: false,
  },
  {
    name: "Patients",
    img: "/assets/group_FILL0_wght300_GRAD0_opsz24.svg",
    patients: true,
  },
  {
    name: "Schedule",
    img: "/assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg",
    patients: false,
  },
  {
    name: "Message",
    img: "/assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg",
    patients: false,
  },
  {
    name: "Transactions",
    img: "/assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg",
    patients: false,
  },
];

const Navbar = () => {
  const [navComponents, setNavComponent] = useState([]);

  useEffect(() => {
    setNavComponent(navLinks);
  });

  return (
    <nav className="">
      <main className="flex items-center justify-between bg-[#FFFFFF] rounded-full h-[72px] px-8">
        <div>
          <img
            src="/assets/TestLogo.svg"
            alt="logo"
            className="h-[48px] w-[210px]"
          />
        </div>
        <div className="flex flex-shrink gap-[24px] flex-row">
          {navComponents.map((navComponent, index) => {
            const { name, img, patients } = navComponent;
            return (
              <>
                <div
                  key={index}
                  className={`flex gap-2 items-center justify-center font-bold ${
                    patients ? "p-3 px-5 bg-[#01F0D0] rounded-[5rem]" : ""
                  }`}
                >
                  <img src={img} alt={name} className="w-[15px] h-[17px]" />
                  <h2 className="text-[14px]">{name}</h2>
                </div>
              </>
            );
          })}
        </div>
        <div className="flex flex-row gap-2 ">
          <div>
            <img
              src="/assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png"
              alt="doctor"
              className="w-[44px] h-[44px]"
            />
          </div>
          <div className="text-[14px]">
            <h2 className="text-[#072635] font-bold">Dr Jose Simons</h2>
            <h2 className="text-[#707070] ">General Practioner</h2>
          </div>
          <div className="h-20% w-[1px] bg-[#F6F7F8] rounded-md"></div>
          <div className="flex items-center justify-center gap-1">
            <img
              src="/assets/settings_FILL0_wght300_GRAD0_opsz24.svg"
              alt="settings"
              className="w-[17.7px] h-[18px]"
            />
            <img
              src="/assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg"
              alt="more info"
              className="w-[17.7px] h-[18px]"
            />
          </div>
        </div>
      </main>
    </nav>
  );
};

export default Navbar;
