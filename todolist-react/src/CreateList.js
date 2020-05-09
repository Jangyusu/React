import React from 'react'

function CreateList({ todoText, change, addList }) {
    return (
        <div className="input">
            <input
                name="todoText"
                placeholder="Enter new todo"
                onChange={change}
                value={todoText}
            />
            <button onClick={addList}>Add</button>
            <p>Todo List</p>
        </div>
    );
}

export default CreateList;