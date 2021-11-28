import React from 'react'
import {NavLink} from 'react-router-dom'

const Banner =() => {

    return(
        <section className="banner" id="banner">
            <div className="content">
                <h2><i>Food That You Cant't Resist</i></h2>
                <p>THE BEST PLACE FOR ANY MEXICAN FOOD LOVER TO RELAX AND
                    UNWIND WHILE ENJOYING A GREAT FOOD.
                </p>
                <NavLink to="/menu" className="btn">Our Menu</NavLink>
            </div>
        </section>
    )
};

export default Banner