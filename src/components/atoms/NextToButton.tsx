import React from 'react';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

interface NextToButtonProps {
    text: String;
    nextPage: string;
}

const NextToButton: FC<NextToButtonProps> = ({ text, nextPage }) => {
    return (
        <button className={`flex gap-4 content-center items-center px-3 py-1 text-blue-400 hover:text-blue-900 hover:scale-125`}>
            <a href={nextPage}><span className="text-small font-semibold">{text}</span></a>
            <a href={nextPage} className='animate-bounce'><FontAwesomeIcon className='w-3' icon={faArrowDown} /></a>
        </button>
    );
};

export default NextToButton;