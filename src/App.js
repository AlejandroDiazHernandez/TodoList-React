import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* import { v4 as uuid } from 'uuid' */

import './App.scss';
import Navbar from './components/Navbar';
import Mainlist from './components/Mainlist';
import Completed from './components/Completed';

import list from './info.json';



export default class App extends Component {
  state = {
    todos: list,
    completed: [],
    filter: "",
    filterCompleted:"",
    };    

  handleAddTaskTodo = (newTask) => {
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos,
        newTask,
      ],
    }));
  };

  completedTask = (addCompletedTask) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) =>todo.id !== addCompletedTask.id),

      completed:[
        ...prevState.completed,
        addCompletedTask,
      ]
    }))
  };

  handleChangeFilter = (ev) => {
    const value = ev.target.value;

    this.setState ({
      filter: value,
      filterCompleted: value,
    })
  }

  editDescription = (editId, newDescription) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((task) => {
        if (task.id === editId) {
          return {...task, description:newDescription};
        } else {
          return task;
        }
      })
    }))
  }


  render() {
    const filteredCards=this.state.todos.filter((todo) =>{
      const title = todo.title.toLowerCase().trim();
      const filter = this.state.filter.toLowerCase().trim();

      return title.includes(filter);
    });
    
    const filteredCardsCompleted=this.state.completed.filter((taskCompletedFilter) =>{
      const titleCompleted = taskCompletedFilter.title.toLowerCase().trim();
      const filterCompleted = this.state.filterCompleted.toLowerCase().trim();

      return titleCompleted.includes(filterCompleted);
    });

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar
            handleChangeFilter={this.handleChangeFilter}
            filter={this.state.filter}
            filterCompleted={this.state.filterCompleted}/>

          <Switch>
            <Route exact path="/" component={(props) => (
              <Mainlist {...props} 
              todos={filteredCards} 
              handleAddTaskTodo={this.handleAddTaskTodo}
              completedTask={this.completedTask}
              editDescription={this.editDescription}
              />
            )} />

            <Route exact path="/completed" component={(props) => (
              <Completed {...props}
              completed={filteredCardsCompleted} />
            )} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
