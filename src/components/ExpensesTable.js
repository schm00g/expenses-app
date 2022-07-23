/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components'; 

const Table = styled.table`
    font-family: monospace;
    border-collapse: collapse;
    text-align: left;
    width: 50%;
    margin: auto;
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

function ExpensesTable({data}) {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Description</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {data.map(({ id, date, amount, description, category_title }) => (
                    <TableRow key={id}>
                        <TableData>{date}</TableData>
                        <TableData>{amount.value} {amount.currency_iso}</TableData>
                        <TableData>{description}</TableData>
                        <TableData><Tag>{category_title}</Tag></TableData>
                    </TableRow>
                ))}
            </tbody>
            <tfoot><tr><td>Your 10 smallest expenses</td></tr></tfoot>
        </Table>
    )
}

export default ExpensesTable