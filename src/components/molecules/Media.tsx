import React from 'react';
import SocialMediaImage from "../atoms/SocialMediaImage";
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';


const Media = () => {
    return (
        <div className='flex flex-row gap-3'>
            <SocialMediaImage color={"#c4302b"} icon={faYoutube} />
            <SocialMediaImage color={"#d5303e"} icon={faInstagram} />
            <SocialMediaImage color={"#3b5998"} icon={faSquareFacebook} />
            <SocialMediaImage color={"#fffff"} icon={faTiktok} />
        </div>
    );
};

export default Media;