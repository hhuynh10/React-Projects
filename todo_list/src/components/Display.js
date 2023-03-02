import React from 'react'

const Display = ({list, setList}) => {

    const deleteButton = (delIndex) =>{
        const newList = list.filter((todo, i)=>(
            i !== delIndex
        ))
        setList(newList)
    }

    const checkButton = (idx) => {
        const newList = list.map((todo, i)=>{
            if (idx === i){
                todo.completed = !todo.completed
            }
            return todo
        })
        setList(newList)
    }

    const styled = (status) => {
        if(status === true){
            return "completed"
        }
    }

    return (
        <div>
            {
                list.map((todo, index)=>(
                    <h5 className= {`${styled(todo.completed)} fs-5`} key={index}>{todo.num}. {todo.text}  
                    <input className='form-check-input ms-3' type='checkbox' checked={todo.completed} onChange={()=>checkButton(index)}/>
                    <button className='btn btn-danger btn-sm ms-3' onClick={()=>deleteButton(index)}>Delete</button></h5>
                ))
            }
        </div>
    )
}

export default Display