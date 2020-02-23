import React from 'react'
import {NavLink} from 'react-router-dom'
import './navbar.css'

class Navbar extends React.Component{
    render() {
        return(
            <div className ="Navbar">
                <NavLink className = "Nav__link" to ={'/home'}><h1>Audition Tracker</h1></NavLink>
                <ul className ="Nav__list">
                    <li key ="Home">
                        <NavLink
                        className ="Nav__link"
                        to={'/home'}>
                            Home
                        </NavLink>
                    </li>
                    <li key ="auditions">
                        <NavLink
                        className = "Nav__link"
                        to ={'/auditions'}>
                            Auditions
                        </NavLink>
                    </li>
                    <li key = "casting">
                        <NavLink
                            className ="Nav__link"
                            to ={'/casting'}>
                             Casting
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar