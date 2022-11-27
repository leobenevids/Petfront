import React from "react";

import { Card } from "./PetCardStyles";

const PetCard = ({ name, img, weight, age }) => {
  return (
    <Card>
      <img src={img} alt={name} />
      <div>
        <p>Peso: {weight}</p>
        <span>Idade: {age}</span>
      </div>
    </Card>
  );
};

export default PetCard;
