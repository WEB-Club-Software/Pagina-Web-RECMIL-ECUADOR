import React from 'react';
import { FC } from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface baseProps {
    icon: IconProp;
    color: string;
}

const ImageContainer: FC<baseProps> = ({ icon, color }) => {
    return (
        <a href='' className='flex items-center justify-center p-1 m-0'>
            <FontAwesomeIcon className='hover:scale-125 ' style={{ color: color, width: "3rem" }} icon={icon} />
        </a>
    );
};

export default ImageContainer;