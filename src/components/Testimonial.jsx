import React from 'react'
import imgtesti1 from "../images/testi1.jpg"
import imgtesti2 from "../images/testi2.jpg"
import imgtesti3 from "../images/testi3.jpg"



const Testimonial = () => {
    return(
        <section class="testimonials" id="testimonials">
        <div class="title white">
            <h2 class="titleText">What They <span>S</span>ay About Us</h2>
            <p>Our Visitors Just Love
                Our Food!</p>
        </div>
        <div class="content">
            <div class="box">
                <div class="imgbx">
                    <img src={imgtesti1}  alt="description of img"></img>
                </div>
                <div class="text">
                    <p>"The prices are as good as the menu! Each time I spend less money than anywhere else and get a
                        fresh, tasty, homemade dinner!"</p>
                    <h3>Mia Wilson</h3>

                </div>
            </div>
            <div class="box">
                <div class="imgbx">
                    <img src={imgtesti2}  alt="description of img"></img>
                </div>
                <div class="text">
                    <p>"I've been eating their business lunches for the past 7 years. Not even once have I had any
                        unpleasant experience. And the dishes always taste fresh and good!"</p>
                    <h3>Will Johnson</h3>

                </div>
            </div>
            <div class="box">
                <div class="imgbx">
                    <img src={imgtesti3}  alt="description of img"></img>
                </div>
                <div class="text">
                    <p>"Best tortilla soup on the planet. Bar none. Regular burrito dinner is also divine. Without a
                        doubt, one of my favorite places in the world."</p>
                    <h3>Patrick Anderson</h3>

                </div>
            </div>
        </div>
    </section>
    )
}

export default Testimonial