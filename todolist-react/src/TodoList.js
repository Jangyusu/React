import React from 'react'

function Todo({ todo, removeList }) {
    const { todoText, id } = todo;

    return (
        <div className="list">
            <span>{todoText}</span>
            <button onClick={() => removeList(id)}>Complete</button>
        </div>
    )
}

function TodoList({ todos, removeList }) {
    return (
        <div>
            {
                todos.map(
                    todo => (
                        <Todo
                            todo={todo}
                            key={todo.id}
                            removeList={removeList}
                        />
                    )
                )
            }
        </div>
    );
}

export default TodoList;