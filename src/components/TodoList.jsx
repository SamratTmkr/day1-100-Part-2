import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/todo.slice';

const TodoList = () => {
    const [name, setName] = useState(""); 
    const dispatch = useDispatch();
    const { todos } = useSelector((state) => state.todo);
    
    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleAddTodo = () => {
        if (name.trim() === "") {
            alert("Please enter a valid todo.");
            return;
        }
        
        dispatch(addTodo(name.trim())); 
        setName("");
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Todo App</h1>
            <div className="flex gap-2 mb-6">
                <input 
                    type="text" 
                    value={name} 
                    placeholder="Enter todo"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onChange={handleName}
                />
                <button 
                    onClick={handleAddTodo}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                    Add Todo
                </button>
            </div>

            {todos?.length > 0 ? (
                <ol className="space-y-2">
                    {todos.map((todo) => (
                        <li 
                            key={todo?.id} 
                            className="text-gray-700 bg-gray-50 p-3 rounded-md border border-gray-200"
                        >
                            {todo?.name}
                        </li>
                    ))}
                </ol>
            ) : (
                <p className="text-center text-gray-500 italic">No todos yet</p>
            )}
        </div>
    );
};

export default TodoList;