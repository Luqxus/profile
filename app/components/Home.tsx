"use client";

import Image from "next/image";
import { Phone, Mail } from "lucide-react";

const HomeView = () => {
    return (
        <div className="container mx-auto w-screen min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-20">
            <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-center gap-8 py-8">
                <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start animate-slide-up-fade">
                    <HeaderText />
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-center animate-float">
                    <Image
                        src="/profile_image.png"
                        alt="Lucas Lebelwane profile"
                        width={500}
                        height={500}
                        priority
                        className="object-contain w-[300px] h-[300px] md:w-[500px] md:h-[500px] transition-all duration-500 transform hover:scale-110 hover:rotate-2 animate-reveal"
                    />
                </div>
            </div>
        </div>
    );
};

const HeaderText = () => {
    const handleContactClick = () => {
        window.location.href = "mailto:lebelwane@protonmail.com";
    };

    return (
        <div className="flex flex-col gap-y-4 md:gap-y-6 w-full text-center md:text-left">
            <div className="space-y-2">
                <p className="text-3xl md:text-5xl lg:text-6xl font-light">
                    <span className="inline-block animate-slide-right opacity-0 [animation-delay:200ms]">MY NAME</span> <br />
                    <span className="inline-block animate-slide-right opacity-0 [animation-delay:400ms]">IS</span>{" "}
                    <span className="font-extrabold inline-block animate-slide-up-fade opacity-0 [animation-delay:600ms]">
                        LUCAS LEBELWANE
                    </span>
                </p>
            </div>

            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 animate-slide-up opacity-0 [animation-delay:800ms]">
                Systems Developer
            </p>

            <button 
                onClick={handleContactClick}
                className="bg-black hover:bg-gray-800 transition-all duration-500 
                         py-3 px-6 text-white text-base md:text-lg w-max mx-auto md:mx-0
                         rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 
                         hover:scale-105 animate-bounce-in opacity-0 [animation-delay:1000ms]"
            >
                {"LET'S TALK WITH ME"}
            </button>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-x-8 text-sm md:text-base lg:text-lg text-gray-700">
                <a 
                    href="tel:+27790446226" 
                    className="flex items-center gap-x-2 hover:text-black transition-all duration-300 
                             hover:scale-105 animate-fade-up opacity-0 [animation-delay:1200ms]"
                >
                    <Phone className="animate-pulse" size={20} />
                    <span>{"+27 79 044 6226"}</span>
                </a>
                <a 
                    href="mailto:lebelwane@protonmail.com"
                    className="flex items-center gap-x-2 hover:text-black transition-all duration-300 
                             hover:scale-105 animate-fade-up opacity-0 [animation-delay:1400ms]"
                >
                    <Mail className="animate-pulse" size={20} />
                    <span>{"lebelwane@protonmail.com"}</span>
                </a>
            </div>
        </div>  
    );
};

export default HomeView;