import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AddTodo from './component/AddTodo/AddTodo';
import TodoList from './component/TodoList/TodoList';
import MainModal from './component/MainModal/MainModal';
import Home from './component/Home/Home';
import {history} from './helpers/history'
import Details from './component/Details/Details';
const Routes = () => {
    return (
        <BrowserRouter history = {history} >
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/add" component={AddTodo} />
                <Route exact path="/list" component={TodoList} />
                <Route exact path="/edit" component={MainModal} />
                <Route exact path="/details" component={Details} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;