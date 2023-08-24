import React from 'react';
import { FC } from "react";

interface prop {
    date: String;
    title: String;
}

const NewsBannerInfo: FC<prop>  = ({date, title}) => {
    return (
        <div className='absolute bottom-5 left-5 w-3/6'>
            <h2 className={`bg-red-500 text-slate-200 my-3 px-2 w-fit`}>{date}</h2>
            <h2 className='text-slate-200 font-bold text-left'>{title}</h2>
        </div>
    );
};

export default NewsBannerInfo;