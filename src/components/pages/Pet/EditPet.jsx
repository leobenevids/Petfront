import api from "../../../utils/api";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import PetForm from "../../form/PetForm";

import { AddPetHeader } from "./AddPetStyles";

/* hooks */
import useFlashMessage from "../../../hooks/useFlashMessage";

function EditPet() {
  const [pet, setPet] = useState({});
  const [token] = useState(localStorage.getItem("token") || "");
  const { id } = useParams();
  const { setFlashMessage } = useFlashMessage();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/pets/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setPet(response.data.pet);
      });
  }, [token, id]);

  async function updatePet(pet) {
    let msgType = "success";

    const formData = new FormData();

    const petFormData = await Object.keys(pet).forEach((key) => {
      if (key === "images") {
        for (let i = 0; i < pet[key].length; i++) {
          formData.append(`images`, pet[key][i]);
        }
      } else {
        formData.append(key, pet[key]);
      }
    });

    formData.append("pet", petFormData);

    const data = await api
      .patch(`pets/${pet._id}`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        msgType = "error";
        return err.response.data;
      });

    setFlashMessage(data.message, msgType);
    navigate(`/pet/${id}`)
  }

  return (
    <section>
      <AddPetHeader>
        <h1>Editando as informações do {pet.name}!</h1>
        <p>Depois da edição os dados serão atualizados no sistema</p>
      </AddPetHeader>
      {pet.name && (
        <PetForm handleSubmit={updatePet} petData={pet} btnText="Editar" />
      )}
    </section>
  );
}

export default EditPet;
