import React, { useEffect, useState } from 'react';
import Table from './Table';

function Dashboard() {
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
				const ascendingExpensesAmount = [...expenses].sort(
					(a, b) => a.amount.value < b.amount.value
				);
				setTransactionData(ascendingExpensesAmount.slice(0, 10));
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
			<h1>Expenses App</h1>
			{loading && <pre>Fetching your data...</pre>}
			{error && <div>{`Problem fetching data - ${error}`}</div>}
			{transactionData &&
				!loading &&
				<Table data={transactionData}/>
				// transactionData.map(({ id, date, amount, description }) => (
				// 	<pre key={id}>
				// 		{date} {amount.value} {amount.currency_iso} {description}
				// 	</pre>
				// ))
			}
		</div>
	);
}

export default Dashboard;
