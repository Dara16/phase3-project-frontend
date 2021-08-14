import React from 'react'
import { Link } from "react-router-dom";

export default function Tenement({tenement}) {
    return (
        <div className="tenement-list">
            <Link to={`/tenements/${tenement.id}`}>
                <h3>{tenement.name}</h3>
            </Link>
                <p>{tenement.address}</p>
            
        </div>
    )
}