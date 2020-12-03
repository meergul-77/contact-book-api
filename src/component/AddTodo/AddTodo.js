import React, { useContext, useState } from 'react';
import {todoContext} from '../../contexts/TodoContext'
import IconButton from '@material-ui/core/IconButton';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const AddTodo = () => {
    let {addTask} = useContext (todoContext)
    let [value1, setValue1] = useState('')
    let [value2, setValue2] = useState('')
    let [value3, setValue3] = useState('')
    let [isError,setError] = useState(false)


    function handleClick() {
        if (!value1 || !value2 || !value3) {
            setError(true)
            return
        }else{
            setError(false)
        }

        let newObj = {
            name: value1,
            lastName: value2,
            number: value3,
            id: Date.now()
        }

        addTask(newObj)
        setValue1('')
        setValue2('')
        setValue3('')
    }

    return (
        <div style={{backgroundColor: 'rgb(231, 214, 240)', width:"300px", textAlign: "center"}}>
            <h1 >Contact Book</h1>
            <input  style={isError ? {borderColor: 'red'}:{borderColor: 'white'}} 
                value={value1} onChange={(e) => setValue1(e.target.value)}
                type="text" 
                placeholder="Name"
                style={{backgroundColor: 'rgb(231, 214, 240)', width:"230px", height:"29px", fontSize: "16px"}}
            /><br/>
            <input style={isError ? {borderColor: 'red'}:{borderColor: 'white'}} 
                value={value2} onChange={(e) => setValue2(e.target.value)}
                type="text" 
                placeholder="Lastname"
                style={{backgroundColor: 'rgb(231, 214, 240)', width:"230px", height:"29px", fontSize: "16px"}}
            /><br/>
            <input style={isError ? {borderColor: 'red'}:{borderColor: 'white'}} 
                value={value3} onChange={(e) => setValue3(e.target.value)}
                type="number" 
                placeholder="Number"
                style={{backgroundColor: 'rgb(231, 214, 240)', width:"230px", height:"29px", fontSize: "16px"}}
            /><br/>
            <IconButton variant="contained" color="primary" onClick={handleClick}><PersonAddIcon /></IconButton>
        </div>
    );
};

export default AddTodo;