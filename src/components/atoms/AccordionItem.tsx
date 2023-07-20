import { it } from 'node:test';
import { FC, useRef } from 'react'

interface AccordionItemProps {
    item: {
        id: number,
        title: string,
        content: string;
    },
    active: number | null,
    handleTogle: (id: number) => void
}

const AccordionItem: FC<AccordionItemProps> = ({ item, active, handleTogle }) => {

    const contentEl = useRef<HTMLDivElement | null>(null);

    return (
        <li className={`bg-zinc-200 list-none p-6  border-solid border-black  ${active === item.id ? "rounded-lg" : "rounded-full"}`}>
            <div>
                <h2 onClick={() => handleTogle(item.id)} className='text-xl font-medium text-black flex justify-between cursor-pointer select-none'>
                    {item.title}<span className='text-gray-500'>{item.id === active ? "-" : "+"}</span>
                </h2>
            </div>
            <div
                ref={contentEl}
                className={`text-gray-500 h-0   overflow-hidden transition-all duration-700 ease-in-out ${active === item.id ? "h-auto mt-4" : ""}`}
                style={
                    active === item.id ?
                        {
                            height: contentEl?.current?.scrollHeight
                        }
                        : { height: "0px" }
                }
            >
                <p>{item.content}</p>
            </div>
        </li>
    )
}

export default AccordionItem
