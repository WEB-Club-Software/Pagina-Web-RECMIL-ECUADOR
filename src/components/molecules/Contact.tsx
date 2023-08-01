import React from 'react';
import PhoneNumber from "../atoms/PhoneNumber";
import { faPhone, faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'; 
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const Contact = () => {
    return (
        <div className='font-normal text-sm'>
            <span className='text-stone-300'>Contáctanos</span>
            <PhoneNumber color={"#ff0000"} icon={faLocationDot} size={15} text={"La Colina, Sangolquí 171103"}/>
            <PhoneNumber color={"#d1d1d1"} icon={faPhone} size={15} text={"Celular: 0999687422"}/>
            <PhoneNumber color={"#d1d1d1"} icon={faEnvelope} size={15} text={"Email: ojtipan@gmail.com"}/>
        </div>
    );
};

export default Contact;