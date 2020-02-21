import React from 'react'

class AddCasting extends React.Component {
    render() {
        return (
            <div className="add__casting__form">
                <label for="name">Casting Office Name</label>
                <input id="name" className="name input" name="name"/>
                <label for="address">Address</label>
                <input id="address" className="address input" name="address"/>
                <label for="email">Email</label>
                <input id="email" className="address input" name="email"/>
                <label for="associates">Associates</label>
                <input id="associates" className="associates input" name="associates"/>
                <label for="preferences">Miscellaneous Preferences</label> 
                <input id="preferences" className="preferences input" name="preferences" placeholder="Do they like props? Email or postcards?"/>
                <input type="submit" value="submit-casting" />
            </div>
        )
    }
}

export default AddCasting