import { FaGithub } from "react-icons/fa";

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
      <div className='p-2 h-[24em] w-[32em] flex flex-col justify-between rounded-xl backdropblur-3xl bg-black/40 bg[#babbf1]/5'>
        <div>
          <div className='pb-2'>
            <div className='w-fit m-auto text-3xl font-medium'>
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

        <div className='flex gap-2 items-center'>
          <a href={gitLink} target='_blank'><FaGithub size="2em" /></a>
          {srcCode.map((s: string, idx: number) =>
            <div key={idx} className='px-2 rounded-lg border-violet-300 border-2 select-none hover:border-violet-400'>{s}</div>
          )}
        </div>
      </div>
    </div>
  )
}
