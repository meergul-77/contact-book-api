import React, { useContext, useEffect, useState } from 'react';
import {todoContext} from '../../contexts/TodoContext'
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

const Details = (props) => {
    const {taskToDetails, saveTask} = useContext(todoContext)
    const [newDetailsItem, setNewDetailsItem] = useState(taskToDetails)
    useEffect (()=>{ // говорит, как ток taskToDetails поменяется, закидывай в newDetailsItem taskToDetails, замени все что там находится
        setNewDetailsItem(taskToDetails)
    },[taskToDetails])
    // console.log(taskToDetails)
    return (
        <div style={{marginTop:"30px", marginLeft:"50px", fontSize: "17px"}}>
        {newDetailsItem ? 
        <>
        <Avatar color="primary"><AccountCircleIcon /></Avatar>
        <h3><span style={{color:"blue", fontSize: "20px"}} >Имя: </span> {newDetailsItem.name}</h3>
        <h3><span style={{color:"blue", fontSize: "20px"}}>Фам: </span> {newDetailsItem.lastName} </h3>
        <h3><span style={{color:"blue", fontSize: "20px"}}>Тел: </span> {newDetailsItem.number}</h3>
        <Button variant="contained" color="primary" onClick ={() => saveTask(newDetailsItem, props.history)} style={{width:"60px", height:"26px", fontSize: "8px"}}>На главную</Button >
        </>
        : <h1>Loading</h1>}
    </div>
    );
};

export default Details;
