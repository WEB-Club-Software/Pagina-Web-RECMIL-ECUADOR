'use client'
import { useState, FC } from "react";
import AccordionItem from "../atoms/AccordionItem";
import Data from '@/lib/data'
interface dataProp {
    data?: any
}

const Accordion: FC<dataProp> = ({ data = Data }) => {
    const [active, setActive] = useState<number | null>(null)
    function handleToggle(index: number) {
        if (active === index) {
            return setActive(null)
        }
        setActive(index)
    }
    return (
        <div className="w-full  pt-0 pb-0 pl-8 pr-8 mt-0 mb-6 ">
            <h1 className=" border-b-4  mb-10 font-bold text-xl md:text-2xl text-gray-500">PREGUNTAS FRECUENTES:</h1>
            <ul className="flex flex-col gap-4">
                {data.map((item: any) => {
                    return <AccordionItem
                        key={item.id}
                        item={item}
                        active={active}
                        handleTogle={handleToggle}
                    />
                })}
            </ul>
        </div>
    )
}
export default Accordion