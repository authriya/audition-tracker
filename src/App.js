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
import dummyStore from './dummy-store'
import {findCasting, findAudition, getAuditionsForCasting} from './route-helpers'
import {Route} from 'react-router-dom';
import ApiContext from './ApiContext';

class App extends React.Component {
  state = {
    casting: [],
    auditions: []
  };
  
  componentDidMount() {
    setTimeout(() => this.setState(dummyStore));
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
      </>
    )
  }
  renderMainRoutes() {
    return(
    <>
    <Route path="/auditions/:auditionId" component = {AuditionPage}/>
    <Route path="/casting/:castingId" component = {CastingPage} />
    <Route exact path = "/auditions" component = {AuditionList}/>
    <Route exact path = "/casting" component = {CastingList} />
    <Route path ="/add-audition" component = {AddAudition} />
    <Route path ="/add-casting" component = {AddCasting} />
    <Route path ="/home" component = {Homepage} />
    <Route exact path="/" component = {LandingPage}/>
    <Route path ="/signup" component = {SignUp} />
    </>
    )}

  render() {
    const value = {
      casting: this.state.casting,
      auditions: this.state.auditions
    }
    return(
      <ApiContext.Provider value = {value}>
      <div className="App">
        <nav className ="navbar">{this.renderNavRoutes()}</nav>
        <main>
          {this.renderMainRoutes()}
        </main>
      </div>
      </ApiContext.Provider>
    )
  }
}

export default App;