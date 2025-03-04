import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todos: [],
};

const todoSlice = createSlice({
    name: "todo", //slice name
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            console.log(action,"actions")
            state.todos.push({id:Date.now(),name:action.payload})
        },
        removeTodo:(state,action)=>{
            console.log(action,"actions")
            state.todos.delete({id:Date.now(),name:action.payload})
        }
    }
})
export const {addTodo}=todoSlice.actions;
export default todoSlice.reducer