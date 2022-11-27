import catdog from "../../assets/img/catdog.svg";
import { ImageContainer } from "./CatDogStyles";

const CatDog = () => {
  return <ImageContainer src={catdog} alt="cat and dog" />;
};

export default CatDog;
