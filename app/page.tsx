"use client"

import DarkVeil from '@/components/DarkVeil';
import FuzzyText from '@/components/FuzzyText';

export default function Home() {
  return (
    <>
      <div style={{ width: '100%', height: `100vh`, position: 'absolute', zIndex: -20 }}>
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

        <div>
          <div className='text-3xl font-light text text-white select-none'>
            Transpiling Ideas into Solutions
          </div>
        </div>

      </div>
    </>
  );
}
