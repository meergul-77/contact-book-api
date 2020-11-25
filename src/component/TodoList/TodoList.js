import React from 'react';
import './TodoList.css';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { UnfoldLessTwoTone } from '@material-ui/icons';


const TodoList = (props) => {

    return (
        <ul className ="ul_list">
            {props.todos.map((item, index) => 
            <li className="liStyle" key = {item.id}>
                <Avatar><AccountCircleIcon /></Avatar>{item.name} {item.lastName} {item.number}
                <IconButton aria-label="delete"  onClick = {() => props.handleDelete(item.id)}><DeleteIcon /></IconButton>
                <IconButton variant="outlined"  className ="btn-edit" onClick = {() => props.handleEdit(index)}><CreateIcon /></IconButton>

            </li> )}
        </ul>
    );
};



export default TodoList;