"use client"

import DarkVeil from '@/components/DarkVeil';
import FuzzyText from '@/components/FuzzyText';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Home() {
  return (
    <div className="text-white">
      <div style={{ width: '100%', height: `100vh`, position: 'fixed', zIndex: -20 }}>
        <DarkVeil noiseIntensity={0} scanlineFrequency={0} scanlineIntensity={1} />
      </div >

      <div className="fixed w-svw p-2">
        <div className="bgwhite/30 p-2 flex backdrop-blur-xl rounded-xl justify-between">
          <div className="fleur-de-leah-regular p-2 text-4xl select-none cursor-pointer">
            def3r
          </div>
          <div className="text-lg font-light my-auto text-center pr-2">
            <div className="flex gap-8">
              <div className="select-none cursor-pointer hover:text-purple-300">Home</div>
              <div className="select-none cursor-pointer hover:text-purple-300">About</div>
              <div className="select-none cursor-pointer hover:text-purple-300">Projects</div>
              <div className="select-none cursor-pointer hover:text-purple-300">Contact</div>
              <div className="select-none cursor-pointer hover:text-purple-300">Blog</div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-svh w-svw flex flex-col items-center">
        <div className="w-svw h-1/3">
        </div>

        <div className="">
          <FuzzyText
            baseIntensity={0.01}
            enableHover={false}
          >
            Ayaan Khan
          </FuzzyText>
        </div >

        <div className='md:text-3xl text-lg font-light text select-none'>
          Transpiling Ideas into Solutions
        </div>

        <div className="flex gap-9 mt-5">
          <a href="https://www.github.com/def3r" target='_blank'
            className="cursor-pointer hover:bg-transparent hover:text-white hover:underline hover:scale-110"
          >
            <FaGithub size="2em" />
          </a>

          <a
            className="cursor-pointer hover:bg-transparent hover:text-white hover:underline hover:scale-110"
            href="https://www.linkedin.com/in/ayaank9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size="2em" />
          </a>

          <a
            className="cursor-pointer hover:bg-transparent hover:text-white hover:underline hover:scale-110"
            href="mailto:contact@def3r.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoIosMail size="2em" />
          </a>

        </div>

        <div className="mt-5 text-lg max-w-[30em] text-pretty text-center backdrop-blur-xl rounded-xl p-4 font-light">
          I am a 3rd year CSE student passionate about performance-driven development, from optimizing code to designing lightweight tools for Linux.
        </div>

      </div>


    </div>
  );
}
