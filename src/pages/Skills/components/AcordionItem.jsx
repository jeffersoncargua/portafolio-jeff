import { useState } from "react";

export const AcordionItem = ({title, items}) => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col " >
        <div className="flex justify-between items-center p-5 bg-gradient-to-b from-amber-400/70 to-orange-400/80 rounded-md md:hover:scale-101 ">
            <span className="text-sm md:text-lg font-bold">{title}</span>
            <button type="button" onClick={() => setIsOpen(!isOpen)} className="px-2.5 py-2">
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 md:w-8 md:h-8 bi bi-caret-up-fill transition delay-300 duration-700 hover:rotate-360" viewBox="0 0 16 16">
                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                    </svg>
                ):(
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 md:w-8 md:h-8 bi bi-caret-down-fill transition delay-300 duration-700 hover:rotate-360" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                )}
            </button>
        </div>
        <button type="button" onClick={() => setIsOpen(!isOpen)} className={`bg-white/50 w-full rounded-md p-5 ${!isOpen && 'hidden'}`}>
            <ul className="leading-8 text-sm md:text-lg">
                {items.map((item) => (
                    <li key={item} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 bi bi-check-circle text-green-700 ms-2 me-2.5" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                    </svg>
                    {item}
                </li>
                ))}
            </ul>
        </button>
    </div>
  )
}
