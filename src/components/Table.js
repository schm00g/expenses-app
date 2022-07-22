import React from 'react';

function Table({data}) {
    return (
        data.map(({ id, date, amount, description }) => (
            <pre key={id}>
                {date} {amount.value} {amount.currency_iso} {description}
            </pre>
        ))
    )
}

export default Table