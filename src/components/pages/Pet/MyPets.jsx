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

import ConfirmModal from "../../layout/ConfirmModal";

/* hooks */
import useFlashMessage from "../../../hooks/useFlashMessage";

function MyPets() {
  const [pets, setPets] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessage } = useFlashMessage();
  const [openModal, setOpenModal] = useState(false);

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
        const updatedPets = pets.filter((pet) => pet._id !== id);
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

    const data = await api({
      method: "patch",
      url: `/pets/conclude/${id}`,
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
        <h1>Pets Cadastrados</h1>
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
                      className="delete_btn"
                      onClick={() => {
                        setOpenModal(true);
                      }}
                    >
                      Excluir
                    </button>
                  </>
                ) : (
                  <p>
                    <b>{pet.name}</b> já encontrou uma nova família com{" "}
                    <b>{pet.adopter.name}</b>!
                  </p>
                )}
                {openModal && (
                  <ConfirmModal
                    isOpen={setOpenModal}
                    handleDelete={() => removePet(pet._id)}
                    message={`Deseja excluir o perfil de ${pet.name}?`}
                  />
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
