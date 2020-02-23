import React from 'react'
import {Link} from 'react-router-dom'

class AuditionItem extends React.Component {
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
                <Link to ={`/edit-audition/${this.props.id}`}>Edit</Link>
            </div>
        )
    }
}

export default AuditionItem