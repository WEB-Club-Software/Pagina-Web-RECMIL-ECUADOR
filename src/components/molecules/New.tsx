import React from 'react';
import ImageContainer from "@/components/atoms/ImagenContainer";
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react'
import { SizeProps } from '@/interface/misc.interrfaces';
import Navigationbutton from '../atoms/Navigationbutton';
import NewsBannerInfo from '../atoms/TextInfo';

interface baseProps {
  src: string | StaticImageData;
  alt: String;
  title: String;
  date: String;
  url: string;
  size: number;
}

type Props = baseProps & SizeProps;

const New: FC<Props> = ({ src, title, date, url, size}) => {

    return (
        <div className='bg-white'>
            <div>
                <ImageContainer src={src} alt='New' size={size}/>
            </div>
            <div className="flex flex-col gap-4 p-5">
                <h2 className="font-bold w-4/5 text-left">{title}</h2>
                <h3 className='text-gray-500 font-bold mb-7'>{date}</h3>
            </div>
            <div className='bg-customColor border-t border-gray-70 text-center font-bold py-3'>
                <Navigationbutton textNavigate='More' href={url}/>
            </div>
        </div>
    );
};

export default New;