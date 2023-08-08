'use client'

import { FC, useState, useRef } from "react"
import Link from 'next/link'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
// import DescriptiveIcon from "./descriptiveIcon"

interface propsNavigation {
    textNavigate: string,
    href: string,
    navigationOptions?: JSX.Element[]
}


const Navigationbutton: FC<propsNavigation> = ({ textNavigate, navigationOptions, href }) => {

    let [activado, setActivado] = useState<boolean | null>(false)
    let [mostrar, setMostrar] = useState<string | null>("hidden")
    const elementoRef = useRef(null)

    const subMenu = (event: any) => {
        if (activado === false) {
            setMostrar("inline-block")
            setActivado(true)
        } else if (activado === true) {
            setActivado(false)
            setMostrar("hidden")
        }
    }
    return (
        <>
            {navigationOptions ?
                <div>
                    <div className="flex gap-2 items-center" >
                        <Link href={href} className="text-textColor text-lg font-medium hover:text-gray-900">{textNavigate}</Link>
                        <button className="" onClick={subMenu}>
                            🔻
                        </button>
                    </div>
                    <nav ref={elementoRef} className={`bg-zinc-700 text-gray-200 ${mostrar} fixed`} >
                        {navigationOptions.map((elemento, index) => {
                            return <li className="list-none h-11 border border-black w-56 flex items-center p-5" key={index}>{elemento}</li>
                        })}
                    </nav>
                </div>
                : <div>
                    <Link href={href} className="text-textColor text-lg font-medium hover:text-gray-900">{textNavigate}</Link>
                </div>
            }
        </>
    )
}
export default Navigationbutton