import React from 'react'

export default function Tenement({tenement}) {
    return (
        <div>
            <br />
                <p>{tenement.name}</p>
                <p>{tenement.address}</p>
            <br />
        </div>
    )
}