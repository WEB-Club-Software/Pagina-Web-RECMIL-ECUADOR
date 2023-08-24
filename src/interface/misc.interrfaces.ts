import Image, { StaticImageData } from 'next/image';

export type SizeProps =
  | { size: number; width?: never; height?: never }
  | { size?: never; width: number; height: number }
  | { size?: never; width?: never; height?: never };

  export interface MiObject {
    src: string | StaticImageData;
    date: string;
    title: string;
  }