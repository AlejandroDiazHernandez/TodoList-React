import React, { Component } from 'react'

import '../styles/card.scss'

export default class Card extends Component {
    state = [{
        error:null,
        values: {
            title: '',
            description:'',
        }
    }]

    handleSubmit = async(ev) => {
        ev.preventDefault();
    
        const formValues = this.state.values;
    
        const objValues = Object.values(formValues);
        const validValues = objValues.filter((value) => Boolean(value));
        const isValid = objValues.length === validValues.length;
    
        if (isValid) {
          this.props.handleAddTaskTodo(formValues);
    
          this.setState(this.state.values);
        } else {
          this.setState({
            error: 'No se ha podido añadir su tarea',
          });
        }
      };

    handleAddChange = (ev) => {
        const name = ev.target.name;
        const value = ev.target.value;

        this.setState((prevState) => ({
            values: {
                ...prevState.values,
                [name]:value,
            },
        }));
    };

    render() {
        return (
            <div className="Card">
                    <form className="Card__form" onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="title">
                                <input 
                                value={this.state.values.title}
                                onChange={this.handleAddChange} 
                                placeholder="Escriba su tarea" 
                                type="text" 
                                name="title"
                                required></input>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="description">
                                <input 
                                value={this.state.values.description}
                                onChange={this.handleAddChange} 
                                placeholder="Descripción" 
                                type="text" 
                                name="description"></input>
                            </label>
                        </div>
                        <span>
                            <button className="Card__form--AddBtn">Añadir tarea</button>
                            <button className="Card__form--DeleteBtn" type="button" onClick={this.props.toggleForm}>Cancelar</button>
                        </span>
                    </form>
                </div>
        )
    }
}
