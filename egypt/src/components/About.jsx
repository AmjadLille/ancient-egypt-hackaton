import React from "react";
import styled from "styled-components";

const Text = styled.p`
  color: white;
`;
const Title = styled.h2`
  color: white;
`;

function About() {
  return (
    <div>
      <Text>
        Nous sommes l'office du tourisme égyptien composé de 5 serviteurs
        nubiens mandaté par notre empereur khéops afin de de promouvoir la
        destination touristique auprès de tous nos visiteurs qu'ils soient
        nomades, réfugiés ou caravaniers. Cela se traduit par une mise en valeur
        de l’ensemble de ses ressources touristiques et culturelles de l'empire
        : patrimoine historique, patrimoine "Vert", patrimoine immatériel.
      </Text>
      <Title>Actualités événements</Title>
    </div>
  );
}

export default About;
