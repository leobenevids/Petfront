import api from "../../../utils/api";

import { useState, useEffect } from "react";

import RoundedImage from "../../layout/RoundedImage";

import {
  Actions,
  Contacts,
  PetListContainer,
  PetListHeader,
  PetListRow,
} from "./DashboardStyles";

import {phoneMask} from '../../../utils/phoneMask'

function MyAdoptions() {
  const [pets, setPets] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    api
      .get("/pets/myadoptions", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setPets(response.data.pets);
      });
  }, [token]);

  return (
    <section>
      <PetListHeader>
        <h1>Pets Adotados</h1>
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
              <Contacts>
                {pet.available ? (
                  <>
                    <p>
                      <span className="bold">Ligue para:</span> {phoneMask(pet.user.phone)}
                    </p>
                    <p>
                      <span className="bold">Fale com:</span> {pet.user.name}
                    </p>
                  </>
                ) : (
                  <div></div>
                )}
              </Contacts>
              <Actions>
                {pet.available ? (
                  <p>Adoção em processo</p>
                ) : (
                  <p>
                    <b>{pet.name}</b> está feliz em fazer parte da sua família,{" "}
                    <b>{pet.adopter.name}</b>!
                  </p>
                )}
              </Actions>
            </PetListRow>
          ))}
        {pets.length === 0 && <p>Ainda não há pets adotados!</p>}
      </PetListContainer>
    </section>
  );
}

export default MyAdoptions;
