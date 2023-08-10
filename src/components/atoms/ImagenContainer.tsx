import { SizeProps } from '@/interface/misc.interrfaces';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { FC } from 'react'

interface baseProps {
    src: string | StaticImageData;
    alt: string;
    animation?: string;
    responsive?: string;
}

type Props = baseProps & SizeProps;

const ImageContainer: FC<Props> = ({ src, alt, width, height, size, animation, responsive }) => {
    return (
        <div>
            <Image priority={true} className={`${animation}`} src={src} alt={alt} width={width || size} height={height || size} />
        </div>
    );
};

export default ImageContainer;