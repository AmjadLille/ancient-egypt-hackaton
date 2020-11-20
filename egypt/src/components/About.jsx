import React from "react";
import styled from "styled-components";

const Text = styled.p`
  color: #ffffff;
  font-size: 36px;
  width: 40%;
  background-color: rgba(0, 0, 0, 0.6);
  text-align: center;
  padding: 40px;
  margin-left: 40vw;
`;
const Container = styled.div`
  background-image: url("/images/about.jpg");
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const About = () => {
  return (
    <Container>
      <Text style={{ fontFamily: "font-family: 'Prata', serif" }}>Nous sommes l'office du tourisme égyptien composé de 5 serviteurs nubiens mandaté par notre empereur khéops afin de de promouvoir la destination touristique auprès de tous nos visiteurs qu'ils soient nomades, réfugiés ou caravaniers. Cela se traduit par une mise en valeur de l’ensemble de ses ressources touristiques et culturelles de l'empire : patrimoine historique, patrimoine "Vert", patrimoine immatériel.</Text>
    </Container>
  );
};

export default About;
