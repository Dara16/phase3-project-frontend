import React, { useState, useEffect } from 'react';
import Tenement from './Tenement.js'
import { BASE_URL } from '../../constraints/index.js';



export default function TenementsContainer() {
    const [tenements, setTenements] = useState(null);

    useEffect(() => {
        fetch(BASE_URL + 'tenements')
        .then(res => res.json())
        .then(json => setTenements(json));
    }, [])


    function populateTenements() {
        return tenements.map(tenement => <Tenement tenement={tenement} />)
    }

    return (
        <div>
            <h1>PROPERTIES</h1>
            {tenements && populateTenements()}
        </div>
    )
}