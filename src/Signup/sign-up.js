import React from 'react'
import AuthApiService from '../services/auth-api-service'
import './sign-up.css'
class SignUp extends React.Component {
    static defaultProps = {
        history: {
          push: () => {},
        },
      }

    state = { error: null }
    
    handleSignUpSuccess = user => {
        const { history } = this.props
        history.push('/login')
      }
    handleSubmit = e => {
        e.preventDefault()
        const { user_name, password } = e.target
    
        this.setState({ error: null })
        AuthApiService.postUser({
          user_name: user_name.value,
          password: password.value,
        })
          .then(user => {
            user_name.value = ''
            password.value = ''
            this.handleSignUpSuccess()
          })
          .catch(res => {
            this.setState({ error: res.error })
          })
      }
    
    render() {
        return(
            <div className ="App__signup">
                <h1>Your Acting Journey Begins Here</h1>
                <h2 class="direction">Sign Up For An Account Below</h2>
                <form method="get" class="signup__form" onSubmit={this.handleSubmit}>
                    <label htmlFor="user_name" class="signup__label"> Username </label>
                    <input type="text" id="user_name" name="user_name" class="signup__input" placeholder="nicole_kidman"/>
                    <label htmlFor="password" class="signup__label">Password</label>
                    <input type="password" id="password" name="password" class="signup__input" placeholder="*****"/>
                    <input type="submit" value="Sign Up" class="submit__button"/>
                </form>
            </div>
        )
    }
}

export default SignUp