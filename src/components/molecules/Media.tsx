import React from 'react';
import SocialMediaImage from "../atoms/SocialMediaImage";
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'; 
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

const Media = () => {
    return (
        <div className='flex flex-row gap-3'>
            <SocialMediaImage color={"#c4302b"} icon={faYoutube} alt={"Youtube"} width={60} height={60}/>
            <SocialMediaImage color={"#d5303e"} icon={faInstagram} alt={"Instagram"} width={60} height={60}/>
            <SocialMediaImage color={"#3b5998"} icon={faSquareFacebook} alt={"Facebook"} width={60} height={60}/>
            <SocialMediaImage color={"#fffff"} icon={faTiktok} alt={"TikTok"} width={60} height={60}/>
        </div>
    );
};

export default Media;