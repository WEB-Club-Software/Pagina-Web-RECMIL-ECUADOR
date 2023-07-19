import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const NextToButton = () => {
    return (
        <button className={`flex gap-4 content-center items-center px-3 py-1`}>
            <span className="text-small text-blue-400 font-semibold">Conócenos más</span>
            <FontAwesomeIcon className='w-3 text-blue-400' icon={faArrowDown} />
        </button>
    );
};

export default NextToButton;