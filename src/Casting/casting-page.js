import React from 'react'
import CastingItem from './casting-item'
import AuditionItem from '../Audition/audition-item'
import ApiContext from '../ApiContext'
import {getAuditionsForCasting, findCasting} from '../route-helpers'
import './casting-page.css'

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
        const castingPage = findCasting(casting, parseInt(castingId))
        const auditions = getAuditionsForCasting(this.context.auditions, parseInt(castingId))

        if (!castingPage) {
            return null;
        }

        return(
            <div className="casting__page app">
                <CastingItem
                    id= {castingPage.id}
                    name = {castingPage.name}
                    address = {castingPage.address}
                    email = {castingPage.email}/>
                <p className="associates"><span className="page__sub__heading">Associates:</span> {castingPage.associates}</p>
                <p className="preferences"><span className="page__sub__heading">Preferences:</span> {castingPage.preferences}</p>
                <h2 className="app__heading1">Projects they called you in for</h2>
                <ul className="app__list">
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
                </ul>
            </div>
        )
    }
}

export default CastingPage