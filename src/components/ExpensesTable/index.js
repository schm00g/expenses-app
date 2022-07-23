/* eslint-disable camelcase */
import React from 'react'; 
import { Table, TableData, TableRow, Tag } from './styles';

export default function ExpensesTable({data}) {
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
                        <TableData>{Math.abs(amount.value)} {amount.currency_iso}</TableData>
                        <TableData>{description}</TableData>
                        <TableData><Tag>{category_title}</Tag></TableData>
                    </TableRow>
                ))}
            </tbody>
            <tfoot><tr><td>Your 10 smallest expenses</td></tr></tfoot>
        </Table>
    )
}