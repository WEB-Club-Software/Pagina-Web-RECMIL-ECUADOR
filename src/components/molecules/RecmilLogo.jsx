import ImageContainer from "../atoms/ImagenContainer";
const RecmilLogo = () => {
  return (
    <div className="flex  items-center">
      <ImageContainer
        src={".../public/images/Recmil.jpeg"}
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
