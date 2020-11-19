import styled from "styled-components";

export const Container = styled.div`
  background-image: url("/images/egypt.jpg");
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  form {
    margin: 6vh auto;
    display: flex;
    flex-direction: column;
    width: 20%;
  }
`;

export const Title = styled.div`
  text-align: center;
  color: white;
  font-size: 70px;
  padding: 100px;
`;

export const Label = styled.p`
  text-align: center;
  font-size: 40px;
  width: 100%;
  padding-top: 8vh;
  color: black;
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
  left: 30%;
  top: 200px;
  background: transparent;
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

export const Button = styled.button`
  width: 20vw;
  height: 30px;
  margin-top: 10px;
  transition: all 0.5s ease;
  color: black;
  border: 3px solid black;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  text-align: center;

  font-size: 14px;
  background-color: transparent;
  padding: 10px;
  outline: none;
  border-radius: 25px;

  &:hover {
    background-color: #fff;
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
  background-color: rgba(0, 0, 0, 0.4);
  img {
    width: 220px;
  }
`;
export const Trad = styled.div``;
