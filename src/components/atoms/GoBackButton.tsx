import React, { HTMLAttributeAnchorTarget, HTMLAttributes } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

interface Props extends HTMLAttributes<HTMLButtonElement>{
    isHome?:Boolean;
}

const GoBackButton = ({isHome}: Props) => {
    return (
        <button className={`flex gap-4 content-center items-center px-3 py-1 ${isHome} && 'invisible'`}>      
            <span className="text-small text-blue-400 font-semibold">Back</span>
            <FontAwesomeIcon className='w-3 text-blue-400' icon={faArrowUp}/>
        </button> 
    );
};

export default GoBackButton;