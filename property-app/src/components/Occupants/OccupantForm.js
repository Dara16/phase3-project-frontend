import React, {useState} from 'react'

export default function OccupantForm({createOccupant}) {
    const [formData, setFormData] = useState({name: "", lease_end: ""})

    function handleChange(e) {
        formData[e.target.name] = e.target.value
        setFormData({...formData})
    }

    function handleSubmit(e) {
        e.preventDefault()
        createOccupant(formData)
        setFormData({name: "", lease_end: ""})
    }


    return (
        <form className="occupant-form">
            <label>Name: </label>
            <input onChange={handleChange} name="name" value={formData.name}/>
            <label>End of Lease: </label>
            <input onChange={handleChange} name="lease_end" value={formData.lease_end}/>
            <button onClick={handleSubmit}>Add Occupant</button>
        </form>
    )
}