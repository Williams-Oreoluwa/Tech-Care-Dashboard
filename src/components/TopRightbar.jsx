import React, { useContext } from "react";
import { Globalcontext } from "../context/Context";

const TopRightbar = () => {
  const { jessicaData } = useContext(Globalcontext);

  const {
    name,
    gender,
    profile_picture,
    date_of_birth,
    emergency_contact,
    insurance_type,
    phone_number,
  } = jessicaData;
  return (
    <main className="bg-[#FFFFFF] w-full py-5  p-4 rounded-lg flex flex-col  justify-evenly gap-6">
      <div className="flex flex-col items-center gap-3 justify-center">
        <div>
          <img
            src={profile_picture}
            alt={name}
            className="w-[140px] h-[140px] rounded-md"
          />
        </div>
        <h2 className="text-[24px] font-bold">{name}</h2>
      </div>
      <div>
        <div className="flex flex-col items-start justify-between  gap-2 xl:justify-evenly xl:gap-10">
          <div className="flex items-center justify-center gap-4">
            <img src="/assets/BirthIcon.svg" alt="" />
            <div className="flex flex-col">
              <h2 className="text-[14px] text-[#072635]">Date of birth</h2>
              <h2 className="text-[14px] text-[#072635] font-bold capitalize leading-[24px]">
                {date_of_birth}
              </h2>
            </div>
          </div>
          <div className="flex flex-row items-start justify-center gap-4">
            <img src="/assets/FemaleIcon.svg" alt="" />
            <div>
              <h2 className="text-[14px] text-[#072635]">Gender</h2>
              <h2 className="text-[14px] text-[#072635] font-bold capitalize leading-[24px]">
                {gender}
              </h2>
            </div>
          </div>
          <div className="flex flex-row items-start justify-center gap-4">
            <img src="/assets/PhoneIcon.svg" alt="" />
            <div>
              <h2 className="text-[14px] text-[#072635]">Contact Info</h2>
              <h2 className="text-[14px] text-[#072635] font-bold capitalize leading-[24px]">
                {" "}
                {phone_number}
              </h2>
            </div>
          </div>
          <div className="flex flex-row items-start justify-center gap-4  ">
            <img src="/assets/PhoneIcon.svg" alt="" />
            <div>
              <h2 className="text-[14px] text-[#072635]">Emmergency Phone</h2>
              <h2 className="text-[14px] text-[#072635] font-bold capitalize leading-[24px]">
                {emergency_contact}
              </h2>
            </div>
          </div>
          <div className="flex flex-row items-start justify-center gap-4 ">
            <img src="/assets/InsuranceIcon.svg" alt="" />
            <div>
              <h2 className="text-[14px] text-[#072635]">Insurance Provider</h2>
              <h2 className="text-[14px] text-[#072635] font-bold capitalize leading-[24px]">
                {insurance_type}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button className="text-[black] bg-[#01F0D0] rounded-[6rem] p-3 w-[70%]">
          show all informatons
        </button>
      </div>
    </main>
  );
};

export default TopRightbar;
