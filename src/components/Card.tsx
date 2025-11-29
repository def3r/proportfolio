import type { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";

export interface CardInterfaceData {
  title: string
  description: string
  children?: string[]
  icon: IconType
  iconSize?: string
  gitLink: string
  srcCode: string[]
}

export interface CardInterface {
  children?: React.ReactNode;
  title: string
  description: string
  icon: React.ReactNode
  gitLink: string
  srcCode: string[]
}

export function Card({ children, title, description, icon, gitLink, srcCode }: CardInterface) {
  return (
    <div>
      <div className='p-2 min-[1124px]:h-[24em] min-[1124px]:w-[32em] min-[464px]:h-[28em] min-[464px]:w-[24em] min-h-[28em] w-[18em] flex flex-col justify-between rounded-xl backdropblur-3xl bg-card-bg/40'>
        <div>
          <div className='pb-2'>
            <div className='w-fit m-auto text-3xl font-medium text-hover'>
              {title}
            </div>
            <div className='w-fit m-auto text-center font-light italic'>{description}</div>
          </div>

          <div className="w-fit m-auto p-2">
            {icon}
          </div>

          <div className='p-2'>
            {children}
          </div>
        </div>

        <div className='flex flex-wrap gap-2 items-center'>
          <a href={gitLink} target='_blank' className="hover:text-hover"><FaGithub size="2em" /></a>
          {srcCode.map((s: string, idx: number) =>
            <div key={idx} className="px-2 rounded-lg border-hover/40 border-2 select-none hover:border-hover">{s}</div>
          )}
        </div>
      </div>
    </div>
  )
}
