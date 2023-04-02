import React, { useState } from 'react'
import axios from 'axios'

const Form = () => {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')

    const [errors, setErrors] = useState({})


    const submitHandler = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/add', {
            name,
            image
        }).then((res)=> {
            console.log(res)
            setName("")
        }).catch((err)=> {
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

    return (
        <div>
            <h5 className="text-dark mt-2">Add User:</h5>
            <form onSubmit={submitHandler} className="col-4 mx-auto">

                <div>
                    <label className="form-label">Name:</label>
                    <input type="text" className="form-control bg-light" value={name} onChange={(e)=>setName(e.target.value)} />
                    {errors.name ? <span className='text-danger'>{errors.name.message}</span> : null }<br></br>
                </div>

                <div>
                    <label className="form-label">Image:</label>
                    <input type='file' onChange={(e)=>setImage(e.target.image)} />
                </div>
                
                <button type="submit" className="btn btn-success mt-3">Submit</button>
            </form>
        </div>
    )
}

export default Form