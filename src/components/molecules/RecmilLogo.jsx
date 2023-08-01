import ImageContainer from "../atoms/ImagenContainer";
import Recmil from "/public/images/Recmil.jpeg"

const RecmilLogo = () => {
  return (
    <div className="flex  items-center">
      <ImageContainer
        src={Recmil}
        alt="Logo"
        width={80}
        height={80}
        size={80}
      />
      Recmil
    </div>
  );
};
export default RecmilLogo;
