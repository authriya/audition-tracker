import React from 'react'
import {NavLink} from 'react-router-dom'
import './navbar.css'

class Navbar extends React.Component{
    state = {
        active: false
    }


    render() {
        return(
            <div className ="Navbar">
                <NavLink className = "Nav__link" to ={'/home'}><h1 className="app__heading__nav">Audition Tracker</h1></NavLink>
                <ul className ="Nav__list">
                    <li key ="Home">
                        <NavLink
                        className ="Nav__link"
                        to={'/home'}
                        activeStyle={{
                            textDecoration: 'underline'
                        }}>
                            Home
                        </NavLink>
                    </li>
                    <li key ="auditions">
                        <NavLink
                        className = "Nav__link"
                        to ={'/auditions'}
                        activeStyle={{
                            textDecoration: 'underline'
                        }}>
                            Auditions
                        </NavLink>
                    </li>
                    <li key = "casting">
                        <NavLink
                            className ="Nav__link"
                            to ={'/casting'}
                            activeStyle={{
                                textDecoration: 'underline'
                            }}>
                             Casting
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar