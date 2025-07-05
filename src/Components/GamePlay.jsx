import styled from "styled-components";
import RoleDice from "./RoleDice";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import { useState } from "react";
import { Button, OutlineButton } from "../Styled/Button";
import Rules from "./Rules";

const Gameplay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const rollDice = () => {
    if (!selectedNumber) {
      alert("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 6);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const reSetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>

      <RoleDice currentDice={currentDice} rollDice={rollDice} />

      <div className="btns">
        <OutlineButton onClick={reSetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules(true)}>Show Rules</Button>
      </div>

      {showRules && (
        <>
          <Overlay onClick={() => setShowRules(false)} />
          <Modal>
            <Rules />
            <Button onClick={() => setShowRules(false)}>Close</Button>
          </Modal>
        </>
      )}
    </MainContainer>
  );
};

export default Gameplay;

// Styled Components
const MainContainer = styled.main`
  padding-top: 40px;

  .top_section {
    display: flex;
    gap: 20px;
    justify-content: space-around;
    align-items: end;
  }

  .btns {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90%;
  max-width: 400px;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;
