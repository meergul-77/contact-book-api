import React, { useReducer } from 'react';
import axios from 'axios'
export const todoContext = React.createContext();

const INIT_STATE = {
    contacts: [],
    taskToEdit: null,
    taskToDetails: null
}

const reducer = (state=INIT_STATE, action)=> {
    switch(action.type){
        case "CET_CONTACTS_DATA": 
            return {...state, contacts: action.payload}
        case "EDIT_TODO":
            return {...state, taskToEdit: action.payload}
        case "DETAILS_TODO":
            return {...state, taskToDetails: action.payload}
        default: return state
    }
}

const TodoContextProvider = ({ children }) => { //оборачивает в чилдрен
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
 
    const getcontactsData = async () => {
        let { data } = await axios('http://localhost:8000/contacts')
        console.log(data)
        dispatch({
            type: "CET_CONTACTS_DATA",
            payload: data
        })
            
    }
    const addTask = async (newTask)=>{
        await axios.post('http://localhost:8000/contacts', newTask)  
        getcontactsData()
    }

    const deleteTask = async (id) =>{
        await axios.delete(`http://localhost:8000/contacts/${id}`)
        getcontactsData()
    }

    const editTodo = async (id) => {
        let { data } = await axios(`http://localhost:8000/contacts/${id}`)
        dispatch({
            type: "EDIT_TODO",
            payload: data
        })
    }
    const detailsTodo = async (id) => {
        let { data } = await axios(`http://localhost:8000/contacts/${id}`)
        dispatch({
            type: "DETAILS_TODO",
            payload: data
        })
    }

    const saveTask = async (newTask, history) => {
        try{
            await axios.patch(`http://localhost:8000/contacts/${newTask.id}`, newTask)
            history.push('/')   
        }catch(error){
            history.push('/error')
        }
    }

    return (
         <todoContext.Provider value={{
             contacts:state.contacts,
             taskToEdit: state.taskToEdit,
             taskToDetails: state.taskToDetails,
             addTask,
             getcontactsData,
             deleteTask,
             editTodo,
             detailsTodo,
             saveTask
         }}>
             {children}
         </todoContext.Provider>
     )
}

export default TodoContextProvider;