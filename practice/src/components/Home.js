import React, {useState} from 'react'
import {navigate} from "@reach/router";

const Home = () => {

    const [element, setElement] = useState("");
    const [id, setID] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        setElement("");
        setID("")
        navigate(`/${element}/${id}`)
    };

    return (
            <div className='bgStat mt-5 mx-auto col-6 border border-success border-3 p-3'>
                <form onSubmit={ submitHandler } className= 'mx-auto col-10'>
                    <div>
                        <label>Search For:</label>
                        <select className='form-control' value={element} onChange={ (e) => setElement(e.target.value) }>
                            <option></option>
                            <option>people</option>
                            <option>planets</option>
                        </select>
                    </div>
                    <div>
                        <label className='form-label fs-4'>ID: </label> 
                        <input className='form-control' type="number" value={id} onChange={ (e) => setID(e.target.value) } />
                    </div>
                    <input className='btn btn-success mt-3' type="submit" value="Search" />
                </form>
        </div>
    )
}

export default Home