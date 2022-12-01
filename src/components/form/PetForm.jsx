import { useState } from "react";

import {
  FormContainer,
  PreviewPetImages,
} from "../../components/form/FormStyles";

import Input from "./Input";
import Select from "./Select";

function PetForm({ handleSubmit, petData, btnText }) {
  const [pet, setPet] = useState(petData || {});
  const [preview, setPreview] = useState([]);
  const species = ["Cão", "Gato"];

  function onFileChange(e) {
    console.log(Array.from(e.target.files));
    setPreview(Array.from(e.target.files));
    setPet({ ...pet, images: [...e.target.files] });
  }

  function handleChange(e) {
    setPet({ ...pet, [e.target.name]: e.target.value });
  }

  function handleSpecies(e) {
    setPet({
      ...pet,
      species: e.target.options[e.target.selectedIndex].text,
    });
  }

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(pet);
  };

  return (
    <FormContainer onSubmit={submit}>
      <PreviewPetImages>
        {preview.length > 0
          ? preview.map((image, index) => (
              <img
                src={URL.createObjectURL(image)}
                alt={pet.name}
                key={`${pet.name}+${index}`}
              />
            ))
          : pet.images &&
            pet.images.map((image, index) => (
              <img
                src={`${process.env.REACT_APP_API}/images/pets/${image}`}
                alt={pet.name}
                key={`${pet.name}+${index}`}
              />
            ))}
      </PreviewPetImages>

      <Input
        text="Imagens do Pet"
        type="file"
        name="images"
        handleOnChange={onFileChange}
        multiple={true}
      />

      <Input
        text="Nome do Pet"
        type="text"
        name="name"
        placeholder="Digite o nome"
        handleOnChange={handleChange}
        value={pet.name || ""}
      />

      <Input
        text="Descrição"
        type="text"
        name="description"
        placeholder="Uma breve descrição"
        handleOnChange={handleChange}
        value={pet.description || ""}
      />

      <Input
        text="Idade do Pet"
        type="number"
        name="age"
        placeholder="Digite a idade"
        handleOnChange={handleChange}
        value={pet.age || ""}
      />

      <Input
        text="Peso do Pet"
        type="number"
        name="weight"
        placeholder="Digite o peso aproximado"
        value={pet.weight || ""}
        handleOnChange={handleChange}
      />

      <Select
        name="species"
        text="Selecione a espécie"
        options={species}
        handleOnChange={handleSpecies}
        value={pet.species || ""}
      />

      <input type="submit" value={btnText} />
    </FormContainer>
  );
}

export default PetForm;
