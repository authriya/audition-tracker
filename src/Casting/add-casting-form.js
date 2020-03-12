import React from 'react'
import ApiContext from '../ApiContext'
import AuditionsApiService from '../services/auditions-api-service'
import './add-casting-form.css'

class AddCasting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            email: '',
            associates: '',
            preferences: '',
            error: null
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

        const castingItem = {
            name: this.state.name,
            address: this.state.address,
            email: this.state.email,
            associates: this.state.associates,
            preferences: this.state.preferences
        }
        this.setState({ error: null })
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
            .catch(res => {
                this.setState({ error: res.error })
            })
    }
    render() {
        const {error} = this.state
        return (
            <div className="add__casting__form app">
                <h1 className="app__heading1" id="add__casting__heading">Add a Casting Office or a Casting Director</h1>
                <h2 className = "app__heading2">Congratulations! You made a new industry connection... </h2>
                {!!error && <div role="alert" className="alert"><p className="alert__text">{error}</p></div>}
                <form method="get" className="add__casting__form" onSubmit = {e => this.handleSubmit(e)}>
                    <label className="add__casting__label"for="name">Casting Office Name</label>
                    <input id="name" className="add__casting__input" name="name" onChange = {e => this.nameChange(e.target.value)}/>
                    <label htmlFor="address" className="add__casting__label">Address</label>
                    <input id="address" className="add__casting__input" name="address" onChange = {e => this.addressChange(e.target.value)}/>
                    <label htmlFor="email" className="add__casting__label">Email</label>
                    <input id="email" className="add__casting__input" name="email" onChange = {e => this.emailChange(e.target.value)}/>
                    <label htmlFor="associates" className="add__casting__label">Associates</label>
                    <input id="associates" className="add__casting__input" name="associates" onChange = {e => this.associatesChange(e.target.value)}/>
                    <label htmlFor="preferences" className="add__casting__label">Miscellaneous Preferences</label> 
                    <input id="preferences" className="add__casting__input" name="preferences" placeholder="Do they like props? Email or postcards?" onChange = {e => this.preferencesChange(e.target.value)}/>
                    <button disabled={!!error} type="submit" value="Submit Casting" className="submit__casting">Submit Casting</button>
                </form>
            </div>
        )
    }
}

export default AddCasting