import React from 'react'
import {Link} from 'react-router-dom'

class CastingItem extends React.Component {
    render() {
        return(
            <div className="casting__item">
                <Link to={`/casting/${this.props.id}`}><h2 className="casting__name">{this.props.name}</h2></Link>
                <p className="casting__email attributes">{this.props.email}</p>
                <p className="casting__address attributes">{this.props.address}</p>
                <Link to = {`/edit-casting/${this.props.id}`}>Edit</Link>
            </div>
        )
    }
}

export default CastingItem