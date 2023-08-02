import React from 'react';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

interface NextToButtonProps {
    text: String;
}

const NextToButton: FC<NextToButtonProps> = ({ text }) => {
    return (
        <button className={`flex gap-4 content-center text-blue-400 items-center px-3 py-1 hover:text-blue-900`}>
            <span className="text-xl  font-semibold">{text}</span>
            <FontAwesomeIcon className='w-3' icon={faArrowDown} />
        </button>
    );
};

export default NextToButton;