import React from 'react'
import CastingItem from './casting-item'
import AuditionItem from '../Audition/audition-item'
import ApiContext from '../ApiContext'
import {getAuditionsForCasting, findCasting} from '../route-helpers'

class CastingPage extends React.Component {
    defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = ApiContext

    render() {
        const {castingId} = this.props.match.params
        const {casting = []} = this.context
        const castingPage = findCasting(casting, castingId)
        const {auditions = []} = getAuditionsForCasting(this.context.auditions, castingId)
        return(
            <div className="casting__page">
                <CastingItem
                    id= {castingPage.id}
                    name = {castingPage.name}
                    address = {castingPage.address}
                    email = {castingPage.email}/>
                <p className="associates">{castingPage.associates}</p>
                <p className="preferences">{castingPage.preferences}</p>
                {auditions.map(audition =>
                    <li key = {audition.id}>
                    <AuditionItem 
                    id = {audition.id}
                    name = {audition.projectName}
                    castingOffice = {casting.name}
                    roleType = {audition.roleType}
                    date = {audition.date}
                    rating = {this.props.rating}
                    />
                    </li>)}
            </div>
        )
    }
}

export default CastingPage