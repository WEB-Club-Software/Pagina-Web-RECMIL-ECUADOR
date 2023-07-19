import ImageContainer from "@/components/atoms/ImageContainer"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faLandmark } from "@fortawesome/free-solid-svg-icons"

export default function Page() {
  
  const style={
    color:'red',
    width:'50px'
  }

  const opc: string[]=['home','about us']
  return <ImageContainer src={"https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg"} alt={"imageng"} size ={500} />
}