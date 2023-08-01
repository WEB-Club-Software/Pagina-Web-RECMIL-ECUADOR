import { CSSProperties, FC } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface baseProps {
  icon: IconProp,
  style?: CSSProperties,
  text?: string,
}

type Props = baseProps;

const DescriptiveIcon: FC<Props> = ({ icon, text, style = { color: "green", width: "30px" } }) => {
  return (
    <div className='flex gap-3 items-center'>
      <FontAwesomeIcon icon={icon} style={style} />
      {text ? <span className='text-4xl font-bold text-stone-800 '>{text}</span> : null}
    </div>
  )
}

export default DescriptiveIcon;
