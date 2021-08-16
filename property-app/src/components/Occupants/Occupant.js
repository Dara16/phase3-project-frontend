import React, { useState } from 'react';
import { BASE_URL } from '../../constraints';

export default function Occupant({ occupant }) {
    const [occupants, setOccupants] = useState(null)
    function deleteOccupant(occupant) {
        fetch(BASE_URL + "occupants/" + occupant.id, {
            method: "DELETE",
        });
        const newOccupants = occupants.filter((occ) => occ.id !== occupant.id);
        setOccupants(newOccupants)
    }

    return (
        <>
            <div className="occupant-list">
                    <p>Name: {occupant.name}</p>
                    <p>End of Lease: {occupant.lease_end}</p>
                    <div className="button">
                        <button onClick={() => deleteOccupant(occupant)}>Delete Occupant</button>
                        <button>Edit Occupant</button>
                    </div>
            </div>

        </>
    );
}