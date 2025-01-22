import React from 'react';
import arrow from './assets/buttons/arrow-narrow-up-right.png';


export const ArrowButton = () => {
    
    return (
        <button className="rounded-xl size-10 bg-lemon flex justify-center items-center transition duration-300 hover:bg-[#BF8DFF] active:ring-4 active:ring-violet-300 ">
            <img className="size-8 p-1" src={arrow} alt="Arrow"/>
        </button>
  );
};