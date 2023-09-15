'use client'

import { FC, useState } from "react"
import Link from 'next/link'
import { ChevronDown, ChevronUp } from "react-bootstrap-icons"

interface propsNavigation {
    textNavigate: string,
    href: string,
    navigationOptions?: JSX.Element[]
}


const Navigationbutton: FC<propsNavigation> = ({ textNavigate, navigationOptions, href }) => {
    let [activado, setActivado] = useState<boolean | null>(false)
    let [mostrar, setMostrar] = useState<string | null>("hidden")

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
                    <div className="flex gap-2 items-center " >
                        <Link href={href} className="text-textColor text-lg font-medium hover:text-gray-900">{textNavigate}</Link>
                        {
                            activado ? <button className="" onClick={subMenu}>
                                <ChevronUp color="white" />
                            </button> : <button className="" onClick={subMenu}>
                                <ChevronDown color="white" />
                            </button>
                        }
                    </div>
                    <nav className={`bg-zinc-700 text-gray-200 ${mostrar} fixed `} >
                        {navigationOptions.map((elemento, index) => {
                            return <li className="list-none h-11 border border-black w-56 flex items-center p-5 hover:text-green-600 " key={index}>{elemento}</li>
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