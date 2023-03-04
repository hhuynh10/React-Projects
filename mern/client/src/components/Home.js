import { useState } from "react"
import React from 'react'
import Form from '../components/Form';
import Display from '../components/Display';

const Home = () => {
    
    const [state, setState] = useState([])
    
    return (
        <div>
            <h1>Mern Project</h1>
            <Form state={state} setState={setState} />
            <br></br>
            <Display state={state} setState={setState} />
        </div>
    )
}

export default Home