import ImageContainer from "@/components/atoms/ImagenContainer";
import Recmil from "/public/icons/Recmil.svg";
import MainText from "@/components/atoms/maintext";
import NextToButton from "@/components/atoms/NextToButton";
import Accordion from "@/components/molecules/Accordion";
import SquareComponent from "@/components/atoms/SquareComponent";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
import DescriptiveIcon from "@/components/atoms/descriptiveIcon";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import Organigrama from "/public/images/OrganigramaFondo.png"
import GoBackButton from "@/components/atoms/GoBackButton";

const Page = () => {
  const text = "Descubre la sabiduría divina en cada parábola y permite que la esperanza guíe tu camino hacia la plenitud espiritual."
  const subText = "Conoce nuestra organización. Descubre lo que hacemos y cómo queremos hacer del mundo un lugar mejor."
  const historia = "La voluntad de Dios es perfecta y sabemos que los planes del Creador están siempre por encima de cualquier idea o intención humana, su voluntad Divina obra siempre en nuestro beneficio, por tanto, es imprescindible escuchar la voz de Dios y escuchando, saber su voluntad y su agrado. Hemos sido creados a su imagen y semejanza, con talentos y dones para que sean aplicados con sabiduría en el cuerpo de Cristo como guía en nuestras acciones durante nuestra vida. El conocimiento acerca de las metodologías de organización y administración no son nuevas en el mundo, la Palabra de Dios habla desde Moisés, cómo estos conocimientos de la administración ayudaron al gobierno del pueblo hebreo y más todavía, con la venida de nuestro señor Jesucristo, como ejecutor del Plan de Salvación, nos lleva a “escuchar la voz de Dios”, mediante un ejercicio de planificación estratégica. Hemos emprendido el camino para cumplir con un cometido que nuestro salvador nos ha entregado, en donde somos instrumentos de su gracia, esa responsabilidad hace que atendamos a su voz para conocer la ruta que habremos de seguir, con una metodología que su Divina Gracia nos ha permitido conocer, con los dones y talentos que nos ha concedido y con la intención de cumplir con su voluntad santa y perfecta. Se incentivó a realizar un trabajo participativo, para que todos los miembros fundadores de la Corporación Red Cristiana Militar, estén conscientes del camino que emprenderemos, la participación e integración de cada miembro de la Corporación Recmil, se ha hecho en presencia de Dios, en comunión con Él, en oración, porque de lo contrario no podríamos escuchar su voz. Se ha definido la misión que deberemos cumplir con todo entusiasmo, una visión de futuro, que con el “ñeque” característico de un militar podremos lograrlo, basados en principios fundamentales que cimentan nuestra corporación y valores que cada miembro abanderará en su vida diaria. Todo lo anteriormente expuesto se ha realizado iniciando con el análisis y diagnóstico institucional, considerando las fortalezas, debilidades, oportunidades y amenazas encontradas en el ámbito externo las primeras y en el externo las últimas. Del análisis realizado se ha logrado diseñar estrategias, que más adelante, siendo debidamente organizadas, conformarán el direccionamiento estratégico, que será el camino para llegar a la visión trazada. Es momento de unir a quienes forman parte de la corporación, para que juntos y unánimes elevemos nuestra oración a Dios, para pedirle nos conceda la fe, la esperanza y  el amor para cumplir el cometido que se nos ha encomendado; que su provisión sea oportuna y que su gracia nunca nos abandone, confiados todos que estaremos siempre en su presencia y bajo su protección."
  const mision = "Somos seguidores de Jesucristo que servimos a la familia militar en su desarrollo espiritual y personal, mediante actividades de voluntariado, apoyo social y motivacional, para mejorar su calidad de vida con valores y principios auténticos."
  const vision = "La corporación Red Cristiana Militar en el 2027 es reconocida como una organización de apoyo importante para la Fuerza Pública ecuatoriana en el desarrollo de su personal y sus familias, cubre todos los ambientes geográficos en donde se desarrollen sus actividades profesionales, utiliza tecnología avanzada con talento humano certificado y capacitado en técnicas y métodos de educación y formación cristianas."

  return (
    <>
      <section className="flex flex-col gap-5 justify-center items-center md:gap-0 md:flex-row md:justify-around md:items-center h-screen" id="main">
        <ImageContainer animation={"rounded-full slow-spin"} src={Recmil} alt={"Logo"} size={500} />
        <div className=" w-screen p-2 md:p-0 md:w-3/6 flex  flex-col gap-5 md:gap-10  items-center">
          <MainText main={text} subMain={subText} />
          <NextToButton text={"Conocer Mas"} nextPage={"#historia"} />
        </div>
      </section>
      <section className="h-screen mb-24 pt-12" id="historia">
        <DescriptiveIcon text="Historia" icon={faLandmark} />
        <SquareComponent parrafo={historia} className="m-auto w-4/5 h-5/6" />
        <div className="flex justify-end py-10 pr-14 gap-4">
          <GoBackButton text={"Go Back"} previusPage={"#main"} />
          <NextToButton text={"Next to"} nextPage={"#organigrama"} />
        </div>
      </section>

      <section className="h-screen mb-24 pt-12" id="organigrama">
        <DescriptiveIcon text="Organigrama" icon={faBuilding} />
        <SquareComponent dir={Organigrama} className="w-3/4 h-5/6 m-auto" />
        <div className="flex justify-end py-10 pr-14 gap-4">
          <GoBackButton text={"Go Back"} previusPage={"#historia"} />
          <NextToButton text={"Next to"} nextPage={"#mision"} />
        </div>
      </section>

      <section className="h-screen flex flex-col items-center pt-1 2" id="mision">
        <div className="text-3xl w-full text-center font-bold">¿A Donde Vamos? </div>
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