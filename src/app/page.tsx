import DescriptiveIcon from "@/components/atoms/DescriptiveIcon"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faLandmark } from "@fortawesome/free-solid-svg-icons"

export default function Page() {
  
  const style={
    color:'red',
    width:'50px'
  }

  const opc: string[]=['home','about us']
  return <h1>
    Hello, Next.js!
    <DescriptiveIcon icon={faLandmark}  style={style} text="Historia  "/>
   
    </h1>
}