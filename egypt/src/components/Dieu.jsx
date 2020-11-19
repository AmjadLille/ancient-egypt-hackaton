import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 16px;
  line-height: 1.6;
  font-family: "Montserrat", "HelveticaNeue", "Helvetica Neue", sans-serif;
  color: #000;
  font-weight: 400;
  -webkit-text-size-adjust: 100%;
`;

const Title = styled.h1`
  color: #0d1a26;
  font-weight: 400;
`;

const StyledComponents = () => (
  <Container>
    <Title>
      Osiris était un roi sage qui étaitmarié à sa sœur, Isis. Lorsqu'il fut
      assassiné par leur frère Seth, elleusa de magie pour le ressusciter dans
      le but d’avoir de lui un fils.Celui s’appela Horus et il vint venger la
      mort de son père enassassinant son oncle. Horus est ensuite devenu le roi
      d'Égypte, tandisqu'Osiris est devenu le roi des morts et le juge des
      enfers. LesÉgyptiens le considéraient comme triomphant de la mort ; chaque
      pharaondeviendrait Osiris après sa mort alors que, de son vivant, il
      étaitl'incarnation d'Horus. Osiris était également le dieu de la
      végétationet était donc souvent peint la peau verte – le vert symbolisant
      alors lacroissance nouvelle et la renaissance.
    </Title>
  </Container>
);

export default StyledComponents;
