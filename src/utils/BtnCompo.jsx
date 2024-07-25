import React from "react";
import PropTypes from "prop-types";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineQuestionCircle } from "react-icons/ai";

// Using default parameters in function signature
const BtnCompo = ({
  h1 = "Default Title",
  price = "0",
  Order,
  nextpay,
  time = "N/A",
  color = false,
}) => {
  return (
    <div
      className={`w-[32%] h-52 rounded-md `}
    >
      <div   className={`h-32 p-6  ${nextpay ? " rounded-t-md" :" rounded-md"} ${
        color ? "bg-[#1174C2] text-white" : " text-black bg-white shadow-lg"
      }`}>
        <h1 className="text-xm flex gap-2 items-center mb-4">{h1}<i className="text-sm"><AiOutlineQuestionCircle/></i></h1>
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold">{price}</h1>
          {
            Order && <h2 className={`text-lg flex justify-center items-center ${color ? "text-white" : "text-sky-600"}`} ><i className="underline not-italic">{Order}</i><IoIosArrowForward/></h2>
          }
        </div>
      </div>

      {nextpay && (
        <div className="flex text-white justify-between px-6 pt-2 h-10 rounded-b-md bg-[#0E4F82]">
          <h1 className="text-sm">{nextpay}</h1>
          <h1 className="text-sm">{time}</h1>
        </div>
      )}
    </div>
  );
};

// Optional: Use PropTypes for validation
BtnCompo.propTypes = {
  h1: PropTypes.string,
  price: PropTypes.string,
  order: PropTypes.string,
  nextpay: PropTypes.string,
  time: PropTypes.string,
  color: PropTypes.bool,
};

export default BtnCompo;
