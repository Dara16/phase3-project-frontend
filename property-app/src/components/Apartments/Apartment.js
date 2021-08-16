import React from 'react';
import { Link } from "react-router-dom";

export default function Apartment({ apartment }) {
    return (
        <div className="card">
            
            <Link to={`/apartments/${apartment.id}`}>
                <p>Number {apartment.number}</p>
            </Link>
                <p>Style: {apartment.style}</p>
        </div>
    );
}