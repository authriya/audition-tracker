import React from 'react'
import CastingItem from './casting-item'
import ApiContext from '../ApiContext'
import AddButton from '../AddButton/AddButton'
import {Link} from 'react-router-dom'
import './casting-director-list.css'

class CastingList extends React.Component {
    static contextType = ApiContext
    componentDidMount() {
        if(this.context.auditions.length === 0 || this.context.casting.length === 0) {
            this.context.handleLoginSuccess()
        }
    }
    render() {
        const {casting = []} = this.context
        return(
            <div className="casting__list app">
                <ul className="app__list">
                {casting.map(cast => 
                    <li key = {cast.id}>
                    <CastingItem 
                        id= {cast.id}
                        name = {cast.name}
                        address = {cast.address}
                        email = {cast.email}
                    />
                    </li>
                )}
                </ul>
                <AddButton
                    tag={Link}
                    to='/add-casting'
                    type='button'
                    className='CastingList__add-casting-button'
                    >
                    <i className="fas fa-plus"></i> Casting Office
                </AddButton>
            </div>
        )
    }
}

export default CastingList