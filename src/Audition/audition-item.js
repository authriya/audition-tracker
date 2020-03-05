import React from 'react'
import {Link} from 'react-router-dom'
import AuditionsApiService from '../services/auditions-api-service'
import ApiContext from '../ApiContext'
import './audition-item.css'

class AuditionItem extends React.Component {
    static contextType = ApiContext
    handleDeleteAudition = e => {
        e.preventDefault()
        const auditionId = this.props.id
        AuditionsApiService.deleteAudition(auditionId)
            .then(() => {
                this.context.deleteAudition(auditionId)
                this.props.history.push('/auditions')
            })
            .catch(error => {
                console.error({error})
            })
    }
    render() {
        return (

            <div className="audition__item">
                <h2 className="audition-name">
                <Link to ={`/auditions/${this.props.id}`}>{this.props.name}</Link>
                </h2>
                <p className="project__with attributes">Casting Office: {this.props.castingOffice}</p>
                <p className="role-type attributes">Role Type: {this.props.roleType}</p>
                <p className="date attributes">Date: {this.props.date}</p>
                <p className = "rating attributes"> Rating: {this.props.rating}</p>
                <input type="submit" value="Delete" onClick={this.handleDeleteAudition} className="audition__delete"/>
                <span className="audition__edit__button"><Link to ={`/edit-audition/${this.props.id}`}>Edit</Link></span>
            </div>
        )
    }
}

export default AuditionItem