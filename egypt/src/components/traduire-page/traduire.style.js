import styled from "styled-components";

export const Container = styled.div`
  background-image: url("/images/hero.jpg");
  width: 100%;
  min-height: 100vh;
  max-height: 150vh;
  background-size: cover;
  form {
    margin: 6vh auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
  }
`;

export const Title = styled.div`
  text-align: center;
  color: white;
  font-size: 70px;
  padding: 100px;
  padding-left: 25vh;
`;

export const Label = styled.p`
  text-align: center;
  font-size: 40px;
  width: 100%;
  padding-top: 8vh;
  color: white;
`;

export const Text = styled.input`
  transition: all 0.5s ease;
  border: 3px solid black;
  width: 20vw;
  height: 12vh;
  overflow-x: hidden;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bolder;

  background-color: rgba(255, 255, 255, 0.4);
  &:focus {
    outline: none;
  }

  &:hover {
    color: #001f3f;
    background-color: #fff;
  }
  ::placeholder {
    color: white;
    opacity: 0.6;
  }
`;

export const Result = styled.div`
  border: 5px solid black;
  width: 30%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 5vh auto;
  min-height: 100px;
  background-color: rgba(0, 0, 0, 0.4);
  img {
    margin: 5px 0;
    width: 100px;
    height: 90px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    width: 220px;
  }
`;
export const Trad = styled.div``;
