// import { useState, useEffect } from "react"

export default function Marquee({ text }: { text: string }) {

  // const [txt, updateTxt] = useState(props.text);
  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     updateTxt(txt => txt[txt.length - 1] + txt.slice(0, txt.length - 1));
  //   }, 1300);
  //
  //   return () => {
  //     clearInterval(timerId);
  //   };
  // }, []);

  return (
    <div className="poiret-one-regular p-2 text-4xl select-none cursor-pointer min-[404px]:block hidden">
      {text}
    </div>
  )
}
