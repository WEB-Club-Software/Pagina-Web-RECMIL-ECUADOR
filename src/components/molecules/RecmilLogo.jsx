import ImageContainer from "../atoms/ImagenContainer";
import Recmil from "/public/icons/Recmil.svg";

const RecmilLogo = () => {
  return (
    <div className="flex  items-center gap-7">
      <ImageContainer
        src={Recmil}
        alt="Logo"
        size={80}
        animation="bg-white rounded-full"
      />
      <span className="text-gray-600 text-4xl font-bold">Recmil</span>
    </div>
  );
};
export default RecmilLogo;
