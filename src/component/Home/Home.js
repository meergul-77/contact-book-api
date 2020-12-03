import React from 'react';
import AddTodo from '../AddTodo/AddTodo'
import TodoList from '../TodoList/TodoList'
const Home = () => {
    return (
        <div style ={{textAlign:"center", margin: "20px auto"}}>
            <AddTodo />
            <TodoList />
      </div>
    );
};

export default Home;