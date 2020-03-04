import React from 'react'
import './homepage.css'

class Homepage extends React.Component {
    render() {
        return(
        <div className="app__homepage app">
            <div className="app__info">
                <h1 className="app__heading1">How To Use This App</h1>
                <h2 className ="app__heading2">Made By An Actor. For Actors.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lectus vitae orci viverra tempus. Sed malesuada leo felis, sit amet tristique velit facilisis sit amet. Fusce tempus mattis elit sit amet efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam venenatis vitae neque vel consectetur. Etiam sollicitudin neque ac vehicula euismod. Fusce quis diam sagittis, mattis mauris sed, congue felis. Fusce lacinia velit sit amet nulla luctus fringilla. Maecenas a fringilla sem.</p>
            </div>
            <div class="app__inspo">
                <h1 className="app__heading1">Some inspiration</h1>
                <h2 className="app__heading2">For when the audition game gets you down</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lectus vitae orci viverra tempus. Sed malesuada leo felis, sit amet tristique velit facilisis sit amet. Fusce tempus mattis elit sit amet efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam venenatis vitae neque vel consectetur. Etiam sollicitudin neque ac vehicula euismod. Fusce quis diam sagittis, mattis mauris sed, congue felis. Fusce lacinia velit sit amet nulla luctus fringilla. Maecenas a fringilla sem.</p>
            </div>
        </div>
        )
    }
}

export default Homepage