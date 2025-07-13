"use client";
import Typewriter from "typewriter-effect";

export default function Landing() {
  return (
    <div className="text-[#004875] bg-[#F8F8F8] font-lexend h-[20rem] flex justify-center items-center px-4">
      <div className="flex flex-col gap-6 max-w-md w-full text-center md:text-left">
        <div className="flex flex-col font-light gap-1">
          <span className="text-sm md:text-base">Hello UofT! 👋</span>

          <span className="font-playfair italic font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
            <Typewriter
              options={{
                strings: [
                  "discover your music taste",
                  "make new friends",
                  "all with a QR code",
                ],
                autoStart: true,
                loop: true,
                delay: 30,          
                deleteSpeed: 20,    
                pauseFor: 1000,    
              }}
            />
          </span>

          <span className="text-sm md:text-base">With Just a QR Code</span>
        </div>

        <div className="flex gap-4 justify-center md:justify-start">
          <button className="transform hover:rotate-[2deg] text-xs sm:text-sm rounded-xs px-4 py-2 bg-white cursor-pointer text-[#004875] border-2 border-[#004875] hover:text-white hover:bg-[#004875] transition">
            register
          </button>
          <button className="transform hover:rotate-[-2deg] text-xs sm:text-sm rounded-xs px-4 py-2 bg-white cursor-pointer text-[#004875] border-2 border-[#004875] hover:text-white hover:bg-[#004875] transition">
            login
          </button>
        </div>
      </div>
    </div>
  );
}
