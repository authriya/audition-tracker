import React from 'react'
import ApiContext from '../ApiContext'
import AuditionsApiService from '../services/auditions-api-service'

class AddCasting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            email: '',
            associates: '',
            preferences: ''
        }
    }

    static contextType= ApiContext

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
        const {casting} = this.context

        const castingItem = {
            id: (casting.length +1).toString(),
            name: this.state.name,
            address: this.state.address,
            email: this.state.email,
            associates: this.state.associates,
            preferences: this.state.preferences
        }

        console.log(castingItem)
        AuditionsApiService.postCasting(castingItem)
            .then(this.context.addCasting(castingItem))
        
            .then(() => {setTimeout(
                this.setState({
                    name: '',
                    address: '',
                    email: '',
                    associates: '',
                    preferences: ''
                    }), 1000
            )})
            .then(this.props.history.push('/casting'))
    }
    render() {
        return (
            <div className="add__casting__form">
                <form method="get" className="add__casting__form" onSubmit = {e => this.handleSubmit(e)}>
                    <label for="name">Casting Office Name</label>
                    <input id="name" className="name input" name="name" onChange = {e => this.nameChange(e.target.value)}/>
                    <label for="address">Address</label>
                    <input id="address" className="address input" name="address" onChange = {e => this.addressChange(e.target.value)}/>
                    <label for="email">Email</label>
                    <input id="email" className="email input" name="email" onChange = {e => this.emailChange(e.target.value)}/>
                    <label for="associates">Associates</label>
                    <input id="associates" className="associates input" name="associates" onChange = {e => this.associatesChange(e.target.value)}/>
                    <label for="preferences">Miscellaneous Preferences</label> 
                    <input id="preferences" className="preferences input" name="preferences" placeholder="Do they like props? Email or postcards?" onChange = {e => this.preferencesChange(e.target.value)}/>
                    <input type="submit" value="submit-casting" />
                </form>
            </div>
        )
    }
}

export default AddCasting