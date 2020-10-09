import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import '../styles/mainlist.scss';
import Card from './Card';
import ListItem from './ListItem';

export default class Mainlist extends Component {
    state = {
        showForm: false,
    };

    toggleForm = () => {
        this.setState((prevState) => ({
          showForm: !prevState.showForm,
        }));
      };

    render() {
        return (
            <div className="Mainlist">

                <div className="Mainlist__container">
                    <h3>Bandeja de entrada</h3>
                    <ul className="Mainlist__container__list">
                        {this.props.todos.map((task, index) => {
                            return (
                                <ListItem task={task} index={index} key={index}
                                completedTask={this.props.completedTask} 
                                editDescription={this.props.editDescription}
                                />
                            );
                        })}
                    </ul>
                    {this.state.showForm === false ? 
                    <p className="Mainlist__container--add" onClick={this.toggleForm}><FontAwesomeIcon icon={faPlus}/>Añadir tarea</p> 
                    : 
                    <Card handleAddTaskTodo={this.props.handleAddTaskTodo} toggleForm={this.toggleForm}/>}
                </div>
            </div>  
        )
    }
}

    