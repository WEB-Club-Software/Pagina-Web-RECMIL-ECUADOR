import React from 'react';
import Contact from '../molecules/Contact';
import Media from '../molecules/Media';

const Footer = () => {
    return (
        <div className='flex flex-row items-center py-3 justify-around w-full bg-footer'>
            <Contact />
            <Media />
        </div>
    );
};

export default Footer;