import {FC} from 'react'

interface Props {
  main: string;
}

const MainText: FC<Props> = ({ main }) => {
  return (
    <h1 className="font-sans font-semibold">{main}</h1>
  );
};

export default MainText;






