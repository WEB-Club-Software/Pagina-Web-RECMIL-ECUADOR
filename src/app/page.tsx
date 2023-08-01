import ImageContainer from "@/components/atoms/ImagenContainer";
import Recmil from "/public/images/Recmil.jpeg";
import MainText from "@/components/atoms/maintext";
import NextToButton from "@/components/atoms/NextToButton";


const Page = () => {
  const text = "Descubre la sabiduría divina en cada parábola y permite que la esperanza guíe tu camino hacia la plenitud espiritual."
  const subText = "Conoce nuestra organización. Descubre lo que hacemos y cómo queremos hacer del mundo un lugar mejor."
  return (
    <>
      <section className="flex justify-around items-center">
        <ImageContainer src={Recmil} alt={"Logo"} size={500} />
        <div className="w-3/6 flex  flex-col gap-10 items-center">
          <MainText main={text} subMain={subText} />
          <NextToButton text={"Conocer Mas"} />
        </div>
      </section>
    </>
  )
}
export default Page;