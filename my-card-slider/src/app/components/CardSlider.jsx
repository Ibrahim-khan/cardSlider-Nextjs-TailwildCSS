'use client'
import React from "react";
import Image from "next/image";

const CardSlider = () => {
  return (
    <div className="w-full py-10">
      <h2 className="text-2xl font-bold mb-5 text-center">Card Slider</h2>
      <div className="flex space-x-5 overflow-x-scroll scrollbar-hide px-5">
        {/* Card 1 */}
        <div className="min-w-[300px] bg-white rounded-lg shadow-md p-5">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Card 1"
            className="w-full h-40 object-cover rounded-lg mb-3"
          />
          <h3 className="text-lg font-bold mb-2">Card 1</h3>
          <p className="text-gray-500">
            This is a brief description for card 1.
          </p>
        </div>

        {/* Card 2 */}
        <div className="min-w-[300px] bg-white rounded-lg shadow-md p-5">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Card 2"
            className="w-full h-40 object-cover rounded-lg mb-3"
          />
          <h3 className="text-lg font-bold mb-2">Card 2</h3>
          <p className="text-gray-500">
            This is a brief description for card 2.
          </p>
        </div>

        {/* Card 3 */}
        <div className="min-w-[300px] bg-white rounded-lg shadow-md p-5">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Card 3"
            className="w-full h-40 object-cover rounded-lg mb-3"
          />
          <h3 className="text-lg font-bold mb-2">Card 3</h3>
          <p className="text-gray-500">
            This is a brief description for card 3.
          </p>
        </div>

        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default CardSlider;
