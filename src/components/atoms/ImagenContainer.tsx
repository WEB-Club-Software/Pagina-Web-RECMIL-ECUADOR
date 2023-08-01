import { SizeProps } from '@/interface/misc.interrfaces';
import Image from 'next/image';
import React from 'react';
import { FC } from 'react'

interface baseProps {
    src: string;
    alt: string;
}

type Props = baseProps & SizeProps;

const ImageContainer: FC<Props> = ({ src, alt, width, height, size }) => {
    return (
        <Image src={src} alt={alt} width={width || size} height={height || size} />
    );
};

export default ImageContainer;