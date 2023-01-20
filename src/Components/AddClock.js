import React from 'react'
import { useState } from 'react'

export default function AddClock(props) {
    const [name, setName] = useState("")
    const [zone, setZone] = useState("")
    const submit = (e) => {
        e.preventDefault()
        if (!name || !zone) {
            alert("blank")
        }
        else if(name==="Country Name" || zone==="Zone Name"){
            alert("Choose Wrong Value")

        }
        else{
            props.addClock(name,zone)
        }
        setName("")
        setZone("")
    }
    return (
        <form className='container' onSubmit={submit}>
            <h1 className='text-center'>Add Clock Here</h1>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Country Name</label>
                <select className="form-select" placeholder='Country' aria-label="Default select example" id="name" value={name} onChange={(e) => { setName(e.target.value) }}>
                    <option value="Country Name">Country Name</option>
                    <option value="India">India</option>
                    <option value="Usa">Usa</option>
                    <option value="China">China</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Zone Name</label>
                <select className="form-select" placeholder='Country Zone' aria-label="Default select example" id="zone" value={zone} onChange={(e) => { setZone(e.target.value) }} >
                    <option value="Zone Name">Zone Name</option>
                    <option value="Asia/Kolkata">Asia/Kolkata</option>
                    <option value="America/New_York">America/New_York</option>
                    <option value="Asia/Shanghai">Asia/Shanghai</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Add Clock</button>
        </form>
    )
}
