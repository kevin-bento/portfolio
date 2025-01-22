import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/header/logo.png';
import x from '../assets/buttons/x-close.svg';
import mail from '../assets/buttons/mail-white.svg';
import phone from '../assets/buttons/phone.svg';

export const Header = () => {
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

    //contact us modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
    <header className="sticky top-0 lg:mb-12 flex justify-center items-center bg-gradient-to-b from-darkBackground z-[999]" >
        <img className="w-20 h-20 p-4" src={logo} alt="Logo"/>
        <div className="mx-8 my-8 w-96 flex justify-around bg-darkTile rounded-full p-4">
          <button onClick={handleHomeClick} className="rounded-full mx-2 px-6 py-2 text-white transition duration-100 hover:bg-[#494949] hover:scale-110 active:ring-4 active:ring-violet-300 focus:bg-[#494949]">Home</button>
          <button onClick={handleAboutClick} className="rounded-full mx-2 px-6 py-2 text-white transition duration-100 hover:bg-[#494949] hover:scale-110 active:ring-4 active:ring-violet-300 focus:bg-[#494949] text-nowrap">About Me</button>
          <button onClick={handleProjectsClick} className="rounded-full mx-2 px-6 py-2 text-white transition duration-100 hover:bg-[#494949] hover:scale-110 active:ring-4 active:ring-violet-300 focus:bg-[#494949]">Projects</button>
        </div>
        <div className="flex justify-between">
          <button onClick={toggleModal} className="text-white transition duration-300 hover:scale-110">Contact</button>
        </div>
        
        {isModalOpen && (
        <div className="bg-opacity-75 transition-opacity duration-300 fixed inset-0 bg-gray-800 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="shadow-lg rounded-2xl backdrop-blur-md w-4/5 max-w-lg p-6 relative text-white">
          
            {/* Modal content */}
            <h2 className="text-2xl font-bold mb-8">Let's grab coffee!</h2>
              <div class="flex flex-col gap-2">
              <div class="flex gap-4 items-center">
                <img class='w-7' src={mail}></img>
                <p>k55liu@uwaterloo.ca</p>
              </div>
              <div class="flex gap-4 items-center">
                <img class='w-7' src={phone}></img>
                <p>+1 647 918 3553</p>
              </div>
            </div>
            
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition duration-150 hover:scale-110 hover:bg-darkTileHover p-2 rounded-xl"
              onClick={toggleModal}
            >
              <img class="w-5" src={x} alt='x'></img>
            </button>
          </div>
        </div>
      )}

      {/* Overlay to prevent interaction with background */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleModal}
        />
      )}
    </header>
  );
};
