import React from 'react'
import {Link} from 'react-router-dom'
import './casting-item.css'

class CastingItem extends React.Component {
    render() {
        return(
            <div className="casting__item">
                <Link to={`/casting/${this.props.id}`}><h2 className="casting-name">{this.props.name}</h2></Link>
                <p className="casting__email attributes"> <span className="item__title">Email:</span> {this.props.email}</p>
                <p className="casting__address attributes"><span className="item__title">Address:</span> {this.props.address}</p>
                <span className="edit__button"><Link to = {`/edit-casting/${this.props.id}`}>Edit</Link></span>
            </div>
        )
    }
}

export default CastingItem