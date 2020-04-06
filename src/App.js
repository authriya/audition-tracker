import React from 'react';
import Navbar from './Navbar/navbar'
import AuditionPage from './Audition/audition-page'
import AuditionList from './Audition/audition-list'
import AddAudition from './Audition/add-audition'
import CastingPage from './Casting/casting-page'
import CastingList from './Casting/casting-director-list'
import AddCasting from './Casting/add-casting-form'
import Homepage from './Homepage/homepage'
import LandingPage from './Landing-Page/landing-page'
import SignUp from './Signup/sign-up'
import EditCasting from './Casting/edit-casting'
import EditAudition from './Audition/edit-audition'
import {Route} from 'react-router-dom'
import AuthApiService from './services/auth-api-service'
import IdleService from './services/idle-service'
import TokenService from './services/token-service'
import './App.css'

class App extends React.Component {
  
  componentDidMount() {
    /*
      set the function (callback) to call when a user goes idle
      we'll set this to logout a user when they're idle
    */
    IdleService.setIdleCallback(this.logoutFromIdle)

    /* if a user is logged in */
    if (TokenService.hasAuthToken()) {
      /*
        tell the idle service to register event listeners
        the event listeners are fired when a user does something, e.g. move their mouse
        if the user doesn't trigger one of these event listeners,
          the idleCallback (logout) will be invoked
      */
      IdleService.regiserIdleTimerResets()

      /*
        Tell the token service to read the JWT, looking at the exp value
        and queue a timeout just before the token expires
      */
      TokenService.queueCallbackBeforeExpiry(() => {
        /* the timoue will call this callback just before the token expires */
        AuthApiService.postRefreshToken()
      })
    }
  }

  componentWillUnmount() {
    /*
      when the app unmounts,
      stop the event listeners that auto logout (clear the token from storage)
    */
    IdleService.unRegisterIdleResets()
    /*
      and remove the refresh endpoint request
    */
    TokenService.clearCallbackBeforeExpiry()
  }

  logoutFromIdle = () => {
    /* remove the token from localStorage */
    TokenService.clearAuthToken()
    /* remove any queued calls to the refresh endpoint */
    TokenService.clearCallbackBeforeExpiry()
    /* remove the timeouts that auto logout when idle */
    IdleService.unRegisterIdleResets()
    /*
      react won't know the token has been removed from local storage,
      so we need to tell React to rerender
    */
    this.forceUpdate()
  }

  renderNavRoutes() {
    return(
      <>
        {['/auditions/:auditionId'].map(path => (
          <Route
            exact
            key ={path}
            path = {path}
            component = {Navbar}
          />
        ))}
        {['/casting/:castingId'].map(path => (
          <Route 
            exact
            key ={path}
            path = {path}
            component = {Navbar}
          />
        ))}
        <Route exact path = "/auditions" component = {Navbar} />
        <Route exact path ="/casting" component = {Navbar} />
        <Route path ="/add-audition" component = {Navbar} />
        <Route path = "/add-casting" component = {Navbar} />
        <Route path = "/home" component = {Navbar}/>
        <Route path = '/edit-audition/:auditionId' component = {Navbar} />
        <Route path = '/edit-casting/:castingId' component = {Navbar} />
      </>
    )
  }
  renderMainRoutes() {
    return(
    <>
    <Route exact path="/auditions/:auditionId" component = {AuditionPage}/>
    <Route exact path="/casting/:castingId" component = {CastingPage} />
    <Route exact path = "/auditions" component = {AuditionList}/>
    <Route exact path = "/casting" component = {CastingList} />
    <Route path ="/add-audition" component = {AddAudition} />
    <Route path ="/add-casting" component = {AddCasting} />
    <Route path ="/home" component = {Homepage} />
    <Route exact path="/" component = {LandingPage}/>
    <Route path ="/signup" component = {SignUp} />
    <Route path = '/edit-audition/:auditionId' component = {EditAudition} />
    <Route path = '/edit-casting/:castingId' component = {EditCasting} />
    </>
    )}

  render() {
    return(
      <div className="App">
        <nav className ="navbar">{this.renderNavRoutes()}</nav>
        <main>
          {this.renderMainRoutes()}
        </main>
      </div>
    )
  }
}

export default App;