import { CSSProperties, FC } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface baseProps {
  icon: IconProp,
  style:CSSProperties,
  text?: string,
}

type Props = baseProps;

const DescriptiveIcon: FC<Props> = ({icon,text,style}) => {
  return (
    <div>
      <FontAwesomeIcon icon={icon} style={style}/>
      { text ? <span>{text}</span> : null}
    </div>
  )
}

export default DescriptiveIcon;
