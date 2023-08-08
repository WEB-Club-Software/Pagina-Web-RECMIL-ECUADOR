import Navigationbutton from "../atoms/Navigationbutton"
import Link from 'next/link'
const navElementos = [
    <a key={0} href="#main">Home</a>,
    <a key={1} href="#historia">Historia</a>,
    <a key={2} href="#organigrama">Organigrama</a>,
    <a key={3} href="#mision">Mision y vision</a>,
    <a key={4} href="#preguntas">Preguntas Frecuentes</a>
]

const NavigationElements = () => {
    return (
        <div className="flex gap-10">
            <Navigationbutton navigationOptions={navElementos} textNavigate="Home" href="/" />
            <Navigationbutton textNavigate="Eventos" href="/events" />
            <Navigationbutton textNavigate="Noticias" href="/news" />
            <Navigationbutton textNavigate="Galeria" href="/gallery" />
        </div>
    )
}

export default NavigationElements