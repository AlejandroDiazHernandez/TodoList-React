import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';


import '../styles/navbar.scss';

export default class Navbar extends Component {
    render() {
        return (
            <span className="Navbar">
                <span className="Navbar__left">
                        <div className="Navbar__left__search">
                            <Link className="LinkStyle" to="/"><span><FontAwesomeIcon icon={faHome} className="White"/> </span></Link>
                            <span><FontAwesomeIcon icon={faSearch} className="Navbar__left__search--icon White"/></span>
                            <input className="Navbar__left__search--input"
                                placeholder="Búsqueda"
                                value={this.props.filter}
                                name="search"
                                onChange={this.props.handleChangeFilter}>
                            </input>
                        </div>
                </span>

                <span className="Navbar__right white LinkStyle">
                    <Link className="LinkStyle" to="/completed"> Tareas completadas</Link>
                </span>
            </span>
        )
    }
}
