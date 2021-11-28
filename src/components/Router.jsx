import React from 'react'
import { Route,Switch } from 'react-router-dom';
import Navigation from './Navigation'
import Banner from './Banner'
import About from './About'
import Menu from './Menu'
import Expert from './Expert'
import Testimonial from './Testimonial'
import Contact from './Contact'



const Router = () => {
    return(
        <>
        <Navigation/>
            <Switch>
                <Route exact path='/' component={Banner} />
                <Route  path='/about' component={About} />
                <Route  path='/menu' component={Menu} />
                <Route  path='/expert' component={Expert} />
                <Route  path='/testimonials' component={Testimonial} />
                <Route  path='/contact' component={Contact} />
            </Switch>
        </>
    )
}


export default Router

