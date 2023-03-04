import React, { useState } from 'react'
import axios from 'axios'

const Form = ({state, setState}) => {
    
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState([])

    const [errors, setErrors] = useState({})
    
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/add', {
            title,
            price,
            description,
            image
        }).then((res)=> {
            console.log(res)
            setTitle("")
            setPrice("")
            setDescription("")
            setState([...state, res.data]);
        }).catch((err)=> {
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

    return (
        <div>
            <h5 className="text-dark mt-2">Add a new product:</h5>
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

                <div>
                    <label className="form-label">Image:</label>
                    <input type='file' onChange={(e)=>setImage(e.target.files[0])}/>
                </div>
                
                <button type="submit" className="btn btn-success mt-3">Submit</button>
            </form>
        </div>
    )
}

export default Form