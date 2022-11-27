import api from "../../utils/api";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { PetHomeHeader, PetContainer, PetCard } from "./HomeStyles";

function Home() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    api.get("/pets").then((response) => {
      setPets(response.data.pets);
    });
  }, []);

  return (
    <>
      <PetHomeHeader>
        <h1>Faça um novo amigo!</h1>
        <p>Veja os detalhes de cada um e conheça o tutor deles</p>
      </PetHomeHeader>

      <PetContainer>
        {pets.length > 0 &&
          pets.map((pet) => (
            <PetCard key={pet._id}>

              <div
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_API}/images/pets/${pet.images[0]})`,
                }}
              ></div>

              <div>
                <h3>{pet.name}</h3>

                <section className="details">
                  <p>
                    <span>Peso:</span> {pet.weight}kg
                  </p>

                  <p>
                    <span>Idade:</span> {pet.age} anos
                  </p>
                </section>

                {pet.available ? (
                  <Link to={`/pet/${pet._id}`}>Mais detalhes</Link>
                ) : (
                  <p className="adopted_text">Adotado!</p>
                )}
              </div>
            </PetCard>
          ))}
        {pets.length === 0 && (
          <p>Não há pets cadastrados ou disponíveis para adoção no momento!</p>
        )}
      </PetContainer>
    </>
  );
}

export default Home;
