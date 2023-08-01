import Navigationbutton from "../atoms/Navigationbutton"

const NavigationElements = () => {
    return (
        <div className="flex gap-10">
            <Navigationbutton textNavigate="Home" href="/" />
            <Navigationbutton textNavigate="Eventos" href="/events" />
            <Navigationbutton textNavigate="Noticias" href="/news" />
            <Navigationbutton textNavigate="Galeria" href="/gallery" />
        </div>
    )
}

export default NavigationElements