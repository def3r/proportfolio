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
      role='button'
      className={"select-none cursor-pointer hover:text-hover " + (curSec == id ? "text-hover font-medium" : "")}
      onClick={() => setSec(id)}
    >
      {text}
    </div>
  )
}
