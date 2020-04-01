import React from 'react'
import ApiContext from '../ApiContext'
import {findCasting} from '../route-helpers'
import AuditionsApiService from '../services/auditions-api-service'
import './edit-casting.css'

class EditCasting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            address: '',
            email: '',
            associates: '',
            preferences: ''
        }
    }

    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = ApiContext

    componentDidMount() {
        const {castingId} = this.props.match.params
        const {casting = []} = this.context
        const castingPage = findCasting(casting, parseInt(castingId))

        if(!castingPage) {
            return null
        }

        this.setState({
            id: parseInt(castingId),
            name: castingPage.name,
            address: castingPage.address,
            email: castingPage.email,
            associates: castingPage.associates,
            preferences: castingPage.preferences
        })
    }

    nameChange(name) {
        this.setState({
            name
        })
    }

    addressChange(address) {
        this.setState({
            address
        })
    }

    emailChange(email) {
        this.setState({
            email
        })
    }

    associatesChange(associates) {
        this.setState({
            associates
        })
    }
    
    preferencesChange(preferences) {
        this.setState({
            preferences
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const {castingId} = this.props.match.params

        const castingItemNew = {
            id: parseInt(castingId),
            name: this.state.name,
            address: this.state.address,
            email: this.state.email,
            associates: this.state.associates,
            preferences: this.state.preferences
        }
        
        AuditionsApiService.patchCasting(castingItemNew, castingItemNew.id)
            .then(this.context.editCasting(castingItemNew))
            .then(this.props.history.push('/casting'))
    }
    render() {
        return (
            <div className="edit__casting__form app">
                <h2 className="app__heading1">Edit Casting</h2>
                <form method="get" className="add__casting__form" onSubmit = {e => this.handleSubmit(e)}>
                    <label htmlFor="name" className="add__casting__label">Casting Office Name</label>
                    <input id="name" className="add__casting__input" name="name" value = {this.state.name} onChange = {e => this.nameChange(e.target.value)} required/>
                    <label htmlFor="address" className="add__casting__label">Address</label>
                    <input id="address" className="add__casting__input" name="address" value={this.state.address} onChange = {e => this.addressChange(e.target.value)} required/>
                    <label htmlFor="email" className="add__casting__label">Email</label>
                    <input id="email" className="add__casting__input" name="email" value = {this.state.email} onChange = {e => this.emailChange(e.target.value)} required/>
                    <label htmlFor="associates"className="add__casting__label">Associates</label>
                    <input id="associates" className="add__casting__input" name="associates" value = {this.state.associates} onChange = {e => this.associatesChange(e.target.value)} required/>
                    <label htmlFor="preferences"className="add__casting__label">Miscellaneous Preferences</label> 
                    <input id="preferences" className="add__casting__input" name="preferences" value = {this.state.preferences} onChange = {e => this.preferencesChange(e.target.value)} required/>
                    <input type="submit" value="Submit Casting" className="submit__casting"/>
                </form>
            </div>
        )
    }
}

export default EditCasting