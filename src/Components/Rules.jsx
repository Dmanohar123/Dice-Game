
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
         <h2>How to play dice game</h2>
        <div className='text'>
        <p>Select on any number</p>
        <p>Click on any number</p>
        <p>
            After click on dice if u selected number is equal to dice number you will get same points as dice{" "}
        </p>
        <p>If you get wrong guess then 2 points will be deducted</p>
        </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
max-width: 700px;
margin:0 auto;
background-color:#fbf1f1;
padding:10px;
margin-top:40px;

.h2{
    font-size:24px;
    font-weight:blod;
}

.text{
    margin-top:24px;
}
`;