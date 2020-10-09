import React, { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSave } from '@fortawesome/free-solid-svg-icons'

import '../styles/ListItem.scss';

export default class ListItem extends Component {
state = {
    showEditor: false,
    isEditing: false,
    editingId: null,
    description: "",
};

toggleEditor = () => {
    this.setState((prevState) => ({
        showEditor: !prevState.showEditor,
    }));
};

handleEditAndConfirm = (task) => {
    if (this.state.isEditing && this.state.editingId === task.id) {
        this.props.editDescription(task.id, this.state.description);

      this.setState({
        isEditing: false,
        editingId: null,
        description: '',
      });
    } else {
      this.setState({
        isEditing: true,
        editingId: task.id,
        description: task.description,
      });
    }
  };

  handleChangeInput = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;

    this.setState((prevState) => ({
        ...prevState,
        [name]: value,
    }));
  };

  render() {
    return (
      <div className="ListItem">
        <div className="ListItem__container">
            <li className="ListItem__container__list--li">
            <div>
                <input
                onClick={() => this.props.completedTask(this.props.task)}
                role="button"
                type="radio"
                name="check"
                value="check"
                ></input>
                <h4>{this.props.task.title}</h4>
            </div>
            <p>{this.props.task.description}</p>
            <button 
            className="EditConfirm--Btn"
            type="button"
            onClick={() => this.handleEditAndConfirm(this.props.task)}>
            {this.state.isEditing && this.state.editingId === this.props.task.id ? 
            <FontAwesomeIcon
                className="SaveIcon"
                icon={faSave}
                onClick={this.toggleEditor}/>
                  : 
            <FontAwesomeIcon
                className="EditIcon"
                icon={faEdit}
                onClick={this.toggleEditor}/>}
            </button>
            {this.state.showEditor ? (
                <textarea
                value={this.state.description}
                row="4"
                name="description"
                onChange={this.handleChangeInput}
                />
            ) : null}
            </li>
        </div>
      </div>
    );
  }
}
