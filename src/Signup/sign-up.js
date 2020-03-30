import React from 'react'
import AuthApiService from '../services/auth-api-service'
import './sign-up.css'
import AddButton from '../AddButton/AddButton'
import {Link} from 'react-router-dom'
class SignUp extends React.Component {
    static defaultProps = {
        history: {
          push: () => {},
        },
      }

    state = { error: null }

    setError() {
      this.setState({
        error: null
      })
    }
    
    handleSignUpSuccess = user => {
        const { history } = this.props
        history.push('/')
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
      const {error} = this.state
        return(
            <div className ="App__signup">
                <AddButton
                  tag={Link}
                  to='/'
                  type='button'
                  className='Signup__back-button'> 
                  <i className="fas fa-angle-left"></i> Back </AddButton>
              <div className="main__form">
              {!!error && <div role="alert" className="alert"><p className="alert__text">{error}</p></div>}
                <h1 className="signup__heading">Your Acting Journey Begins Here</h1>
                <h2 className="direction">Sign Up For An Account Below</h2>
                <form method="get" className="signup__form" onSubmit={this.handleSubmit}>
                    <label htmlFor="user_name" className="signup__label"> Username </label>
                    <input type="text" id="user_name" name="user_name" className="signup__input" placeholder="nicole_kidman" onChange={e => this.setError()}/>
                    <label htmlFor="password" className="signup__label">Password</label>
                    <input type="password" id="password" name="password" className="signup__input" placeholder="*****" onChange={e => this.setError()}/>
                    <button disabled={!!error} type="submit" value="Sign Up" className="submit__button">Sign Up</button>
                </form>
              </div>
              <footer>Made an account? Click <Link to = {'/'}>here</Link> to log in.</footer>
            </div>
        )
    }
}

export default SignUp