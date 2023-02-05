import React, { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  margin: 5%;
`;

const CodeContainer = styled.div`
  width: 40%;
  background-color: white;
  border: 2px solid black;
  margin-left: 15%;
`;

const StyledTable = styled.table`
  border: 2px solid black;
  width: 40%;
  margin-right: 15%;
`;

const Styledtd = styled.td`
  border: 1px solid black;
  width: 50%;
`;

const Styledhead = styled.th`
  colspan: 3;
  border: 1px solid black;
  background-color: white;
`;

function DynamicExample() {
  const [number, setNumber] = useState(0);
  const [list, setlist] = useState([0]);

  const onIncrease = () => {
    const countArr = [...list];
    setNumber(number + 1);
    countArr.push(number);
    setlist(countArr);
  };

  const onDecrease = () => {
    const countArr = [...list];
    countArr.pop();
    setNumber(number - 1);
    setlist(countArr);
  };

  return (
    <>
      <StyledContainer>
        <StyledTable>
          <thead>
            <tr>
              {/* <Styledhead>예시</Styledhead>
              <Styledhead>예시</Styledhead> */}
              {list.map((num) => (
                <Styledhead key={num}>예시</Styledhead>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {list.map((num) => (
                <Styledtd key={num}>{num}</Styledtd>
              ))}
            </tr>
          </tbody>
        </StyledTable>
        <CodeContainer>코드 나오는 곳</CodeContainer>
      </StyledContainer>

      <h1>{number}</h1>
      <button type="button" onClick={onIncrease}>
        +1
      </button>
      <button type="button" onClick={onDecrease}>
        -1
      </button>
    </>
  );
}

export default DynamicExample;
