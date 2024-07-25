import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import BtnCompo from '../utils/BtnCompo'; // Adjust the path if necessary
import { AiOutlineQuestionCircle } from "react-icons/ai";

const Overview = () => {
  const items = ['This Month','Last month', 'This Year'];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };


  return (
    <div className=''>
      <div className="flex justify-between items-center  h-20">
        <h1 className='text-xl font-semibold'>Overview</h1>
        <div className="">
        <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex gap-1 items-center justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          onClick={toggleDropdown}
        >
          {selectedItem}
          <IoIosArrowDown
    className={`transition-transform duration-100 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
  />
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(item)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                role="menuitem"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
        </div>
      </div>
      <div className="flex gap-5">
      <BtnCompo
        h1="Next payout  "
        price="₹ 2,312.23"
        Order=" 23 Orders"
        nextpay="Next Payment date:"
        time="Today, 04:00 PM"
        color={true} // or false, depending on the desired background color
      />
            <BtnCompo
        h1="Amount Pending"
        price="₹ 92,312.20"
        Order="13 orders"
        time="Time"
        color={false} // or false, depending on the desired background color
      />
            <BtnCompo
        h1="Amount Processed"
        price="₹ 23,92,312.19"
        color={false} // or false, depending on the desired background color
      />
      </div>
    </div>
  )
}

export default Overview