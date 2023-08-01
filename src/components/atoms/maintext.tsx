import { FC } from 'react'

interface Props {
  main: string;
  subMain: string;
}

const MainText: FC<Props> = ({ main, subMain }) => {
  return (
    <section className='flex flex-col gap-12 justify-start'>
      <h1 className="text-gray-900 font-sans font-semibold text-4xl w-auto ">{main}</h1>
      <h2 className='w-72 text-gray-500'>{subMain}</h2>
    </section>
  );
};

export default MainText;






