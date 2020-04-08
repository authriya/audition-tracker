import React from 'react'
import './homepage.css'
import ApiContext from '../ApiContext'

class Homepage extends React.Component {
    static contextType = ApiContext
    componentDidMount() {
        if(this.context.auditions.length === 0 || this.context.casting.length === 0) {
            this.context.handleLoginSuccess()
        }
    }
    render() {
        return(
            <div className="app__homepage app">
                <div className="app__info">
                    <h1 className="app__heading1">How To Use This App</h1>
                    <h2 className ="app__heading2">Made By An Actor. For Actors.</h2>
                    <p>So, it's 9 pm and your agent just emails you that the audition you had 3 weeks ago wants to see you for a callback– and you have no idea what you wore.Or, a prospective manager wants to know which casting directors have called you in previously– and your mind just suddenly blanks. It's been a couple weeks and no one's called you in, and you're convinced everyone hates you, and your career is going nowhere, because there's no way for you to quantify how busy you were before your dry spell. 
                    </p>
                    <p>All these scenarios are likely all too familiar if you, like me, are a regularly auditioning actor. So I set out to solve the problem– with an Audition Tracker. Every time you make a new industry connection- add it to the casting list! Every time you have an audition, post it on your audition page, and assign it to the appropriate casting office so you'll have a list of what they're calling you in for! You can also keep track of what you wore to each audition, so you don't have to worry the dreaded last minute "WHAT ON EARTH WAS I WEARING" panic. It's a pretty great solution for the modern, busy, working actor.</p>
                </div>
                <div className="app__inspo">
                    <h1 className="app__heading1">Some inspiration</h1>
                    <h2 className="app__heading2">For when the audition game gets you down</h2>
                    <p>"Know what your job is. You’re not going there to get a job. You’re going there to present what you do. You act. And there it is. And walk away. There’s power in that."</p>
                    <p className="by"> - Bryan Cranston</p>
                    <p>“I became an artist and thank God I did, because we are the only profession that celebrates what it means to live a life.”</p>
                    <p className="by"> - Viola Davis</p>
                    <p>“If you get a chance to act in a room that somebody else has paid rent for, then you’re given a free chance to practice your craft.”</p>
                    <p className="by"> - Phillip Seymour Hoffman</p>
                    <p>“I was armored enough to come out to Hollywood. And I knew that I would get told ‘no' a million times.”</p>
                    <p className="by"> - Taraji P. Henson</p>
                    <p>“Goals on the road to achievement cannot be achieved without discipline and consistency.”</p>
                    <p className="by"> - Denzel Washington</p>
                    <p>“Giving voice to characters that have no other voice—that’s the great worth of what we do.”</p>
                    <p className="by"> - Meryl Streep</p>
                </div>
            </div>
        )
    }
}

export default Homepage