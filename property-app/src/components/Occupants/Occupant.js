import React from 'react';


export default function Occupant({ occupant }) {
    return (
        <div className="card">
                <p>Name: {occupant.name}</p>
                <p>End of Lease: {occupant.lease_end}</p>
        </div>
    );
}