import React from 'react';

const GoBackButton = () => {
    return (
        <button>      
            <span className="text-small text-blue-400 font-semibold">Back</span>
            <img src="/icons/arrow.svg" alt="back" className='rotate-180' />
        </button> 
    );
};

export default GoBackButton;