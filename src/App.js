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
import EditAudition from './Audition/add-audition'
import dummyStore from './dummy-store'
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

  addAudition = (audition) => {
    this.setState({
      auditions: [...this.state.auditions, audition]
    })
  }

  addCasting = (castingItem) => {
    this.setState({
      casting: [...this.state.casting, castingItem]
    })
  }

  editCasting = (castingItemNew) => {
    const newCasting = this.state.casting.slice()
    const idToUpdate = (Number(castingItemNew.id) - 1)
    const castingItemUpdate = {
      id: castingItemNew.id,
      name: castingItemNew.name,
      address: castingItemNew.address,
      email: castingItemNew.email,
      associates: castingItemNew.associates,
      preferences: castingItemNew.preferences
    }
    newCasting[idToUpdate] = castingItemUpdate
    this.setState({
        casting: newCasting
      })
  }

  editAudition = (auditionNew) => {
    const newAuditions = this.state.auditions.slice()
    const idToUpdate = (Number(auditionNew.id) -1)
    const auditionUpdate = {
      id: auditionNew.id,
      castingOffice: auditionNew.castingOffice,
      projectName: auditionNew.projectName,
      projectType: auditionNew.projectType,
      roleType: auditionNew.roleType,
      date: auditionNew.date,
      clothingNotes: auditionNew.clothingNotes,
      rating: auditionNew.rating,
      notes: auditionNew.notes,
      callback: auditionNew.callback
    }

    newAuditions[idToUpdate] = auditionUpdate

    this.setState({
      auditions: newAuditions
    })
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
    const value = {
      casting: this.state.casting,
      auditions: this.state.auditions,
      addAudition: this.addAudition,
      addCasting: this.addCasting,
      editCasting: this.editCasting
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