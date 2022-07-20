import React, { useEffect, useState } from 'react';

function App() {
	const [expenses, setExpenses] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`http://www.mocky.io/v2/5c62e7c33000004a00019b05`)
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						`This is an HTTP error: The status is ${response.status}`
					);
				}
				return response.json();
			})
			.then(({ transactions }) => setExpenses(transactions))
			.catch((error) => {
				console.error(error.message);
			});
	}, []);

	useEffect(() => {
		setLoading(false);
		console.log(expenses);
	}, [expenses]);

	return (
		<div>
			<h1>Expenses App</h1>
			{expenses &&
				!loading &&
				expenses.map(({ id, date, amount, description }) => (
					<pre key={id}>
						{date} {amount.value} {amount.currency_iso} {description}
					</pre>
				))}
		</div>
	);
}

export default App;
