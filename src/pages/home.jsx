import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import {Header} from '../components/header';
import {UX} from '../components/project types/ux';
import { FrontEnd } from '../components/project types/frontend';
import { Video } from '../components/project types/video';

//images
import chevron from '../assets/other icons/chevron-down.png';
import html from '../assets/tech stack/html.png';
import css from '../assets/tech stack/css.png';
import js from '../assets/tech stack/js.png';
import figma from '../assets/tech stack/figma.png';
import notion from '../assets/tech stack/notion.png';
import tailwind from '../assets/tech stack/tailwind.png';
import react from '../assets/tech stack/react.png';
import github from '../assets/tech stack/github.svg';
import jira from '../assets/tech stack/jira.png';
import vscode from '../assets/tech stack/vscode.png';

import pfp from '../assets/about me/kevin.png';
import arrow from '../assets/buttons/arrow-narrow-up-right.png';

import mail from '../assets/buttons/email.png';
import behance from '../assets/buttons/behance.png';
import linkedin from '../assets/buttons/linkedin.png';
import laptop from '../assets/featured projects/sourcepoint-laptop.png';
import splogo from '../assets/featured projects/sourcepoint-text.png';

import etk from '../assets/featured projects/etk.png'
import gather from '../assets/featured projects/gather.png';
import video from '../assets/featured projects/youtube.jpg';
import dxs from '../assets/featured projects/dxs.png';



export const Home = () => {
    const navigate = useNavigate();
    const handleAboutClick = () => {
        console.log("nav to about");
        navigate("/about");
    }
    const handleHomeClick = () => {
        navigate("/home")
    }
    const handleProjectsClick = () => {
        navigate("/projects")
    }
    const Typewriter = () => {
        useEffect(() => {
            /*typing*/
            var TxtType = function(el, toRotate, period) {
                this.toRotate = toRotate;
                this.el = el;
                this.loopNum = 0;
                this.period = parseInt(period, 10) || 2000;
                this.txt = '';
                this.tick();
                this.isDeleting = false;
            };

            TxtType.prototype.tick = function() {
                var i = this.loopNum % this.toRotate.length;
                var fullTxt = this.toRotate[i];

                if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
                } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
                }

                this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

                var that = this;
                var delta = 200 - Math.random() * 100;

                if (this.isDeleting) { delta /= 2; }

                if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
                } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
                }

                setTimeout(function() {
                that.tick();
                }, delta);
            };

            window.onload = function() {
                var elements = document.getElementsByClassName('typewrite');
                for (var i=0; i<elements.length; i++) {
                    var toRotate = elements[i].getAttribute('data-type');
                    var period = elements[i].getAttribute('data-period');
                    if (toRotate) {
                    new TxtType(elements[i], JSON.parse(toRotate), period);
                    }
                }
                // INJECT CSS
                var css = document.createElement("style");
                css.type = "text/css";
                css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
                document.body.appendChild(css);
            };
   
    
        console.log("typing animation (JS) executed.")
        }, []);}


    return (
        <div className="">
        <section className="flex justify-center sm:px-12">

            <div className="flex flex-col justify-between items-center">

            <div className="grid grid-cols-1 grid-rows-8 lg:grid-cols-12 lg:grid-rows-6 gap-4">

                <div className="col-start-1 col-span-1 lg:col-span-7 row-start-1 row-span-2 lg:row-span-3 lg:bg-darkTile rounded-2xl flex flex-col text-white">
                <h1 className="animate-appear text-2xl px-12 py-5 lg:pt-12 lg:pb-4 text-liteGrey">👋&nbsp; Howdy, I'm Kevin!</h1>
                <div className="flex flex-row justify-start items-end">
                    <h1 className="text-2xl pl-12">I'm a &nbsp;</h1>
                    <h1 className="typewrite text-4xl" data-period="2000" data-type='["UX Designer.", "Developer.", "Product Designer.", "Photographer.", "Content Creator.", "Car Enthusiast.", "Boba Addict."]'></h1>
                </div>
                </div>
                <div className="col-start-1 col-span-1 lg:col-span-7 row-start-6 lg:row-start-4 row-span-3 bg-darkTile rounded-2xl transform transition duration-300 hover:bg-darkTileHover hover:scale-105 hover:rotate-6 hover:z-50">
                <h1 className="text-2xl px-12 pt-6 pb-4 text-liteGrey">My Tech Stack</h1>
                <div className="flex justify-center mx-4">
                    <div className="grid grid-rows-2 grid-cols-5">
                    <img className="w-[60px] row-start-1 row-span-1 col-start-1 col-span-1 p-2 transition duration-100 hover:scale-110" src={ html } alt="HTML5"></img>
                    <img className="w-[60px] row-start-1 row-span-1 col-start-2 col-span-2 p-2 transition duration-100 hover:scale-110" src={ css } alt="CSS"></img>
                    <img className="w-[60px] row-start-1 row-span-1 col-start-3 col-span-3 p-2 transition duration-100 hover:scale-110" src={ js } alt="JS"></img>
                    <img className="w-[60px] row-start-1 row-span-1 col-start-4 col-span-4 p-2 transition duration-100 hover:scale-110" src={figma} alt="Figma"></img>
                    <img className="w-[60px] row-start-1 row-span-1 col-start-5 col-span-5 p-2 transition duration-100 hover:scale-110" src={notion} alt="Notion"></img>
                    <img className="w-[60px] rounded-3xl row-start-2 row-span-1 col-start-1 col-span-1 p-2 transition duration-100 hover:scale-110" src={tailwind} alt="HTML5"></img>
                    <img className="w-[60px] rounded-3xl row-start-2 row-span-1 col-start-2 col-span-2 p-2 transition duration-100 hover:scale-110" src={react} alt="CSS"></img>
                    <img className="w-[60px] rounded-3xl row-start-2 row-span-1 col-start-3 col-span-3 p-2 transition duration-100 hover:scale-110" src={github} alt="JS"></img>
                    <img className="w-[60px] rounded-3xl row-start-2 row-span-1 col-start-4 col-span-4 p-2 transition duration-100 hover:scale-110" src={jira} alt="Figma"></img>
                    <img className="w-[60px] rounded-3xl row-start-2 row-span-1 col-start-5 col-span-5 p-2 transition duration-100 hover:scale-110" src={vscode} alt="Notion"></img>
                </div>
                    
                </div>
                
                </div>
        
                <div className="overflow-visible col-start-1 col-span-1 lg:col-start-8 lg:col-span-4 row-start-3 row-span-3 lg:row-start-1 lg:row-span-6 p-4 lg:max-w-64 bg-darkTile flex items-center justify-around lg:flex-col lg:justify-center lg:items-center shadow-xl rounded-2xl transform transition duration-300 hover:bg-darkTileHover hover:scale-105 hover:rotate-3">
                <div className="shrink-0">
                    <img className="size-36 lg:size-52 transition duration-300 hover:scale-110 mt-4 " src={pfp} alt="Kevin PFP"></img>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-white max-w-[80%] my-6 font-sans text-sm">I'm currently studying at the 
                    University of Waterloo as a Management Engineering student. Feel free to get to know me!</p>
                    <div className="flex flex-row min-w-[100%] justify-end px-4">
                    <button onClick={handleAboutClick} className="rounded-xl size-10 bg-lemon mb-4 flex justify-center items-center transition duration-300 hover:bg-[#BF8DFF] active:ring-4 active:ring-violet-300 ">
                        <img className="size-8 p-1" src={arrow} alt="Arrow"/>
                    </button>
                    </div>
                </div>
                </div>
                
                <div className="hidden col-start-12 col-span-1 row-start-1 row-span-3  rounded-2xl lg:flex flex-col justify-start items-center">
                <a href="mailto:k55liu@uwaterloo.ca" target="_blank" rel="noopener noreferrer">
                    <button className="bg-darkTile mb-3 rounded-xl transition duration-300 hover:bg-darkTileHover hover:scale-125 ">
                        <img className="p-3 w-12" src={mail}/>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/kevin-liu-uw/" target="_blank" rel="noopener noreferrer">
                    <button className="bg-darkTile mb-3 rounded-xl transition duration-300 hover:bg-darkTileHover hover:scale-125 ">
                        <img className="p-3 w-12" src={linkedin}/>
                    </button>
                </a>
                
                <a href="https://www.behance.net/uwkevinliu" target="_blank" rel="noopener noreferrer">
                    <button className="bg-darkTile mb-3 rounded-xl transition duration-300 hover:bg-darkTileHover hover:scale-125 ">
                        <img className="p-3 w-12" src={behance}/>
                    </button>
                </a>
                </div>
            </div>

            <button id="scrollButton" className="my-20 flex flex-col justify-around items-center text-liteGrey text-2xl transition duration-500 hover:scale-110">
                <h1 className="z-50">Featured Projects</h1>
                <img className="w-12" src={chevron}/>
            </button>

            <div id="targetDiv" className=" mb:20 lg:mb-40 ">
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

                <div className="col-start-1 col-span-1 lg:col-start-5 lg:col-span-4 row-start-4 row-span-1 lg:row-span-3 bg-[#c0c0c0] rounded-2xl transition duration-300 hover:scale-90 hover:rotate-3 p-4 flex flex-col justify-between ">
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <h1 className='text-xl'> iSheep Pro</h1>
                            <p className='text-sm'>Tech/Lifestyle Channel</p>
                        </div>
                        <Video />
                    </div>
                    <div class="flex justify-between items-end">
                        <img className='w-60 m-6 rounded-2xl shadow-md transition duration-300 hover:scale-105 hover:-rotate-2' src={video}></img>
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
            
            
        </section>
        

        </div>
    );   

};

