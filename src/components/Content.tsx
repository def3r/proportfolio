import FuzzyText from './FuzzyText';
import type { ReactElement } from 'react';
import { Card, type CardInterfaceData } from './Card';
import { IoIosMail } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import type { IconType } from 'react-icons';
import { type ContactPairInterface, ContactPair } from './ContactPair';

function HomeButton({ href, icon }: { href: string, icon: IconType }): ReactElement {
  const Icon = icon
  return <a
    className="cursor-pointer hover:bg-transparent hover:text-violet-300 hover:underline hover:scale-110"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon size="2em" />
  </a>
}

export function Home({ name, description }: { name: string, description: string }): ReactElement {
  return (
    <div className="h-svh w-svw flex flex-col items-center">
      <div className="w-svw h-1/3"></div>

      <FuzzyText
        baseIntensity={0.01}
        enableHover={false}
        fontSize="10em"
      >
        {name}
      </FuzzyText>

      {/*
        <div className='md:text-3xl text-lg font-light text select-none'>
          Transpiling Ideas into Solutions
        </div>
        */}

      <div className="mt-3 text-lg max-w-[30em] text-pretty text-center backdrop-blurxl rounded-xl p-2">
        {description}
      </div>


      <div className="flex gap-9 mt-3">
        <HomeButton href="https://www.github.com/def3r" icon={FaGithub} />
        <HomeButton href="https://www.linkedin.com/in/ayaank9/" icon={FaLinkedin} />
        <HomeButton href="mailto:contact@def3r.in" icon={IoIosMail} />
      </div>

    </div>
  )
}

export function ProjectDescList({ list }: { list: string[] }): ReactElement {
  return (
    <div className='pl-2'>
      <ul className="list-disc space-y-3 text-zinc-200 font-light">
        {list.map((listItem, i) => <li key={i}>{listItem}</li>)}
      </ul>
    </div>
  )
}

export function Projects({ projects }: { projects: CardInterfaceData[] }): ReactElement {
  const rows: ReactElement[] = [];

  for (let i = 0; i < projects.length; i += 2) {
    rows.push(
      <div key={i} className="flex justify-around mb-12">
        {projects.slice(i, i + 2).map((project, idx) => {
          const Icon = project.icon
          return (
            <Card key={i + idx}
              title={project.title}
              description={project.description}
              icon=<Icon size={project.iconSize ? project.iconSize : "3em"} />
              gitLink={project.gitLink}
              srcCode={project.srcCode}
            >
              <ProjectDescList list={project.children!} />
            </Card>
          )
        })}
      </div>
    );
  }

  return (
    <div className="w-svw px-8 py-4">
      {rows}
    </div>
  )
}

export function Contact({ contactInfo }: { contactInfo: ContactPairInterface[] }) {
  return (
    <div className='w-svw h-svh flex justify-center items-center'>
      <div className='bg-black/40 w-96 h-[24em] p-2 flex flex-col gap-4 justify-center items-center rounded-xl'>
        <div className='text-xl mb-2'>
          Connect with me.
        </div>

        {contactInfo.map((info, key) => <ContactPair key={key} {...info} />)}

      </div>
    </div>
  )
}
