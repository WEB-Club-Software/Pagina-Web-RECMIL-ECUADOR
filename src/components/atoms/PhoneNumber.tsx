import React from 'react';
import { SizeProps } from '@/interface/misc.interrfaces';
import {FC} from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'; 
import { IconProp } from '@fortawesome/fontawesome-svg-core';


interface baseProps {
    icon: IconProp;
    text: String;
    color: string;
}

type Props = baseProps & SizeProps;

const PhoneNumber: FC<Props> = ({icon,color,width,height,size,text}) => {
    return (
        <div className='flex flex-row gap-2 items-center m-0.5 ml-5'>
            <FontAwesomeIcon style={{color: color}} icon={icon} width={width || size} height={height || size}/>
            <span className='text-stone-300'>{text}</span>
        </div>
    );
};

export default PhoneNumber;