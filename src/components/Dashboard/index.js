import React, { useEffect, useState } from 'react';
import ExpensesTable from '../ExpensesTable/index';
import { Title, Subtitle, Loading } from './styles'

export function ascendingExpensesAmount(expenses){
	return expenses.sort(
		(a, b) => Math.abs(a.amount.value) - Math.abs(b.amount.value)
	)
};

export default function Dashboard() {
	const [transactionData, setTransactionData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch(
					`http://www.mocky.io/v2/5c62e7c33000004a00019b05`
				);
				if (!response.ok) {
					throw new Error(
						`This is an HTTP error: The status is ${response.status}`
					);
				}
				const { transactions } = await response.json();
				const expenses = transactions.filter(
					(transaction) => transaction.amount.value < 0
				);
				const tenSmallestTransactions = ascendingExpensesAmount(expenses).slice(0, 10);
				setTransactionData(tenSmallestTransactions);
				setError(null);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};
		getData();
	}, []);

	return (
		<div>
			<Title>Expenses App</Title>
			<Subtitle>Smallest Expenses</Subtitle>
			{loading && <Loading>Fetching your data...</Loading>}
			{error && <div>{`Problem fetching data - ${error}`}</div>}
			{transactionData &&
				!loading &&
				<ExpensesTable data={transactionData}/>
			}
		</div>
	);
}