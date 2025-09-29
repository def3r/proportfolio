import { useSections } from '../store';

interface NavButtonProps {
  text: string
  id: number
}

export function NavButton({ text, id }: NavButtonProps) {
  const curSec = useSections((state) => state.section)
  const setSec = useSections((state) => state.setSection)

  return (
    <div
      className={"select-none cursor-pointer hover:text-violet-300 " + (curSec == id ? "text-violet-300 font-medium" : "")}
      onClick={() => setSec(id)}
    >
      {text}
    </div>
  )
}
