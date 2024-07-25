import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Navlist } from "../data";
const Sidenav = () => {
  return (
    <div className="fixed pb-3 bg-[#1E2640] pt-5 px-2 left-0 top-0 w-[15vw] min-h-screen z-50 flex flex-col gap-6 ">
      <div className="upper  w-full flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <img
            className="w-12 rounded-md h-12"
            src="https://plus.unsplash.com/premium_photo-1684197414211-1f7a0807c59b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className=" w-40">
            <h1 className="text-white text-lg">Rishi yadav</h1>
            <h3 className="not-italic underline text-gray-300 optext-md">
              Visit store
            </h3>
          </div>
        </div>
        <MdOutlineKeyboardArrowDown className=" text-4xl text-white" />
      </div>
      <div className="lower flex flex-col gap-2 text-gray-300 text-lg font-semibold ">
        {Navlist.map((elem) => (
          <div className="w-full cursor-pointer bg-grey-100  hover:bg-gray-600 hover:text-white  flex gap-2  items-center px-4 rounded-md h-10 select-none">
            <h1>{elem.icon}</h1>
            <h1>{elem.name}</h1>
          </div>
        ))}
      </div>
      <div className=" flex items-center mt-auto p-2 gap-2.5 bg-[#353C53] rounded-lg  hover:bg-[#353c53a7] text-gray-400 hover:text-gray-200">
        <div className="p-2 cursor-pointer bg-gray-600 rounded-md">
          <svg
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.00312 1.79727C2.42636 1.79727 1.80313 2.35527 1.80313 3.24727V16.7473C1.80313 17.6393 2.42636 18.1973 3.00312 18.1973H21.0031C21.5799 18.1973 22.2031 17.6393 22.2031 16.7473V13.8473H17.0032C14.8769 13.8473 13.1532 12.1236 13.1532 9.99727C13.1532 7.87097 14.8769 6.14727 17.0032 6.14727H22.2031V3.24727C22.2031 2.35527 21.5799 1.79727 21.0031 1.79727H3.00312ZM23.8031 6.14727V3.24727C23.8031 1.65398 22.6355 0.197266 21.0031 0.197266H3.00312C1.37075 0.197266 0.203125 1.65398 0.203125 3.24727V16.7473C0.203125 18.3405 1.37075 19.7973 3.00312 19.7973H21.0031C22.6355 19.7973 23.8031 18.3405 23.8031 16.7473V13.8473H23.8532V6.14727H23.8031ZM16.0032 9.94727C16.0032 9.47783 16.3837 9.09727 16.8532 9.09727H18.1532C18.6226 9.09727 19.0032 9.47783 19.0032 9.94727C19.0032 10.4167 18.6226 10.7973 18.1532 10.7973H16.8532C16.3837 10.7973 16.0032 10.4167 16.0032 9.94727ZM14.8532 9.99727C14.8532 8.80986 15.8158 7.84727 17.0032 7.84727H22.1532V12.1473H17.0032C15.8158 12.1473 14.8532 11.1847 14.8532 9.99727Z"
              fill="white"
            />
          </svg>
        </div>
        <div>
          <p className="text-xs font-normal">Availble Credits</p>
          <p className="text-base font-medium">222.10</p>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
