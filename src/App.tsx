import DarkVeil from './components/DarkVeil';
import { NavButton } from './components/NavButton';
import { Home, Projects, Contact } from './components/Content'
import { useSections } from './store';
import type { CardInterface } from './components/Card';
import { FaRegKeyboard } from "react-icons/fa";
import { RiWindow2Fill, RiNodeTree } from "react-icons/ri";
import { GoTerminal } from "react-icons/go";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { FaChartGantt } from "react-icons/fa6";


export default function App() {
  const sections: string[] = ['Home', 'Projects', 'Contact'] //'Blog'
  const curSec = useSections((state) => state.section);

  const projects: CardInterface[] = [
    {
      title: "Haka",
      description: 'Lightweight Global Event Listener',
      icon: <FaRegKeyboard size='3em' />,
      gitLink: 'https://github.com/def3r/haka/',
      srcCode: ["C", "libevdev", "POSIX"],
    },
    {
      title: "dlsh",
      description: 'Linux Shell from Scratch',
      icon: <GoTerminal size='3em' />,
      gitLink: 'https://github.com/def3r/dlsh/',
      srcCode: ["Go"],
    },
    {
      title: "Portfolio",
      description: 'this.protfolio',
      icon: <RiWindow2Fill size='3em' />,
      gitLink: 'https://github.com/def3r/proportfolio/',
      srcCode: ["React", "TailwindCSS", "Zustand"],
    },
    {
      title: "CVInsight",
      description: 'AI Powered Resume-Filtering Web App',
      icon: <MdOutlineDocumentScanner size='3em' />,
      gitLink: 'https://github.com/orgs/Foxtrot-BHU/repositories',
      srcCode: ["Fast-API", "Redis", "React", "Jotai"],
    },
    {
      title: "Parse.md",
      description: 'Markdown parser library for C++',
      icon: <RiNodeTree size='3em' />,
      gitLink: 'https://github.com/def3r/Parse.md/',
      srcCode: ["Cpp"],
    },
    {
      title: "SchedSim",
      description: 'Simulation of OS Scheduling Algorithms',
      icon: <FaChartGantt size='3em' />,
      gitLink: 'https://github.com/def3r/schedsim/',
      srcCode: ["Cpp", "Raylib"],
    },
  ]

  return (
    <div className="text-white bg[#2d3142] inter-regular">
      <div className='w-svw h-svh fixed -z-20'>
        {<DarkVeil noiseIntensity={0} scanlineFrequency={0} scanlineIntensity={1} />}
      </div >

      <div className="fixed w-svw p-2 z-20">
        <div className="bg[#babbf1]/5 bg-black/40 p-2 flex backdrop-blur-xl rounded-xl justify-between">
          <div className="fleur-de-leah-regular p-2 text-4xl select-none cursor-pointer">
            def3r
          </div>
          <div className="text-lg font-light my-auto text-center pr-2">
            <div className="flex gap-8">
              {sections.map((sec: string, idx: number) => {
                return (
                  <NavButton text={sec} key={idx} id={idx} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
      {(curSec != 0 && curSec != 2) &&
        <div className='w-svw text-transparent select-none p-4'>
          <div className="fleur-de-leah-regular p-2 text-4xl">
            def3r
          </div>
        </div>
      }

      {curSec == 0 && <Home />}
      {curSec == 1 && <Projects projects={projects} />}
      {curSec == 2 && <Contact />}

    </div>
  );
}
