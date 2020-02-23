import React from 'react'
import './sign-up.css'
class SignUp extends React.Component {
    render() {
        return(
            <div className ="App__signup">
                <h1>Your Acting Journey Begins Here</h1>
                <h2 class="direction">Sign Up For An Account Below</h2>
                <form method="get" class="signup__form">
                    <label htmlFor="username" class="signup__label"> Username </label>
                    <input type="text" id="username" name="username" class="signup__input" placeholder="nicole_kidman"/>
                    <label htmlFor="password" class="signup__label">Password</label>
                    <input type="password" id="password" name="password" class="signup__input" placeholder="*****"/>
                    <input type="submit" value="Sign Up" class="submit__button"/>
                </form>
            </div>
        )
    }
}

export default SignUp