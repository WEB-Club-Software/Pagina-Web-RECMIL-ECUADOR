import New from "@/components/molecules/New";
import { faRadio } from "@fortawesome/free-solid-svg-icons";
import DescriptiveIcon from "@/components/atoms/descriptiveIcon";
import eventoExample from "/public/images/eventoExample.png";
import NewBanner from "@/components/molecules/NewBanner";
import { MiObject } from "@/interface/misc.interrfaces";
import { useEffect } from "react";

export default function AboutPage() {

  const dataBanner: MiObject[] = [
    { "title": "El nuevo ingreso", "date": "Jan 22 de 2023", "src": eventoExample },
    { "title": "Debate entre participantes", "date": "Jan 23 de 2023", "src": eventoExample },
    { "title": "Juegos de habilidad", "date": "Jan 24 de 2023", "src": eventoExample },
    { "title": "Amenaza contro la vida", "date": "Jan 25 de 2023", "src": eventoExample },
    { "title": "Salto con cuerda", "date": "Jan 26 de 2023", "src": eventoExample },
    { "title": "Rayuela", "date": "Jan 27 de 2023", "src": eventoExample },
  ]

  const newsInfo = [
    { "id": 1, "title": "Titulo 1", "Date": "Jan 22 de 2023", "src": eventoExample, "url": "ya" },
    { "id": 2, "title": "Titulo 2", "Date": "Jan 23 de 2023", "src": eventoExample, "url": "ya" },
    { "id": 3, "title": "Titulo 3", "Date": "Jan 24 de 2023", "src": eventoExample, "url": "ya" },
    { "id": 4, "title": "Titulo 3", "Date": "Jan 24 de 2023", "src": eventoExample, "url": "ya" },
    { "id": 5, "title": "Titulo 3", "Date": "Jan 24 de 2023", "src": eventoExample, "url": "ya" },
    { "id": 6, "title": "Titulo 3", "Date": "Jan 24 de 2023", "src": eventoExample, "url": "ya" },
    { "id": 7, "title": "Titulo 3", "Date": "Jan 24 de 2023", "src": eventoExample, "url": "ya" },
    { "id": 8, "title": "Titulo 3", "Date": "Jan 24 de 2023", "src": eventoExample, "url": "ya" },
    { "id": 9, "title": "Titulo 3", "Date": "Jan 24 de 2023", "src": eventoExample, "url": "ya" },
  ]

  return (
    <>
      <DescriptiveIcon text="Noticias" icon={faRadio} />
      <div className="flex items-center justify-center mb-20">
        <NewBanner dataBanner={dataBanner} />
      </div>
      <div className="flex flex-wrap gap-8 justify-center items-center my-10 ">
        {
          newsInfo.map((news) => (
            <New key={news.id} src={news.src} title={news.title} date={news.Date} alt={"si"} url={news.url} size={300} />
          ))
        }
      </div>

    </>
  )
}
