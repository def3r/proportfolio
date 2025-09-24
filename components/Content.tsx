"use client"

import FuzzyText from '@/components/FuzzyText';
import { ReactElement, ReactNode } from 'react';
import { Card, CardInterface } from './Card';
import { IoIosMail } from "react-icons/io";
import { FaTwitter, FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export function Home(): ReactElement {
  return (
    <div className="h-svh w-svw flex flex-col items-center">
      <div className="w-svw h-1/3">
      </div>

      <div className="">
        <FuzzyText
          baseIntensity={0.01}
          enableHover={false}
          fontSize="12em"
        >
          Ayaan Khan
        </FuzzyText>
      </div >

      {/*
        <div className='md:text-3xl text-lg font-light text select-none'>
          Transpiling Ideas into Solutions
        </div>
        */}

      <div className="mt-5 text-lg max-w-[30em] text-pretty text-center backdrop-blurxl rounded-xl p-4">
        I am a 3rd year CSE student dedicated to performance-driven development, from optimizing code to designing lightweight tools for Linux.
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
  )
}

export function Projects({ projects }: { projects: CardInterface[] }): ReactElement {
  const rows: ReactElement[] = [];

  for (let i = 0; i < projects.length; i += 2) {
    rows.push(
      <div key={i} className="flex justify-around mb-12">
        {projects.slice(i, i + 2).map((project, idx) => (
          <Card key={i + idx} {...project} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="w-svw px-8 py-4">
        {
          /*
          <div className='text-4xl m-auto w-fit text-violet-300 pb-4'>
            Projects
          </div>
          */
        }

        <div className=''>
          {/*projects.map((project: CardInterface, idx: number) => <Card {...project} key={idx} />)*/
            rows
          }
        </div>

      </div>
    </div>
  )
}

export interface ContactPairInterface {
  href: string
  icon: ReactNode
  text: string
}

function ContactPair({ href, icon, text }: ContactPairInterface) {
  return (
    <a href={href} target="_blank" className='w-[12em] hover:text-violet-300'>
      <div className='flex items-center gap-4 select-none cursor-pointer'>
        {icon} {text}
      </div>
    </a>
  )
}

export function Contact() {
  const contactInfo: ContactPairInterface[] = [
    {
      href: "mailto:contact@def3r.in",
      icon: <IoIosMail size="2em" />,
      text: "contact@def3r.in"
    },
    {
      href: "https://www.linkedin.com/in/ayaank9/",
      icon: <FaLinkedin size="2em" />,
      text: "Ayaan Khan"
    },
    {
      href: "https://x.com/def3r_",
      icon: <FaTwitter size="2em" />,
      text: "@def3r_"
    },
    {
      href: "https://discord.com/users/784839718801768468",
      icon: <FaDiscord size="2em" />,
      text: "@plankconstant"
    },
    {
      href: "https://github.com/def3r",
      icon: <FaGithub size="2em" />,
      text: "@def3r"
    },
    {
      href: "https://leetcode.com/u/def3r",
      icon: <SiLeetcode size="2em" />,
      text: "@def3r"
    },
  ]

  return (
    <div className='w-svw h-svh flex justify-center items-center'>
      <div className='bg-black/50 w-96 h-[24em] p-2 flex flex-col gap-4 justify-center items-center backdrop-blur-xl rounded-xl'>
        <div className='text-xl mb-2'>
          Connect with me.
        </div>

        {contactInfo.map((info, key) => <ContactPair key={key} {...info} />)}

      </div>
    </div>
  )
}
