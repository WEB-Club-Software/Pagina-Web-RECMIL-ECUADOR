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
        <li>
            <div>
                <h2 onClick={() => handleTogle(item.id)}>
                    {item.title}<span>{item.id === active ? "-" : "+"}</span>
                </h2>
            </div>
            <div
                ref={contentEl}
                className={`bg-white ${active === item.id ? "active" : ""}`}
            >


            </div>
        </li>
    )
}

export default AccordionItem
