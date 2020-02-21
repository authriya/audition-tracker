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
        const auditionPage = findAudition(auditions, auditionId)
        console.log(auditions)
        return(
            <div className="audition__page">
                <AuditionItem 
                    id = {auditionPage.id}
                    name = {auditionPage.projectName}
                    castingOffice = {getCastingForAuditions(casting, auditionId) || ''}
                    roleType = {auditionPage.roleType}
                    date = {auditionPage.date}
                    rating = {auditionPage.rating}
                />
                <p className="projectType">{auditionPage.projectType}</p>
                <p className="clothing__notes">{auditionPage.clothingNotes}</p>
                <p className="other__notes">{auditionPage.notes}</p>
            </div>
        )
    }
}

export default AuditionPage