import React from "react";
import styled from "styled-components";

const Page = styled.div`
  background-image: url("/images/tot.jpg");
  width: 100%;
  min-height: 100vh;
  background-size: cover;

  #container {
    color: white;
    text-transform: uppercase;
    font-size: 50px;
    font-weight: bold;
    padding-top: 200px;
    position: fixed;
    width: 100%;
    bottom: 45%;
    display: block;
    padding-left: 15%;
  }

  #flip {
    height: 80px;
    overflow: hidden;
  }

  #flip > div > div {
    color: #fff;
    padding: 4px 12px;
    height: 60px;
    margin-bottom: 30px;
    display: inline-block;
  }

  #flip div:first-child {
    animation: show 5s linear infinite;
  }

  #flip div div {
    background: #0d5836;
  }
  #flip div:first-child div {
    background: #4ec7f3;
  }
  #flip div:last-child div {
    background: #998f08;
  }

  @keyframes show {
    0% {
      margin-top: -270px;
    }
    5% {
      margin-top: -180px;
    }
    33% {
      margin-top: -180px;
    }
    38% {
      margin-top: -90px;
    }
    66% {
      margin-top: -90px;
    }
    71% {
      margin-top: 0px;
    }
    99% {
      margin-top: 0px;
    }
    100% {
      margin-top: -270px;
    }
  }
`;

const HomePage = () => {
  return (
    <Page>
      <div id="container">
        Welcom to
        <div id="flip">
          <div>
            <div>Mystery </div>
          </div>
          <div>
            <div>History</div>
          </div>
          <div>
            <div>Enjoyable</div>
          </div>
        </div>
        Ancient Egypt World
      </div>
    </Page>
  );
};
export default HomePage;
