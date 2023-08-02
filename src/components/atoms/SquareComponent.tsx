import { FC } from "react";
import ImageContainer from "@/components/atoms/ImagenContainer";
interface prop {
    parrafo?: string
    className?: string
    dir?: any;
}

const SquareComponent: FC<prop> = ({ parrafo, className, dir }) => {
    return (
        <div className={`${className}  rounded-lg bg-gray-200 flex justify-center p-14`}>
            {parrafo ? <p className="text-black text-sm">{parrafo}</p> : <ImageContainer src={dir} alt="Organigrama" size={600} />}

        </div>
    );
};

export default SquareComponent;