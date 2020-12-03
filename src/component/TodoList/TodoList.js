import React, { useContext, useEffect } from 'react';
import './TodoList.css';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import {todoContext} from '../../contexts/TodoContext';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const TodoList = () => {

    const {contacts, getcontactsData, deleteTask, editTodo, detailsTodo} = useContext(todoContext)

    useEffect(() => {
        getcontactsData()
    }, [])
    return (
        <ul>
            {contacts.map(item => (
            <li className="liStyle" key = {item.id}>
                <Avatar color="primary"><AccountCircleIcon /></Avatar>{item.name} {item.lastName} {item.number}
                <IconButton aria-label="delete" color="primary"  onClick = {() => deleteTask(item.id)}><DeleteIcon /></IconButton>
                <Link to="/edit">
                <IconButton variant="outlined" color="primary"  className ="btn-edit" onClick = {() => editTodo(item.id)}><CreateIcon /></IconButton>
                </Link>
                <Link to="/details">
                <Button onClick = {() => detailsTodo(item.id)} variant="contained" color="primary" style={{width:"50px", height:"26px", fontSize: "10px"}} >Details</Button>
                </Link>
            </li> ))}
        </ul>
    );
};



export default TodoList;