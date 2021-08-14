import React from 'react';

export default function Apartment({ apartment }) {
    return (
        <div className="card">
            <p>Number: {apartment.number}</p>
            <p>Style: {apartment.style}</p>
            <p>Rent Amount: {apartment.rent}</p>
        </div>
    );
}