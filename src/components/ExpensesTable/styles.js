import styled from 'styled-components';

const Table = styled.table`
    font-family: monospace;
    border-collapse: collapse;
    text-align: left;
    width: 50%;
    margin: auto;
    @media (max-width: 900px) {
      width: 95%;
    }
`;

const TableData = styled.td`
    padding: 1% 0;
`;

const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #f4f4f4;
  }
`;

const Tag = styled.span`
  background-color: #e4e4ff;
  border-radius: 10px;
  padding: 3px 5px;
`;

export { Table, TableData, TableRow, Tag }