import React from 'react'
import ApiContext from '../ApiContext'
import AuditionsApiService from '../services/auditions-api-service'
import './add-audition.css'

class AddAuditions extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            castingOffice: {
                value: '',
                touched: false
            },
            projectName: {
                value: '',
                touched: false
            },
            projectType: {
                value: '',
                touched: false
            },
            roleType: {
                value: '',
                touched: false
            },
            date: {
                value: '',
                touched: false
            },
            clothingNotes: {
                value: '',
                touched: false
            },
            rating: {
                value: '',
                touched: false
            },
            notes: '',
            callback: false,
            error: null
        }
    }
    static contextType = ApiContext

    castingOfficeChange(castingOffice) {
        this.setState({
            castingOffice: {
                value: castingOffice,
                touched: true
            }
        })
    }

    validateCasting() {
        if(this.state.castingOffice.value.trim().length === 0) {
            return 'Casting Office is required'
        }
    }

    projectNameChange(projectName) {
        this.setState({
            projectName: {
                value: projectName,
                touched: true
            }
        })
    }

    validateName() {
        if(this.state.projectName.value.trim().length === 0) {
            return 'Project Name is required'
        }
    }

    projectTypeChange(projectType) {
        this.setState({
            projectType: {
                value: projectType,
                touched: true
            }
        })
    }

    validateProjectType() {
        if(this.state.projectType.value.trim().length === 0) {
            return 'Project Type is Required'
        }
    }

    roleTypeChange(roleType) {
        this.setState({
            roleType: {
                value: roleType,
                touched: true
            }
        })
    }

    validateRoleType() {
        if(this.state.roleType.value.trim().length === 0) {
            return 'Role Type is required'
        }
    }

    dateChange(date) {
        this.setState({
            date: {
                value: date,
                touched: true
            }
        })
    }

    validateDate() {
        if(this.state.date.value.trim().length === 0) {
            return 'Date is required'
        }
    }

    clothingNotesChange(clothingNotes) {
        this.setState({
            clothingNotes: {
                value: clothingNotes,
                touched: true
            }
        })
    }


    validateClothingNotes() {
        if(this.state.clothingNotes.value.trim().length === 0) {
            return 'Clothing Notes is required'
        }
    }

    ratingChange(rating) {
        this.setState({
            rating: {
                value: rating,
                touched: true
            }
        })
    }

    validateRating() {
        if(this.state.clothingNotes.value.trim().length===0) {
            return 'Rating is required'
        }
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

        const audition = {
            castingOffice: this.state.castingOffice.value,
            projectName: this.state.projectName.value,
            projectType: this.state.projectType.value,
            roleType: this.state.roleType.value,
            date: this.state.date.value,
            clothingNotes: this.state.clothingNotes.value,
            rating: this.state.rating.value,
            notes: this.state.notes,
            callback: this.state.callback
        }

        AuditionsApiService.postAudition(audition)
            .then(res => {
                if(!res.ok) {
                    return res.json().then(error=>{
                        throw error
                    })
                }
                return res.json()
            })
            .then((data) => {
                this.setState({
                    castingOffice: {
                        value: '',
                        touched: false
                    },
                    projectName: {
                        value: '',
                        touched: false
                    },
                    projectType: {
                        value: '',
                        touched: false
                    },
                    roleType: {
                        value: '',
                        touched: false
                    },
                    date: {
                        value: '',
                        touched: false
                    },
                    clothingNotes: {
                        value: '',
                        touched: false
                    },
                    rating: {
                        value: '',
                        touched: false
                    },
                    notes: '',
                    callback: false})
                this.context.addAudition(data)
                this.props.history.push('/auditions')
            })
            .catch(res => {
                this.setState({ error: res.error })
              })
    }
    render() {
        const {casting} = this.context
        const {error} = this.state

        return(
            <div className="add__audition__page app">
            <h2 className="app__heading1"> Add An Audition </h2>
            <h3 className="app__heading2">You're one step closer...</h3>
            <div className="creation__hint">* required field</div>
            {!!error && <div role="alert" className="alert"><p className="alert__text">{error}</p></div>}
            <form method="get" className="add__audition__form" onSubmit = {e => this.handleSubmit(e)}>
                <label htmlFor="casting-office" className="audition__label">Who called you in? *</label>
                <select name="casting-office" id="casting-office" className="audition__input" onClick = {e => this.castingOfficeChange(e.target.value)} required>
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