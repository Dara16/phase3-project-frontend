import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { BASE_URL } from '../../constraints/index.js';
import Occupant from '../Occupants/Occupant.js';

export default function ApartmentDetails() {
    const [apartment, setApartment] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        fetch(BASE_URL + "apartments/" + id)
            .then((res) => res.json())
            .then((json) => setApartment(json));
    }, [id]);


    return (
        <div>
            {apartment && (
                <>
                    <h3>Apartments</h3>
                    <p>Apartment Number: {apartment.number}</p>
                    <p>Style: {apartment.style}</p>
                    <p>Rent Amount: {apartment.rent}</p>
                    <h3>Occupants</h3>
                    {apartment.occupants.map((occupant) => (
                        <Occupant occupant={occupant} />
                    ))}
                </>
            )}
             
        </div>
    
    );
}