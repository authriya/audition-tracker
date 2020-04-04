import React from 'react'
import AuditionItem from './audition-item'
import {getCastingForAuditions} from '../route-helpers'
import ApiContext from '../ApiContext'
import AddButton from '../AddButton/AddButton'
import {Link} from 'react-router-dom'

class AuditionList extends React.Component {
    static contextType = ApiContext
    render() {
      window.onload = function () {
        if (! localStorage.justOnce) {
            localStorage.setItem("justOnce", "true");
            window.location.reload();
        }
      }
        const {auditions = []} = this.context
        const {casting = []} = this.context
        return(
        <div className="audition__list app">
          <ul className="app__list">
            {auditions.map(audition => 
                <li key = {audition.id}>
                    <AuditionItem
                    id = {audition.id}
                    name = {audition.projectName}
                    castingOffice = {getCastingForAuditions(casting, audition.castingOffice)}
                    roleType = {audition.roleType}
                    date = {audition.date}
                    rating = {audition.rating}
                    history = {this.props.history}
                    />
                </li>)}
          </ul>
                <div className='Audition__button-container'>
        <AddButton
          tag={Link}
          to='/add-audition'
          type='button'
          className='AuditionList__add-audition-button'
        >
        <i className="fas fa-plus"></i> Audition
        </AddButton>
      </div>
        </div>
        
        )
    }
}

export default AuditionList