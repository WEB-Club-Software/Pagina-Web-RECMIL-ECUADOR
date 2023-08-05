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
        <button className={`flex gap-4 content-center items-center text-blue-400 hover:text-blue-900 hover:scale-105 ${isHome} && 'invisible'`}>      
            <a href={previusPage}><span className="text-small font-semibold">{text}</span></a>
            <a href={previusPage} className='animate-bounce' ><FontAwesomeIcon className='w-3' icon={faArrowUp}/></a>
        </button> 
    );
};

export default GoBackButton;