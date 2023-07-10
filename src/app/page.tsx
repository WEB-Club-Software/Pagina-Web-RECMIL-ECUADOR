import { CSSProperties } from "react";
import DescriptiveIcon from "../components/atoms/DescriptiveIcon";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Page() {
  const cssFig:CSSProperties={
    color: 'rgb(64,96,150)',
    width: "50px"
  }
  return <h1>
    Hello, Next.js!
    <DescriptiveIcon text="Facebook" icon={faFacebook} style={cssFig}/>
    </h1>
}