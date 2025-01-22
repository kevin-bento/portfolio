import React from 'react';

import {UX} from '../components/project types/ux';
import { FrontEnd } from '../components/project types/frontend';
import { Video } from '../components/project types/video';

//images
import arrow from '../assets/buttons/arrow-narrow-up-right.png';

import laptop from '../assets/featured projects/sourcepoint-laptop.png';
import splogo from '../assets/featured projects/sourcepoint-text.png';

import etk from '../assets/featured projects/etk.png'
import gather from '../assets/featured projects/gather.png';
import video from '../assets/featured projects/youtube.jpg';
import dxs from '../assets/featured projects/dxs.png';

export const Projects = () => {
    return (
        <div class='flex justify-center'>
            <div id="targetDiv" className=" mb:20 lg:mb-40 max-w-[1150px] ">
                <div className="grid grid-rows-5 lg:grid-rows-6 grid-cols-1 lg:grid-cols-12 gap-4 z-50">
                <div className="col-start-1 col-span-1 lg:col-span-6 row-start-1 row-span-1 lg:row-span-3 flex items-center bg-white rounded-2xl transition duration-300 hover:scale-90 hover:rotate-3 max-h-[250px] p-6">
                    <img className="z-0 w-80 mr-[-4rem] transition duration-300 hover:rotate-[-3deg] hover:scale-105" src={laptop} alt="laptop"></img>
                    <div className="flex flex-col justify-between items-end h-full">
                        <UX />
                        <img className="z-1 w-64 h-fit p-2" src={splogo} alt="logo"></img>
                        <button className="rounded-xl size-10 bg-lemon flex justify-center items-center transition duration-300 hover:bg-[#BF8DFF] active:ring-4 active:ring-violet-300 ">
                            <img className="size-8 p-1" src={arrow} alt="Arrow"/>
                        </button>
                    </div>
                </div>

                <div className="col-start-1 col-span-1 lg:col-start-7 lg:col-span-6 row-start-2 row-span-1 lg:row-start-1 lg:row-span-3 bg-[#243439] rounded-2xl transition duration-300 hover:scale-90 hover:rotate-3 max-h-[250px]">
                    <div className="flex justify-between items-center gap-10">
                        <div className="flex flex-col text-white mt-6 ml-6">
                            <h1 className="text-2xl font-bold ">ETK-motors.ca</h1>
                            <p>car manufacturer website</p>
                        </div>
                        <FrontEnd />
                    </div>
                    
                    <img className="-z-50 w-96 h-fit transition duration-300 hover:rotate-[-3deg] hover:scale-105 bottom-0 rounded-3xl" src={etk}></img>
                    <div className="flex flex-col justify-between items-end mt-[-5rem]">

                    <button className="rounded-xl size-10 mx-4 my-4 bg-lemon flex justify-center items-center transition duration-300 hover:bg-[#BF8DFF] active:ring-4 active:ring-violet-300 ">
                        <img className="size-8 p-1" src={arrow} alt="Arrow"/>
                    </button>
                    </div>
                </div>

                <div className="p-6 col-start-1 col-span-1 lg:col-span-4 row-start-3 row-span-1 lg:row-start-4 lg:row-span-3 bg-black rounded-2xl transition duration-300 hover:scale-90 hover:rotate-3">
                    <div class="flex justify-between">
                        <div class="flex flex-col mb-4">
                            <h1 className="text-2xl font-bold text-white">Gather</h1>
                            <p className="text-sm text-white">fostering real connections</p>
                        </div>
                        <UX />
                    </div>
                    <div class="flex justify-between items-end">
                        <img class="w-60 rounded-2xl transition duration-300 hover:scale-105 hover:rotate-3" src={gather}></img>
                        <button className="rounded-xl size-10 bg-lemon flex justify-center items-center transition duration-300 hover:bg-[#BF8DFF] active:ring-4 active:ring-violet-300 ">
                            <img className="size-8 p-1" src={arrow} alt="Arrow"/>
                        </button>

                    </div>
                    
                </div>

                <div className="col-start-1 col-span-1 lg:col-start-5 lg:col-span-4 row-start-4 row-span-1 lg:row-span-3 bg-[#c0c0c0] rounded-2xl transition duration-300 hover:scale-90 hover:rotate-3 p-4 flex flex-col justify-between gap-6">
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <h1 className='text-xl'> iSheep Pro</h1>
                            <p className='text-sm'>Tech/Lifestyle Channel</p>
                        </div>
                        <Video />
                    </div>
                    <div class="flex justify-between items-end">
                        <img className='w-72 rounded-2xl shadow-md transition duration-300 hover:scale-105 hover:-rotate-2' src={video}></img>
                        <button className="rounded-xl size-10  bg-lemon flex justify-center items-center transition duration-300 hover:bg-[#BF8DFF] active:ring-4 active:ring-violet-300 ">
                            <img className="size-8 p-1" src={arrow} alt="Arrow"/>
                        </button>

                    </div>
                    
                </div>

                <div className="py-6 pr-6 flex justify-between items-center col-start-1 col-span-1 lg:col-start-9 lg:col-span-4 row-start-5 row-span-1 lg:row-start-4 lg:row-span-3 bg-white rounded-2xl transition duration-300 hover:scale-90 hover:rotate-3">
                    <img class="h-48 transition duration-200 hover:rotate-3 hover:scale-90" src={dxs}></img>
                    <div class="flex flex-col justify-between items-end h-full">
                        <UX />
                        <div class="justify-end">
                            <h1 class="text-xl">Knowledge Base</h1>
                            <p class="text-sm">Repo for <br></br>Training Materials</p>
                        </div>
                        <button className="rounded-xl size-10 w-10 h-10 bg-lemon flex justify-center items-center transition duration-300 hover:bg-[#BF8DFF] active:ring-4 active:ring-violet-300 ">
                            <img className="size-8 p-1" src={arrow} alt="Arrow"/>
                        </button>

                    </div>
                </div>

                </div>
            </div>
        </div>
  );
};