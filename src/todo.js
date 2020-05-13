import React from 'react'

function Todo(props){
    return(
        <div>
            <input 
            type="checkbox" className="checkbox"
            checked={props.list.checked} 
            onChange={() => props.handleclick(props.list.id)}
            />
            <label className="text">{props.list.name}</label>
        </div>
    )
}

export default Todo;