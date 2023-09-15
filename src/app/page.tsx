import ImageContainer from "@/components/atoms/ImagenContainer";
import Recmil from "/public/icons/Recmil.svg";
import Image from "next/image";
import MainText from "@/components/atoms/maintext";
import NextToButton from "@/components/atoms/NextToButton";
import Accordion from "@/components/molecules/Accordion";
import SquareComponent from "@/components/atoms/SquareComponent";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
import DescriptiveIcon from "@/components/atoms/descriptiveIcon";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import Organigrama from "/public/images/OrganigramaFondo.png"
import GoBackButton from "@/components/atoms/GoBackButton";
import { text, subText, historia, mision, vision } from '@/lib/InfoIndex'
import Fondo from '../../public/images/backgroud.png'

const Page = () => {
  return (
    <>
      <section className={`relative  bg-gradient-to-b from-yellow-300 via-blue-300  to-red-400 w-full`} id="main">
        <Image src={Fondo} alt="img" className="h-full w-full object-cover absolute top-0 mix-blend-overlay" />
        <div className={"p-0 flex flex-col gap-5 justify-center items-center md:gap-0 md:flex-row md:justify-around md:items-center mt-0 sm:mt-32 md:mt-0 h-screen"}>
          <ImageContainer animation={"rounded-full slow-spin max-md:w-60 "} src={Recmil} alt={"Logo"} size={500} />
          <div className=" z-10 w-screen p-2 md:p-0 md:w-3/6 flex  flex-col gap-5 md:gap-10  items-center">
            <MainText main={text} subMain={subText} />
            <NextToButton text={"Conocer Mas"} nextPage={"#historia"} />
          </div>
        </div>

      </section>
      <DescriptiveIcon text="Historia" icon={faLandmark} />
      <section className="flex items-center justify-center flex-col h-screen mb-16 pt-12" id="historia">
        <SquareComponent parrafo={historia} className="m-auto w-11/12 h-5/6" />
        <div className="flex justify-end py-10 pr-14 gap-4">
          <GoBackButton text={"Go Back"} previusPage={"#main"} />
          <NextToButton text={"Next to"} nextPage={"#organigrama"} />
        </div>
      </section>

      <DescriptiveIcon text="Organigrama" icon={faBuilding} />
      <section className="flex items-center justify-center flex-col h-screen mb-36 pt-12" id="organigrama">
        <SquareComponent dir={Organigrama} className="w-11/12 h-5/6 m-auto" />
        <div className="flex justify-end py-10 pr-14 gap-4">
          <GoBackButton text={"Go Back"} previusPage={"#historia"} />
          <NextToButton text={"Next to"} nextPage={"#mision"} />
        </div>
      </section>

      <section className="h-screen flex flex-col items-center pt-1 mb-8" id="mision">
        <div className="text-3xl w-4/5 text-center font-bold border-b-4 border-black ">¿A Donde Vamos? </div>
        <div className="flex flex-col md:flex-row  h-full items-center justify-around">
          <div className="flex  flex-col items-center gap-11">
            <span className="font-bold">Mision</span>
            <SquareComponent parrafo={mision} className="w-4/5 " />
          </div>
          <div className="flex  flex-col items-center gap-11">
            <span className="font-bold">Vision</span>
            <SquareComponent parrafo={vision} className="w-4/5 " />
          </div>
        </div>
        <div className="place-self-end pr-16 ">
          <GoBackButton text={"Go Back"} previusPage={"#organigrama"} />
        </div>
      </section>
      <section id="preguntas">
        <Accordion />
      </section>
    </>
  )
}
export default Page;