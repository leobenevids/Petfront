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
    <section>
      <PetHomeHeader>
        <h1>Adote um Pet</h1>
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
              <h3>{pet.name}</h3>
              <p>
                <span className="bold">Peso:</span> {pet.weight}kg
              </p>
              {pet.available ? (
                <Link to={`/pet/${pet._id}`}>Mais detalhes</Link>
              ) : (
                <p className="adopted_text">Adotado!</p>
              )}
            </PetCard>
          ))}
        {pets.length === 0 && (
          <p>Não há pets cadastrados ou disponíveis para adoção no momento!</p>
        )}
      </PetContainer>
    </section>
  );
}

export default Home;
