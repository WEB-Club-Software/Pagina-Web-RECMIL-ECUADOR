import { FC } from 'react'

interface Props {
  main: string;
  subMain: string;
}
const MainText: FC<Props> = ({ main, subMain }) => {

  return (
    <section className='flex flex-col gap-6 md:gap-12 items-center  md:justify-start'>
      <h1 className="text-gray-900 font-sans font-semibold text-xl sm:text-4xl w-4/5 md:w-auto ">{main}</h1>
      <h2 className='w-72 max-sm:text-base text-gray-900 '>{subMain}</h2>
    </section>
  );
};

export default MainText;






