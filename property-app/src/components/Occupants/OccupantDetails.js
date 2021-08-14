import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { BASE_URL } from '../../constraints/index.js';

export default function OccupantDetails() {
    const [occupant, setOccupant] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        fetch(BASE_URL + "apartments/" + id)
            .then((res) => res.json())
            .then((json) => setOccupant(json));
    }, [id]);

    return (
        <div>
            {occupant}
             
        </div>
    
    );
}

