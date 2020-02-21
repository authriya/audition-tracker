import React from 'react'

class LandingPage extends React.Component {
    render() {
        return(
            <div className="landing__page">
                <h1 className="app__subheading">Log In To Your Audition Tracker</h1>
                <main>
                    <form method="get" className="login__form">
                        <label for="username" className="login__label"> Username </label>
                        <input type="text" id="username" name="username" className="login__input" placeholder="nicole_kidman"/>
                        <label for="password" className="login__label">Password</label>
                        <input type="password" id="password" name="password" className="login__input" placeholder="*****"/>
                        <input type="submit" value="submit" className="submit__button"/>
                    </form>
                </main>
                <footer>Need an account? Click here to sign up.</footer>
            </div>
        )
    }
}

export default LandingPage