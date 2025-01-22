import React from 'react';

//images
import pfp from '../assets/about me/kevin.png';
import checkmark from '../assets/about me/check-circle.svg';
import fisLogo from '../assets/about me/fis.png'
import qbuild from '../assets/about me/qbuild.png';
import kevpic1 from '../assets/about me/IMG_2008.png';
import kevpic2 from '../assets/about me/IMG_2043.png';
import kevpic3 from '../assets/about me/IMG_3249 1.png';

export const About = () => {
    return (
        <section class="flex flex-col items-center ">
                <div class="grid lg:grid-rows-12 grid-cols-2 gap-4">

                    <div class="lg:hidden col-start-1 col-span-2 row-start-1 row-span-1 flex justify-around items-start text-white bg-darkTile rounded-2xl">
                        <div class="flex flex-col p-6">
                            <img class="w-40" src={pfp} alt="kevin profile pic"></img>
                            <div class="flex flex-col gap-12 items-center">
                                <div class="flex flex-col items-center">
                                    <h1 class="text-3xl">Kevin Liu</h1>
                                    <a>k55liu@uwaterloo.ca</a>
                                </div>    
                                <button class="bg-lemon text-black text-xs px-5 py-3 rounded-2xl transition duration-200 hover:scale-105 hover:bg-hoverPurpler">Download Resume</button>
                            </div>
                        </div>
                        <div class="p-6">
                            <h1 class="text-xl">About me</h1>
                            <div class="flex justify-start text-checkGreen mt-2 mb-6">
                                <img src={checkmark}></img>
                                <p class="mx-2">Open to Work</p>
                            </div>
            
                            <p class="text-sm">
                                Hi, I’m Kevin! I’m currently pursuing a Bachelor's in Management Engineering at the University of Waterloo. With over two years of experience in product and UX design, I’m passionate about crafting compelling user experiences that tell a story.
                            </p>
                            <br/>
                            <p class="text-sm">
                                Beyond design, I’m an avid photographer and love capturing candid snapshots of everyday life. When I’m not working on design projects, I’m either tinkering with my project cars or hitting the volleyball court.
                            </p>
                        </div>
                    
                    </div>

                    <div class="hidden p-6 col-start-1 col-span-1 row-start-1 row-span-12 bg-darkTile rounded-2xl lg:flex flex-col items-center justify-start text-white gap-6">
                        <img class="w-80" src={pfp} alt="kevin profile pic"></img>
                        <div class="flex flex-col gap-24 items-center">
                            <div class="flex flex-col items-center">
                                <h1 class="text-5xl">Kevin Liu</h1>
                                <a>k55liu@uwaterloo.ca</a>
                            </div>    
                            <a href="https://drive.google.com/file/d/1tXD6Mp3tYFNAKzaNFW1diSzgrrRKFB-o/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                                <button class="bg-lemon text-black px-5 py-3 rounded-2xl transition duration-200 hover:scale-105 hover:bg-hoverPurpler">Download Resume</button>
                            </a>
                        </div>
                        
                    </div>
                    <div class="hidden lg:block col-start-2 col-span-1 row-start-1 row-span-6 bg-darkTile rounded-2xl text-white max-w-[500px] p-8">
                        <h1 class="text-xl">About me</h1>
                        <div class="flex justify-start text-checkGreen mt-2 mb-6">
                            <img src={checkmark}></img>
                            <p class="mx-2">Open to Work</p>
                        </div>
        
                        <p class="text-sm">
                            Hi, I’m Kevin! I’m currently pursuing a Bachelor's in Management Engineering at the University of Waterloo. With over two years of experience in product and UX design, I’m passionate about crafting compelling user experiences that tell a story.
                        </p>
                        <br/>
                        <p class="text-sm">
                            Beyond design, I’m an avid photographer and love capturing candid snapshots of everyday life. When I’m not working on design projects, I’m either tinkering with my project cars or hitting the volleyball court.
                        </p>
                    </div>
                    <div class="col-start-1 col-span-2 row-start-2 row-span-1 lg:col-start-2 lg:col-span-1 lg:row-start-7 lg:row-span-6 bg-darkTile rounded-2xl text-white p-8">
                        <h1 class="text-xl">Latest Roles</h1>
                        <div class="flex flex-col gap-6 mx-4 my-8">
                            <div class="flex justify-start items-center">
                                <img class="w-16 rounded-xl" src={fisLogo}></img>
                                <div class="flex flex-col px-4">
                                    <p>Product Designer Intern</p>
                                    <p class="text-sm">FIS Global</p>
                                </div>
                            </div>
                            <div class="flex justify-start items-center">
                                <img class="w-16 rounded-xl" src={qbuild}></img>
                                <div class="flex flex-col px-4">
                                    <p>Junior Project Manager Co-Op</p>
                                    <p class="text-sm">QBuild Software</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div class="flex flex-col lg:flex-row gap-6 my-20">
                    <img class="w-[400px] rounded-2xl transition duration-200 hover:rotate-3" src={kevpic1}></img>
                    <img class="w-[400px] rounded-2xl transition duration-200 hover:rotate-3" src={kevpic2}></img>
                    <img class="w-[400px] rounded-2xl transition duration-200 hover:rotate-3" src={kevpic3}></img>
                </div>
                
            </section>
  );
};
