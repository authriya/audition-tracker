import React from 'react'
import ApiContext from '../ApiContext'
import AuditionsApiService from '../services/auditions-api-service'

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
            callback: false
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
        const {auditions} = this.context

        const audition = {
            id: (auditions.length + 1).toString(),
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
        console.log(audition)
        AuditionsApiService.postAudition(audition)
            .then(this.context.addAudition(audition))
            .then(() => {
                this.setState({
                    castingOffice: '',
                    projectName: '',
                    projectType: '',
                    roleType: '',
                    date: '',
                    clothingNotes: '',
                    rating: '',
                    notes: '',
                    callback: false
                })
            })
            .then(this.props.history.push('/auditions'))
    }
    render() {
        const {casting} = this.context

        return(
            <div className="add__audition__page">
            <h2> Add An Audition </h2>
            <form method="get" className="add__audition__form" onSubmit = {e => this.handleSubmit(e)}>
                <label htmlFor="casting-office" className="audition__label">Who called you in?</label>
                <select name="casting-office" id="casting-office" className="audition__input" onChange = {e => this.castingOfficeChange(e.target.value)}>
                    <option value = {null}>...</option>
                    {casting.map(cast => (
                        <option key = {cast.id} value = {cast.id}>{cast.name}</option>
                    ))}
                </select>
                <label htmlFor="project-name" className="audition__label">Project Name</label>
                <input id="project-name" name="project-name" className="audition__input" onChange = {e => this.projectNameChange(e.target.value)}/>
                <fieldset id="project-type">
                    <legend htmlFor="project-type" className="audition__label">Project Type</legend>
                    <input type="radio" id ="film" className="audition__input" name="projectType" value="Film" onChange = {e => this.projectTypeChange(e.target.value)}/>
                    <label htmlFor="film" className="audition__label__radio">Film</label>
                    <input type="radio" id ="tv" className="audition__input" name ="projectType" value="TV" onChange = {e => this.projectTypeChange(e.target.value)}/>
                    <label htmlFor="tv" className="audition__label__radio">Television</label>
                    <input type="radio" id ="theatre" className="audition__input" name ="projectType" value="Theatre" onChange = {e => this.projectTypeChange(e.target.value)}/>
                    <label htmlFor="theatre" className="audition__label__radio">Theatre</label>
                    <input type="radio" id ="commercial" class="audition__input" name ="projectType" value="Commercial" onChange = {e => this.projectTypeChange(e.target.value)}/>
                    <label htmlFor="commercial" className="audition__label__radio">Commercial</label>
                </fieldset>
                <fieldset id="role-type">
                    <legend htmlFor="role-type" className="audition__label">Role Type</legend>
                    <input type="radio" id ="series-regular" className="audition__input" name="roleType" value ="Series Regular" onChange = {e => this.roleTypeChange(e.target.value)}/>
                    <label htmlFor="series-regular" className="audition__label__radio">Series Regular</label>
                    <input type="radio" id ="guest-star" className="audition__input" name="roleType" value ="Guest Star" onChange = {e => this.roleTypeChange(e.target.value)}/>
                    <label htmlFor="guest-star" className="audition__label__radio">Guest Star</label>
                    <input type="radio" id ="co-star" className="audition__input" name="roleType" value ="Co-Star"onChange = {e => this.roleTypeChange(e.target.value)}/>
                    <label htmlFor="co-star" className="audition__label__radio">Co-Star</label>
                    <input type="radio" id ="lead" className="audition__input" name="roleType" value ="Lead" onChange = {e => this.roleTypeChange(e.target.value)}/>
                    <label htmlFor="lead" className="audition__label__radio">Lead</label>
                    <input type="radio" id="supporting" className="audition__input" name="roleType" value ="Supporting" onChange = {e => this.roleTypeChange(e.target.value)}/>
                    <label htmlFor="supporting">Supporting</label>
                </fieldset>
                <label htmlFor="date">
                    When was it?
                    <input type="date" id="date" className="audition__input" name="date" onChange = {e => this.dateChange(e.target.value)}/>
                </label>
                <fieldset action="upload.php" method="post" className="clothing__form">
                    <label htmlFor="clothing" className="audition__label">What did you wear?</label>
                    <input type="text" id="clothing" placeholder="Outfit Notes..." className="audition__input" onChange = {e => this.clothingNotesChange(e.target.value)}/>
                </fieldset>
                <fieldset id="rating">
                    <legend>How'd it go?</legend>
                    <input type="radio" id="star5" name="rating" value="5" onChange = {e => this.ratingChange(e.target.value)}/>
                    <label htmlFor="star5" title="Rocks!">5 stars</label>
                    <input type="radio" id="star4" name="rating" value="4" onChange = {e => this.ratingChange(e.target.value)}/>
                    <label htmlFor="star4" title="Pretty good">4 stars</label>
                    <input type="radio" id="star3" name="rating" value="3" onChange = {e => this.ratingChange(e.target.value)}/>
                    <label htmlFor="star3" title="Meh">3 stars</label>
                    <input type="radio" id="star2" name="rating" value="2" onChange = {e => this.ratingChange(e.target.value)}/>
                    <label htmlFor="star2" title="Kinda bad">2 stars</label>
                    <input type="radio" id="star1" name="rating" value="1" onChange = {e => this.ratingChange(e.target.value)}/>
                    <label htmlFor="star1" title="Sucks big time">1 star</label>
                </fieldset>
                <label className="audition__label" for="other-notes">Other Notes</label>
                <input type="text" className="audition__input" id="other-notes" name="other-notes" onChange = {e => this.notesChange(e.target.value)}/>
                <label htmlFor ="callback__checkbox">Callback?</label>
                <input type="checkbox" id="callback__checkbox" name="callback__checkbox" className="checkbox" onChange = {e => this.callbackChange()}/>
                <input type="submit" value="Submit Audition" name="submit"/>
            </form>
            </div>
        )
    }
}

export default AddAuditions