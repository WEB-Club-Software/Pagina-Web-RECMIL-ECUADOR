import ImageContainer from "../atoms/ImagenContainer";
import Recmil from "/public/images/Recmil.jpeg";

const RecmilLogo = () => {
  return (
    <div className="flex  items-center gap-7">
      <ImageContainer
        src={Recmil}
        alt="Logo"
        width={80}
        height={80}
        size={80}
      />
      <span className="text-gray-500 text-4xl font-bold">Recmil</span>
    </div>
  );
};
export default RecmilLogo;
