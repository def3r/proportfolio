import { type IconType } from "react-icons"

export interface ContactPairInterface {
  href: string
  icon: IconType
  text: string
}

export function ContactPair({ href, icon, text }: ContactPairInterface) {
  const Icon = icon
  return (
    <a href={href} target="_blank" className='w-[12em] hover:text-hover'>
      <div className='flex items-center gap-4 select-none cursor-pointer'>
        <Icon size="2em" /> {text}
      </div>
    </a>
  )
}

