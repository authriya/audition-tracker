import React from 'react'
import AuditionItem from './audition-item'
import ApiContext from '../ApiContext'
import {findAudition, getCastingForAuditions} from '../route-helpers'

class AuditionPage extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = ApiContext
    render() {
        const {auditionId} = this.props.match.params
        const {auditions = []} = this.context
        const {casting = []} = this.context
        const auditionPage = findAudition(auditions, parseInt(auditionId))

        if (!auditionPage) {
            return null;
        }

        return(
            <div className="audition__page app">
                <AuditionItem 
                    id = {auditionPage.id}
                    name = {auditionPage.projectName}
                    castingOffice = {getCastingForAuditions(casting, auditionPage.castingOffice) || ''}
                    roleType = {auditionPage.roleType}
                    date = {auditionPage.date}
                    rating = {auditionPage.rating}
                />
                <p className="projectType">Project Type: {auditionPage.projectType}</p>
                <p className="clothing__notes">Your Outfit: {auditionPage.clothingNotes}</p>
                <p className="other__notes">Notes: {auditionPage.notes}</p>
            </div>
        )
    }
}

export default AuditionPage