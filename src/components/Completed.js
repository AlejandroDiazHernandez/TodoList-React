import React, { Component } from 'react'

import '../styles/completed.scss';

export default class Completed extends Component {
    render() {
        return (
            <div className="Completed">
                <div className="Completed__container">
                    <h3>Tareas completadas</h3>
                    <ul className="Completed__container__list">
                        {this.props.completed.map((taskCompleted)=> {
                            return(
                                <li key={taskCompleted.id} className="Completed__container__list--li">
                                    <h4>{taskCompleted.title}</h4>
                                    <p>{taskCompleted.description}</p>
                                </li>
                            )
                        })} 
                    </ul>
                </div>
            </div>
        )
    }
}
