'use client';
import React, { useEffect, useState } from 'react';
import ImageContainer from '../atoms/ImagenContainer';
import TextInfo from '../atoms/TextInfo';
import { FC } from 'react'
import { MiObject } from '@/interface/misc.interrfaces';


interface Props {
    dataBanner: MiObject[];
}


const NewBanner: FC<Props> = ({ dataBanner }) => {

    const [index, setIndex] = React.useState(0);

    const changeBannerInfo = (data:MiObject)=>{
        const newIndex = dataBanner.findIndex((dataBanner)=> dataBanner == data);
        setIndex(newIndex)
        console.log(index)
    }

    return (
        <div className='flex justify-center w-5/6'>
            <div className='relative'>
                <ImageContainer src={dataBanner[index].src} size={650} alt='Img' />
                <TextInfo date={dataBanner[index].date} title={dataBanner[index].title} />
                <div className='absolute flex gap-3 bottom-10 left-2/4'>
                    {
                        dataBanner.map((data) => (
                            <button className='hover:scale-150 w-2 h-2 bg-slate-200 rounded-full' onClick={()=>changeBannerInfo(data)}></button>
                        ))
                    }
                </div>
            </div>
            <div>
                <div className='relative'>
                    <ImageContainer src={dataBanner[dataBanner.length - 2]?.src} size={325} alt='Img' />
                    <TextInfo date={dataBanner[dataBanner.length - 2].date} title={dataBanner[dataBanner.length - 2].title}/>
                </div>
                <div className='relative'>
                    <ImageContainer src={dataBanner[dataBanner.length - 1]?.src} size={325} alt='Img' />
                    <TextInfo date={dataBanner[dataBanner.length - 1].date} title={dataBanner[dataBanner.length - 1].title}/>
                </div>
            </div>
        </div>
    );
};

export default NewBanner;