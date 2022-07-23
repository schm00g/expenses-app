/* eslint-disable camelcase */
import React from 'react'; 
import { Table, TableData, TableRow, Tag } from './styles';

export default function ExpensesTable({data}) {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {data.map(({ id, date, amount, description, category_title }) => (
                    <TableRow key={id}>
                        <TableData>{description}</TableData>
                        <TableData>{Math.abs(amount.value)} {amount.currency_iso}</TableData>
                        <TableData>{date}</TableData>
                        <TableData><Tag>{category_title}</Tag></TableData>
                    </TableRow>
                ))}
            </tbody>
            <tfoot><tr><td>Your 10 smallest expenses</td></tr></tfoot>
        </Table>
    )
}