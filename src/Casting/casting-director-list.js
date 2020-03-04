import React from 'react'
import CastingItem from './casting-item'
import ApiContext from '../ApiContext'
import AddButton from '../AddButton/AddButton'
import {Link} from 'react-router-dom'

class CastingList extends React.Component {
    static contextType = ApiContext
    render() {
        const {casting = []} = this.context
        return(
            <div className="casting__list app">
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
                <AddButton
                    tag={Link}
                    to='/add-casting'
                    type='button'
                    className='CastingList__add-casting-button'
                    >
                    <i class="fas fa-plus"></i> Casting Office
                </AddButton>
            </div>
        )
    }
}

export default CastingList