import image from "../../images/picture21x.png"
import {DIV, IMG} from "./Image.styled";


const Image = () => (
    <DIV>
        <IMG src={image} alt="Question" />
    </DIV>
);

export {Image};