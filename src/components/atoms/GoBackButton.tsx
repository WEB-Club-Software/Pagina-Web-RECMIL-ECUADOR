import React, { HTMLAttributeAnchorTarget, HTMLAttributes } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

interface Props extends HTMLAttributes<HTMLButtonElement>{
    isHome?:Boolean;
    text:String;
    previusPage:string;
}

const GoBackButton = ({isHome,text,previusPage}: Props) => {
    return (
        <button className={`flex gap-4 content-center items-center px-3 py-1 ${isHome} && 'invisible'`}>      
            <a href={previusPage}><span className="text-small text-blue-400 font-semibold">{text}</span></a>
            <a href={previusPage}><FontAwesomeIcon className='w-3 text-blue-400' icon={faArrowUp}/></a>
        </button> 
    );
};

export default GoBackButton;