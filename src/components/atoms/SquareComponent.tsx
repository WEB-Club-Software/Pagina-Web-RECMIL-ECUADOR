import { FC } from "react";
import ImageContainer from "@/components/atoms/ImagenContainer";
interface prop {
    parrafo?: string
    className?: string
    dir?: any;
}

const SquareComponent: FC<prop> = ({ parrafo, className, dir }) => {
    return (
        <div className={`${className}  rounded-lg bg-squareColor flex justify-center p-14`}>
            {parrafo ? <p className="text-black text-xs md:text-sm 2xl:text-xl">{parrafo}</p> : <ImageContainer src={dir} alt="Organigrama" size={600} />}
        </div>
    );
};

export default SquareComponent;