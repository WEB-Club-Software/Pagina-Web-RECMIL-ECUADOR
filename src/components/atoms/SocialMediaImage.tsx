import { SizeProps } from '@/interface/misc.interrfaces';
import React from 'react';
import {FC} from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'; 
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface baseProps {
    icon: IconProp;
    alt: string;
    color: string;
}

type Props = baseProps & SizeProps;

const ImageContainer: FC<Props> = ({icon,color, alt,width,height,size}) => {
    return (
       <a href='' className='flex items-center justify-center bg-white p-1 m-0'>
        <FontAwesomeIcon style={{color: color}} icon={icon} width={width || size} height={height || size}/>
       </a>
    );
};

export default ImageContainer;