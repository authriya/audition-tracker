import React from 'react'
import ApiContext from '../ApiContext'
import {findCasting} from '../route-helpers'
import AuditionsApiService from '../services/auditions-api-service'

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
        const castingPage = findCasting(casting, castingId)

        if(!castingPage) {
            return null
        }

        this.setState({
            id: castingId,
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
        this.SetState({
            preferences
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const {castingId} = this.props.match.params

        const castingItemNew = {
            id: castingId,
            name: this.state.name,
            address: this.state.address,
            email: this.state.email,
            associates: this.state.associates,
            preferences: this.state.preferences
        }

        console.log(castingItemNew)
        AuditionsApiService.postCasting(castingItemNew)
            .then(this.context.editCasting(castingItemNew))
            .then(this.props.history.push('/casting'))
    }
    render() {
        return (
            <div className="edit__casting__form">
                <h2>Edit Casting</h2>
                <form method="get" className="add__casting__form" onSubmit = {e => this.handleSubmit(e)}>
                    <label htmlFor="name">Casting Office Name</label>
                    <input id="name" className="name input" name="name" value = {this.state.name}onChange = {e => this.nameChange(e.target.value)}/>
                    <label htmlFor="address">Address</label>
                    <input id="address" className="address input" name="address" value={this.state.address} onChange = {e => this.addressChange(e.target.value)}/>
                    <label htmlFor="email">Email</label>
                    <input id="email" className="email input" name="email" value = {this.state.email} onChange = {e => this.emailChange(e.target.value)}/>
                    <label htmlFor="associates">Associates</label>
                    <input id="associates" className="associates input" name="associates" value = {this.state.associates} onChange = {e => this.associatesChange(e.target.value)}/>
                    <label htmlFor="preferences">Miscellaneous Preferences</label> 
                    <input id="preferences" className="preferences input" name="preferences" value = {this.state.preferences} onChange = {e => this.preferencesChange(e.target.value)}/>
                    <input type="submit" value="submit-casting" />
                </form>
            </div>
        )
    }
}

export default EditCasting