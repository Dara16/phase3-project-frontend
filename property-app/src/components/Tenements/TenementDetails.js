import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { BASE_URL } from '../../constraints/index.js';
import Apartment from '../Apartments/Apartment.js';

export default function TenementDetails() {
    const [tenement, setTenement] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        fetch(BASE_URL + "tenements/" + id)
            .then((res) => res.json())
            .then((json) => setTenement(json));
    }, [id]);


    return (
        <div>
            {tenement && (
                <>
                    <p>Building Name: {tenement.name}</p>
                    <p>Location: {tenement.address}</p>
                    <h4>Apartments</h4>
                    {tenement.apartments.map((apartment) => (
                        <Apartment apartment={apartment} />
                    ))}
                </>
            )}
             
        </div>
    
    );
}