import React, {useState, useContext, useEffect} from 'react';
import {todoContext} from '../../contexts/TodoContext'



const MainModal = (props) => {
    const {taskToEdit, saveTask} = useContext(todoContext)
    const [newEditItem, setNewEditItem] = useState(taskToEdit)
    useEffect (()=>{ // говорит, как ток taskToEdit поменяется, закидывай в newEditItem taskToEdit, замени все что там находится
        setNewEditItem(taskToEdit)
    },[taskToEdit])


    function handleEditInput1(e){
        let newObj = {
            ...newEditItem,
            name : e.target.value    
        }
        setNewEditItem(newObj);
    }
    function handleEditInput2(e){
        let newObj = {
            ...newEditItem,
            lastName : e.target.value
        }
        setNewEditItem(newObj);
    }
    function handleEditInput3(e){
        let newObj = {
            ...newEditItem,
            number : e.target.value
        }
        setNewEditItem(newObj);
    }
    return (
        <div>
            {newEditItem ? 
            <>
            <input onChange={handleEditInput1} value={newEditItem.name} type="text" />
            <input onChange={handleEditInput2} value={newEditItem.lastName} type="text"/>
            <input onChange={handleEditInput3} value={newEditItem.number} type="number"/>
            <button onClick ={() => saveTask(newEditItem, props.history)} className="btn-save">Save</button>
            </>
            : <h1>Loading</h1>}
        </div>
    );
};

export default MainModal;