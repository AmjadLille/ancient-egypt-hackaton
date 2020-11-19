import React from "react";
import styled from "styled-components";

const LogoStyled = styled.img`
  padding-bottom: 0px;
  width: 300px;
`;

const HomePage = () => {
  return <LogoStyled src="/images/welcom.jpg" alt="ancientegypt" />;
};
export default HomePage;
