import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

const View = () => {

    const [state, setState] = useState({})

    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/mern/${id}`)
        .then((res)=> {
            console.log(res)
            setState(res.data)
        }).catch((err)=> {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <h5>Title: {state.title}</h5>
            <p>Price: {state.price}</p>
            <p>Description: {state.description}</p>
            <p><button><Link to={`/home/edit/${state._id}`}>Edit</Link></button></p>
        </div>
    )
}

export default View