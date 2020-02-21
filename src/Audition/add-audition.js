import React from 'react'

class AddAuditions extends React.Component {
    render() {
        return(
            <div className="add__audition__page">
            <h2> Add An Audition </h2>
            <form method="get" className="add__audition__form">
                <label for="casting-office" className="audition__label">Who called you in?</label>
                <select name="casting-office" id="casting-office" className="audition__input">
                    <option value="placeholder">Placeholder for casting office data</option>
                </select>
                <label for="project-name" className="audition__label">Project Name</label>
                <input id="project-name" name="project-name" className="audition__input"/>
                <fieldset id="project-type">
                    <legend for="project-type" className="audition__label">Project Type</legend>
                    <input type="radio" id ="film" className="audition__input" name="film" value="film"/>
                    <label for="film" className="audition__label__radio">Film</label>
                    <input type="radio" id ="tv" className="audition__input" name="tv" value="tv"/>
                    <label for="tv" className="audition__label__radio">Television</label>
                    <input type="radio" id ="theatre" className="audition__input" name="theatre" value="theatre"/>
                    <label for="theatre" className="audition__label__radio">Theatre</label>
                    <input type="radio" id ="commercial" class="audition__input" name="commercial" value="commercial"/>
                    <label for="commercial" className="audition__label__radio">Commercial</label>
                </fieldset>
                <fieldset id="role-type">
                    <legend for="role-type" className="audition__label">Role Type</legend>
                    <input type="radio" id ="series-regular" className="audition__input" name="series-regular"/>
                    <label for="series-regular" className="audition__label__radio">Series Regular</label>
                    <input type="radio" id ="guest-star" className="audition__input" name="guest-star"/>
                    <label for="guest-star" className="audition__label__radio">Guest Star</label>
                    <input type="radio" id ="co-star" className="audition__input" name="co-star"/>
                    <label for="co-star" className="audition__label__radio">Co-Star</label>
                    <input type="radio" id ="lead" className="audition__input" name="lead"/>
                    <label for="lead" className="audition__label__radio">Lead</label>
                    <input type="radio" id="supporting" className="audition__input" name="supporting"/>
                    <label for="supporting">Supporting</label>
                </fieldset>
                <label for="date">
                    When was it?
                    <input type="date" id="date" className="audition__input" name="date"/>
                </label>
                <fieldset action="upload.php" method="post" className="clothing__form">
                    <label for="clothing" className="audition__label">What did you wear?</label>
                    <input type="file" name="clothing" id="clothing"/>
                    <input type="submit" value="Upload Image" name="submit"/>
                    <input type="text" id="clothing" placeholder="Outfit Notes..." className="audition__input"/>
                </fieldset>
                <fieldset id="rating">
                    <legend>How'd it go?</legend>
                    <input type="radio" id="star5" name="rating" value="5" />
                    <label for="star5" title="Rocks!">5 stars</label>
                    <input type="radio" id="star4" name="rating" value="4" />
                    <label for="star4" title="Pretty good">4 stars</label>
                    <input type="radio" id="star3" name="rating" value="3" />
                    <label for="star3" title="Meh">3 stars</label>
                    <input type="radio" id="star2" name="rating" value="2" />
                    <label for="star2" title="Kinda bad">2 stars</label>
                    <input type="radio" id="star1" name="rating" value="1" />
                    <label for="star1" title="Sucks big time">1 star</label>
                </fieldset>
                <label className="audition__label" for="other-notes">Other Notes</label>
                <input type="text" className="audition__input" id="other-notes" name="other-notes"/>
                <label for ="callback__checkbox">Callback?</label>
                <input type="checkbox" id="callback__checkbox" name="callback__checkbox" className="checkbox"/>
                <input type="submit" value="Submit Audition" name="submit"/>
            </form>
            </div>
        )
    }
}

export default AddAuditions