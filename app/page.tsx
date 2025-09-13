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

      <div className="h-svh w-svw flex flex-col items-center justify-center">
        <div>
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

      </div>

    </div>
  );
}
