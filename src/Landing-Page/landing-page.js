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

    state = { 
      error: null
     }

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
      const {error} = this.state
        return(
            <div className="landing__page">
              {!!error && <div role="alert" className="alert"><p className="alert__text">{error}</p></div>}
                <h1 className="app__subheading">Log in to Your Audition Tracker</h1>
                <p className="intro">Use your audition tracker to note down your auditions, and store all your audition details. To get started, create an account <Link to = {'/signup'}>here</Link>. <br/>
                To log in to the test account, use the <span className="bold">username test_user</span> with the <span className="bold">password Testtest@123</span></p>
                <main>
                    <form method="get" className="login__form" onSubmit = {this.handleSubmitJwtAuth}>
                        <label htmlFor="user_name" className="login__label"> Username </label>
                        <input type="text" id="user_name" name="user_name" className="login__input" placeholder="nicole_kidman"/>
                        <label htmlFor="password" className="login__label">Password</label>
                        <input type="password" id="password" name="password" className="login__input" placeholder="*****"/>
                        <button disabled={!!error} type="submit" value="submit" className="submit__button">Log In</button>
                    </form>
                </main>
                <footer>Need an account? Click <Link to = {'/signup'}>here</Link> to sign up.</footer>
            </div>
        )
    }
}

export default LandingPage