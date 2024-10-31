import React from 'react';
import styled, {createGlobalStyle} from "styled-components";
import {motion} from "framer-motion";

const GlobalStyle = createGlobalStyle`
    body {
      background-color: #81ecec;
      width: 480px;
      margin: 0 auto;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    color: white;
`;

const Main = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 100px;
`;

const Box = styled(motion.div)`
    width: 120px;
    height: 200px;
    background-color: white;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    color: #81ecec;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    font-weight: bolder;
`;

const Circle = styled.div`
    background-color: white;
    opacity: 0.5;
    width: 15px;
    height: 15px;
    border-radius: 50px;
    margin: 10px;
`;

const Between = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 10px;
    margin-left: 10px;
`;

const Button = styled(motion.button)`
    margin-top: 100px;
    width: 100px;
    height: 100px;
    background-color: black;
    opacity: 0.3;
    border-radius: 50px;
    color: white;
    font-size: 50px;
    font-weight: bolder;
`;

const Recode = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 80px;
`;

const Counter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center ;
    margin: 50px;
`;

const Name = styled.div`
    color: white;
    font-weight: bolder;
    font-size: 20px;
`;

const Score = styled.div`
    color: white;
    opacity: 0.7;
    font-weight: bolder;
    font-size: 20px;
`;


function App() {
  return (
      <>
          <GlobalStyle/>
          <Wrapper>
              <Title>Pomodoro</Title>
              <Main>
                  <Box>25</Box>
                  <Between>
                      <Circle />
                      <Circle />
                  </Between>
                  <Box>00</Box>
              </Main>
              <Button>{"||"}</Button>
              <Recode>
                  <Counter>
                      <Score>0/4</Score>
                      <Name>ROUND</Name>
                  </Counter>
                  <Counter>
                      <Score>0/12</Score>
                      <Name>GOAL</Name>
                  </Counter>
              </Recode>
          </Wrapper>
      </>
  );
}

export default App;
