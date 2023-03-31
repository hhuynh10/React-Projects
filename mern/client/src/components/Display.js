import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Display = ({state, setState}) => {

    useEffect(()=>{
        axios.get('http://localhost:8000/api/all')
        .then((res)=> {
            console.log(res)
            setState(res.data)
        }).catch((err)=> {
            console.log(err)
        })
    }, [])

    const deleteHandler = (id) =>{
        axios.delete(`http://localhost:8000/api/delete/${id}`)
        .then((res)=> {
            console.log(res)
            const filter = state.filter((item)=>(item._id !== id))
            setState(filter)
        }).catch((err)=> {
            console.log(err)
        })
    }

    return (
        <div>
            {
                state.map((item) => (
                    <div>
                            <h5>Title: {item.title}</h5>
                            <p>Price: {item.price}</p>
                            <p>Description: {item.description}</p>
                            <img src={`http://localhost:8000/api/add/${item.image}`} />
                            <p><button><Link to={`/home/view/${item._id}`}>View</Link></button> <button onClick={()=>deleteHandler(item._id)}>Delete</button></p>
                    </div>
                ))
            }
        </div>
    )
}

export default Display