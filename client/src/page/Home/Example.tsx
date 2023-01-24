import React from "react";
import styled from "styled-components";

const ExampleTable = styled.table({
  marginTop: "5rem",
  marginLeft: "auto",
  marginRight: "auto",
  border: "2px solid #f4da98",
  width: "60%",
});

const TableRow = styled.tr({
  textAlign: "center",
  backgroundColor: "white",
});

const TableD = styled.td({
  textAlign: "center",
  border: "1px solid #ddd",
  padding: "5px 10px",
  color: "#373a3c",
  fontSize: ".9rem",
  lineHeight: "1.5",
});

const TableRowFirst = styled(TableD)`
  background-color: #621a32;
  width: 34%;
  color: white;
`;

const TableRowRest = styled(TableD)`
  background-color: #621a32;
  width: 22%;
  color: white;
`;

const TableDFirst = styled(TableD)`
  background-color: #87ceeb;
`;

const TableDThird = styled(TableD)`
  background-color: #fbb;
`;

const TableDFS = styled(TableD)`
  background-image: linear-gradient(165deg, #87ceeb 40%, #8e8 60%);
`;

const TableDST = styled(TableD)`
  background-image: linear-gradient(165deg, #8e8 40%, #fbb 60%);
`;

function Example() {
  return (
    <ExampleTable>
      <tbody>
        <TableRow>
          <TableRowFirst>국가</TableRowFirst>
          <TableRowRest>승</TableRowRest>
          <TableRowRest>무</TableRowRest>
          <TableRowRest>패</TableRowRest>
        </TableRow>
        <TableRow>
          <TableD>
            <strong>포르투갈</strong>
          </TableD>
          <TableDFirst>
            <div>
              <strong>9점</strong>
            </div>
            <div>(1위)</div>
          </TableDFirst>
          <TableDFirst>
            <div>
              <strong>7점</strong>
            </div>
            <div>(1위)</div>
          </TableDFirst>
          <TableDFS>
            <div>
              <strong>6점</strong>
            </div>
            <div>(1~2위)</div>
          </TableDFS>
        </TableRow>
        <TableRow>
          <TableD>
            <strong>가나</strong>
          </TableD>
          <TableDFS>
            <div>
              <strong>6점</strong>
            </div>
            <div>(1~2위)</div>
          </TableDFS>
          <TableDST>
            <div>
              <strong>4점</strong>
            </div>
            <div>(2~3위)</div>
          </TableDST>
          <TableDThird>
            <div>
              <strong>3점</strong>
            </div>
            <div>(3~4위)</div>
          </TableDThird>
        </TableRow>
        <TableRow>
          <TableD>
            <strong>대한민국</strong>
          </TableD>
          <TableDST>
            <div>
              <strong>4점</strong>
            </div>
            <div>(2~3위)</div>
          </TableDST>
          <TableDThird>
            <div>
              <strong>2점</strong>
            </div>
            <div>(3~4위)</div>
          </TableDThird>
          <TableDThird>
            <div>
              <strong>1점</strong>
            </div>
            <div>(3~4위)</div>
          </TableDThird>
        </TableRow>
        <TableRow>
          <TableD>
            <strong>우루과이</strong>
          </TableD>
          <TableDST>
            <div>
              <strong>4점</strong>
            </div>
            <div>(2~3위)</div>
          </TableDST>
          <TableDThird>
            <div>
              <strong>2점</strong>
            </div>
            <div>(3~4위)</div>
          </TableDThird>
          <TableDThird>
            <div>
              <strong>1점</strong>
            </div>
            <div>(3~4위)</div>
          </TableDThird>
        </TableRow>
      </tbody>
    </ExampleTable>
  );
}

export default Example;
