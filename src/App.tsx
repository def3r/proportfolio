import DarkVeil from './components/DarkVeil';
import { NavButton } from './components/NavButton';
import { Home, Projects, Contact } from './components/Content'
import { useSections } from './store';
import { name, description, projects, contactInfo } from './data';

export default function App() {
  const sections: string[] = ['Home', 'Projects', 'Contact'] //'Blog'
  const curSec = useSections((state) => state.section);

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

      {curSec == 0 && <Home {...{ name }} {...{ description }} />}
      {curSec == 1 && <Projects projects={projects} />}
      {curSec == 2 && <Contact {...{ contactInfo }} />}

    </div>
  );
}
