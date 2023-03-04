import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const Edit = () => {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/mern/${id}`)
        .then((res)=> {
            console.log(res)
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        }).catch((err)=> {
            console.log(err)
        })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/update/${id}`, {
            title,
            price,
            description
        }).then((res)=> {
            console.log(res)
            navigate('/home')
        }).catch((err)=> {
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }
    return (
        <div>
            <h5 className="text-dark mt-2">Edit a new product:</h5>
            <form onSubmit={submitHandler} className="col-4 mx-auto">

                <div>
                    <label className="form-label">Title:</label>
                    <input type="text" className="form-control bg-light" value={title} onChange={(e)=>setTitle(e.target.value)} />
                    {errors.title ? <span className='text-danger'>{errors.title.message}</span> : null }<br></br>
                </div>

                <div>
                    <label className="form-label">Price:</label>
                    <input type="text" className="form-control bg-light" value={price} onChange={(e)=>setPrice(e.target.value)} />
                    {errors.price ? <span className='text-danger'>{errors.price.message}</span> : null }<br></br>
                </div>

                <div>
                    <label className="form-label">Description:</label>
                    <input type="text" className="form-control bg-light" value={description} onChange={(e)=>setDescription(e.target.value)} />
                    {errors.description ? <span className='text-danger'>{errors.description.message}</span> : null }<br></br>
                </div>
                
                <button type="submit" className="btn btn-success mt-3">Submit</button>
            </form>
        </div>
    )
}

export default Edit