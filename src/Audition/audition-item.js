import React from 'react'
import {Link} from 'react-router-dom'
import AuditionsApiService from '../services/auditions-api-service'
import ApiContext from '../ApiContext'

class AuditionItem extends React.Component {
    static contextType = ApiContext
    handleDeleteAudition = e => {
        e.preventDefault()
        const auditionId = this.props.id
        AuditionsApiService.deleteAudition(auditionId)
            .then(res => {
                if(!res.ok) {
                return res.json().then(e=>Promise.reject(e))
                }
                return
            })
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
                <h2 className="project__title">
                <Link to ={`/auditions/${this.props.id}`}>{this.props.name}</Link>
                </h2>
                <p className="project__with attributes">{this.props.castingOffice}</p>
                <p className="role-type attributes">{this.props.roleType}</p>
                <p className="date attributes">{this.props.date}</p>
                <p className = "rating">{this.props.rating}</p>
                <input type="submit" value="Delete Audition" onClick={this.handleDeleteAudition}/>
                <Link to ={`/edit-audition/${this.props.id}`}>Edit</Link>
            </div>
        )
    }
}

export default AuditionItem