import styled from 'styled-components';

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <ImageWrapper>
        <img src="/images/dices.png" alt="dices" />
      </ImageWrapper>
      <Content>
        <Heading>Dice Game</Heading>
        <StyledButton onClick={toggle}>Play Now</StyledButton>
      </Content>
    </Container>
  );
};

export default StartGame;


const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
  }
`;

const ImageWrapper = styled.div`
  img {
    max-width: 100%;
    height: auto;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Heading = styled.h1`
  font-size: 80px;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 48px;
    white-space: normal;
  }
`;

const StyledButton = styled.button`
  background-color: #000;
  color: #fff;
  font-size: 18px;
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #333;
  }
`;
