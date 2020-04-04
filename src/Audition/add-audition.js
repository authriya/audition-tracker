import React from 'react'
import ApiContext from '../ApiContext'
import AuditionsApiService from '../services/auditions-api-service'
import './add-audition.css'

class AddAuditions extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            castingOffice: '',
            projectName: '',
            projectType: '',
            roleType: '',
            date: '',
            clothingNotes: '',
            rating: '',
            notes: '',
            callback: false,
            error: null
        }
    }
    static contextType = ApiContext

    castingOfficeChange(castingOffice) {
        this.setState({
            castingOffice
        })
    }

    projectNameChange(projectName) {
        this.setState({
            projectName
        })
    }

    projectTypeChange(projectType) {
        this.setState({
            projectType
        })
    }

    roleTypeChange(roleType) {
        this.setState({
            roleType
        })
    }

    dateChange(date) {
        this.setState({
            date
        })
    }

    clothingNotesChange(clothingNotes) {
        this.setState({
            clothingNotes
        })
    }

    ratingChange(rating) {
        this.setState({
            rating
        })
    }

    notesChange(notes) {
        this.setState({
            notes
        })
    }

    callbackChange() {
        this.setState(prevState => ({
            callback: !prevState.callback
        }))
    }

    handleSubmit(e) {
        e.preventDefault();

        let {auditions} = this.context
        var last =  function(array) {
            if (array.length === 0) 
              return null;
            else
               return array[array.length - 1];  
        };
        let lastItem = last(auditions)

        var newId = function(item) {
            if (item == null) {
                let id = 1
                return id
            } else {
                let id = item.id + 1
                return id
            }
        }

        const audition = {
            id: newId(lastItem),
            castingOffice: this.state.castingOffice,
            projectName: this.state.projectName,
            projectType: this.state.projectType,
            roleType: this.state.roleType,
            date: this.state.date,
            clothingNotes: this.state.clothingNotes,
            rating: this.state.rating,
            notes: this.state.notes,
            callback: this.state.callback
        }

        this.setState({error: null})

        AuditionsApiService.postAudition(audition)
            .then((data) => {
                this.context.addAudition(data)
            })
            .then(() => {setTimeout(
                this.setState({
                    castingOffice: '',
                    projectName: '',
                    projectType: '',
                    roleType: '',
                    date: '',
                    clothingNotes: '',
                    rating: '',
                    notes: '',
                    callback: false,
                    }), 1000
            )})
            .catch(res => {
                this.setState({ error: res.error })
              })
            .then(this.props.history.push('/auditions'))
    }
    render() {
        const {casting} = this.context

        return(
            <div className="add__audition__page app">
            <h2 className="app__heading1"> Add An Audition </h2>
            <h3 className="app__heading2">You're one step closer...</h3>
            <div className="creation__hint">* required field</div>
            <form method="get" className="add__audition__form" onSubmit = {e => this.handleSubmit(e)}>
                <label htmlFor="casting-office" className="audition__label">Who called you in? *</label>
                <select name="casting-office" id="casting-office" className="audition__input" onChange = {e => this.castingOfficeChange(e.target.value)} required>
                    <option value = ''>...</option>
                    {casting.map(cast => (
                        <option key = {cast.id} value = {cast.id}>{cast.name}</option>
                    ))}
                </select>
                <label htmlFor="project-name" className="audition__label">Project Name *</label>
                <input id="project-name" type ="text"name="project-name" className="audition__input" onChange = {e => this.projectNameChange(e.target.value)} required/>
                <fieldset id="project-type">
                    <legend htmlFor="project-type" className="audition__label">Project Type *</legend>
                    <span className="audition__input"><input type="radio" id ="film" name="projectType" value="Film" onClick = {e => this.projectTypeChange(e.target.value)} required/>
                    <label htmlFor="film" className="audition__label__radio">Film</label></span>
                    <span className="audition__input"><input type="radio" id ="tv" name ="projectType" value="TV" onClick = {e => this.projectTypeChange(e.target.value)} required/>
                    <label htmlFor="tv" className="audition__label__radio">Television</label></span>
                    <span className="audition__input"><input type="radio" id ="theatre" name ="projectType" value="Theatre" onClick = {e => this.projectTypeChange(e.target.value)} required/>
                    <label htmlFor="theatre" className="audition__label__radio">Theatre</label></span>
                    <span className="audition__input"><input type="radio" id ="commercial" name ="projectType" value="Commercial" onClick = {e => this.projectTypeChange(e.target.value)} required/>
                    <label htmlFor="commercial" className="audition__label__radio">Commercial</label></span>
                </fieldset>
                <fieldset id="role-type">
                    <legend htmlFor="role-type" className="audition__label">Role Type *</legend>
                    <span className="audition__input"><input type="radio" id ="series-regular" name="roleType" value ="Series Regular" onClick = {e => this.roleTypeChange(e.target.value)} required/>
                    <label htmlFor="series-regular" className="audition__label__radio">Series Regular</label></span>
                    <span className="audition__input"><input type="radio" id ="guest-star" name="roleType" value ="Guest Star" onClick = {e => this.roleTypeChange(e.target.value)} required/>
                    <label htmlFor="guest-star" className="audition__label__radio">Guest Star</label></span>
                    <span className="audition__input"><input type="radio" id ="co-star" name="roleType" value ="Co-Star" onClick = {e => this.roleTypeChange(e.target.value)} required/>
                    <label htmlFor="co-star" className="audition__label__radio">Co-Star</label></span>
                    <span className="audition__input"><input type="radio" id ="lead" name="roleType" value ="Lead" onClick = {e => this.roleTypeChange(e.target.value)} required/>
                    <label htmlFor="lead" className="audition__label__radio">Lead</label></span>
                    <span className="audition__input"><input type="radio" id="supporting" name="roleType" value ="Supporting" onClick = {e => this.roleTypeChange(e.target.value)} required/>
                    <label htmlFor="supporting" className="audition__label__radio">Supporting</label></span>
                </fieldset>
                <label htmlFor="date" className="audition__label">
                    When was it? *
                    <input type="date" id="date" className="audition__input" name="date" onChange = {e => this.dateChange(e.target.value)} required/>
                </label>
                <fieldset action="upload.php" method="post" className="clothing__form">
                    <label htmlFor="clothing" className="audition__label">What did you wear? *</label>
                    <input type="text" id="clothing" placeholder="Outfit Notes..." className="audition__input" onChange = {e => this.clothingNotesChange(e.target.value)} required/>
                </fieldset>
                <fieldset id="rating">
                    <legend className="audition__label">How'd it go? *</legend>
                    <span className="audition__input"><input type="radio" id="star5" name="rating" value="5" onClick = {e => this.ratingChange(e.target.value)} required/>
                    <label htmlFor="star5" title="Rocks!" className="audition__label__radio">5 stars</label></span>
                    <span className="audition__input"><input type="radio" id="star4" name="rating" value="4" onClick = {e => this.ratingChange(e.target.value)} required/>
                    <label htmlFor="star4" title="Pretty good" className="audition__label__radio">4 stars</label></span>
                    <span className="audition__input"><input type="radio" id="star3" name="rating" value="3" onClick = {e => this.ratingChange(e.target.value)} required/>
                    <label htmlFor="star3" title="Meh"className="audition__label__radio">3 stars</label></span>
                    <span className="audition__input"><input type="radio" id="star2" name="rating" value="2" onClick = {e => this.ratingChange(e.target.value)} required/>
                    <label htmlFor="star2" title="Kinda bad"className="audition__label__radio">2 stars</label></span>
                    <span className="audition__input"><input type="radio" id="star1" name="rating" value="1" onClick = {e => this.ratingChange(e.target.value)} required/>
                    <label htmlFor="star1" title="Sucks big time"className="audition__label__radio">1 star</label></span>
                </fieldset>
                <label className="audition__label" htmlFor="other-notes">Other Notes</label>
                <input type="text" className="audition__input" id="other-notes" name="other-notes" onChange = {e => this.notesChange(e.target.value)}/>
                <label htmlFor ="callback__checkbox" className="audition__label__radio callback">Callback?</label>
                <input type="checkbox" id="callback__checkbox" name="callback__checkbox" className="checkbox" onChange = {e => this.callbackChange()}/>
                <button type="submit" value="Submit Audition" name="submit" className="add__audition__submit">Submit Audition</button>
            </form>
            </div>
        )
    }
}

export default AddAuditions