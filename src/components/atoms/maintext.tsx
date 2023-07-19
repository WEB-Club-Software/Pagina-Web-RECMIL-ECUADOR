import React from 'react';

interface Props {
  main: string;
}

const MainText: React.FC<Props> = ({ main }) => {
  return (
    <h1 className="font-sans font-semibold">{main}</h1>
  );
};

export default MainText;






