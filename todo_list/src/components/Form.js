import React, {useState}from 'react'

const Form = ({list, setList, children}) => {
    const [todo, setTodo] = useState("");
    const [num, setNum] = useState(1)

    const createList = (e) => {
        e.preventDefault();
        if (todo.length === 0){
            return
        }
        setList([...list, {
            text:todo, 
            completed:false, 
            num:num
        }])
        setTodo("");
        setNum(num+1)
    };

    return (
            <div className='bgStat mt-5 mx-auto col-6 border border-success border-3 p-3'>
                <form onSubmit={ createList } className= 'mx-auto col-10'>
                    <div>
                        <label className='form-label fs-4'>Todo: </label> 
                        <input className='form-control' type="text" value={todo} onChange={ (e) => setTodo(e.target.value) } />
                    </div>
                    <input className='btn btn-success mt-3' type="submit" value="Add" />
                </form>
                <h1 className='mt-4'>My Todo List:</h1>
                {
                    list.length === 0 &&
                    <p>List is Empty! Please Items Add to List!</p>
                }
                {children}
            </div>
    )
}

export default Form