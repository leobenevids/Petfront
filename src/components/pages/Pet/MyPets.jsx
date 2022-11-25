import api from "../../../utils/api";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  PetListHeader,
  PetListContainer,
  PetListRow,
  Actions,
} from "./DashboardStyles";

import RoundedImage from "../../layout/RoundedImage";

/* hooks */
import useFlashMessage from "../../../hooks/useFlashMessage";

function MyPets() {
  const [pets, setPets] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessage } = useFlashMessage();

  useEffect(() => {
    api
      .get("/pets/mypets", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
        
      })
      .then((response) => {
        setPets(response.data.pets);
      });
  }, [token]);

  async function removePet(id) {
    let msgType = "success";

    const data = await api
      .delete(`/pets/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        const updatedPets = pets.filter((pet) => pet._id != id);
        setPets(updatedPets);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        msgType = "error";
        return err.response.data;
      });

    setFlashMessage(data.message, msgType);
  }

  async function concludeAdoption(id) {
    let msgType = "success";

    const data = await api
      .patch(`/pets/conclude/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        msgType = "error";
        return err.response.data;
      });

    setFlashMessage(data.message, msgType);
  }

  return (
    <section>
      <PetListHeader>
        <h1>Meus Pets Cadastrados</h1>
        <Link to="/pet/add">Cadastrar Pet</Link>
      </PetListHeader>
      <PetListContainer>
        {pets.length > 0 &&
          pets.map((pet) => (
            <PetListRow key={pet._id}>
              <RoundedImage
                src={`${process.env.REACT_APP_API}/images/pets/${pet.images[0]}`}
                alt={pet.name}
                width="px75"
              />
              <span className="bold">{pet.name}</span>
              <Actions>
                {pet.available ? (
                  <>
                    {pet.adopter && (
                      <button
                        className="conclude_btn"
                        onClick={() => {
                          concludeAdoption(pet._id);
                        }}
                      >
                        Concluir adoção
                      </button>
                    )}

                    <Link to={`/pet/edit/${pet._id}`}>Editar</Link>
                    <button
                      onClick={() => {
                        removePet(pet._id);
                      }}
                    >
                      Excluir
                    </button>
                  </>
                ) : (
                  <p>Pet já adotado</p>
                )}
              </Actions>
            </PetListRow>
          ))}
        {pets.length === 0 && <p>Ainda não há pets cadastrados!</p>}
      </PetListContainer>
    </section>
  );
}

export default MyPets;
