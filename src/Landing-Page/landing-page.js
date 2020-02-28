import React from 'react'
import {Link} from 'react-router-dom'
import AuthApiService from '../services/auth-api-service'
import './landing-page.css'

class LandingPage extends React.Component {
    static defaultProps = {
        history: {
            push: () => {},
          }
    }

    state = { error: null }

    handleLoginSuccess = () => {
        this.props.history.push('/home')
    }

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { user_name, password } = ev.target
    
        AuthApiService.postLogin({
          user_name: user_name.value,
          password: password.value,
        })
          .then(res => {
            user_name.value = ''
            password.value = ''
            this.handleLoginSuccess()
          })
          .catch(res => {
            this.setState({ error: res.error })
          })
      }

    render() {
        return(
            <div className="landing__page">
                <h1 className="app__subheading">Log In To Your Audition Tracker</h1>
                <main>
                    <form method="get" className="login__form" onSubmit = {this.handleSubmitJwtAuth}>
                        <label htmlFor="user_name" className="login__label"> Username </label>
                        <input type="text" id="user_name" name="user_name" className="login__input" placeholder="nicole_kidman"/>
                        <label htmlFor="password" className="login__label">Password</label>
                        <input type="password" id="password" name="password" className="login__input" placeholder="*****"/>
                        <input type="submit" value="submit" className="submit__button"/>
                    </form>
                </main>
                <footer>Need an account? Click <Link to = {'/signup'}>here</Link> to sign up.</footer>
            </div>
        )
    }
}

export default LandingPage