import api from "../../../utils/api";

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { PetDetailsContainer, PetImages } from "./PetDetailsStyles";

/* hooks */
import useFlashMessage from "../../../hooks/useFlashMessage";

function PetDetails() {
  const [pet, setPet] = useState({});
  const { id } = useParams();
  const { setFlashMessage } = useFlashMessage();
  const [token] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    api.get(`/pets/${id}`).then((response) => {
      setPet(response.data.pet);
    });
  }, [id]);

  async function schedule() {
    let msgType = "success";

    const data = await api({
      method: "patch",
      url: `pets/schedule/${pet._id}`,
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
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
  }

  return (
    <>
      {pet.name && (
        <PetDetailsContainer>
          <div>
            <h1>Olá, meu nome é {pet.name}!</h1>
            <p>
              Se tiver interesse, marque uma visita para me conhecer, eu
              adoraria!
            </p>
            <PetImages>
              {pet.images.map((image, index) => (
                <img
                  key={index}
                  src={`${process.env.REACT_APP_API}/images/pets/${image}`}
                  alt={pet.name}
                />
              ))}
            </PetImages>
            <section>
              <p></p>
              <p>
                Tenho
                <span className="bold"> {pet.age}</span> anos de idade e peso{" "}
                <span className="bold">{pet.weight}</span> kg
              </p>
              <p>
                <cite>"{pet.description}"</cite>
                <br />- diz <b>{pet.user.name}</b> , tutor(a) do {pet.name}
              </p>
            </section>
            {token ? (
              <button onClick={schedule}>Agendar uma visita</button>
            ) : (
              <p>
                Você precisa <Link to="/register">criar uma conta</Link> para
                agendar a visita.
              </p>
            )}
          </div>
        </PetDetailsContainer>
      )}
    </>
  );
}

export default PetDetails;
