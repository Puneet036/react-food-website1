import React from 'react'
import imgmenu1 from "../images/menu1.jpg"
import imgmenu2 from "../images/menu2.jpg"
import imgmenu3 from "../images/menu3.jpg"
import imgmenu4 from "../images/menu4.jpg"
import imgmenu5 from "../images/menu5.jpg"
import imgmenu6 from "../images/menu6.jpg"



const Menu= () =>{

    return(
        <section class="menu" id="menu">
        <div class="title">
            <h2 class="titleText">Our <span>M</span>enu</h2>
            <p>Honest food and honest drinks set the foundation of our place's menu!</p>
        </div>
        <div class="content">
            <div class="box">
                <div class="imgbx">
                    <img src={imgmenu1}  alt="description of img"></img>
                </div>
                <div class="text">
                    <h3>Cheese Burger</h3>
                </div>
            </div>

            <div class="box">
                <div class="imgbx">
                    <img src={imgmenu2}  alt="description of img"></img>
                </div>
                <div class="text">
                    <h3>Fish Salad</h3>
                </div>
            </div>
            <div class="box">
                <div class="imgbx">
                    <img src={imgmenu3}  alt="description of img"></img>
                </div>
                <div class="text">
                    <h3>Special Pasta</h3>
                </div>
            </div>
            <div class="box">
                <div class="imgbx">
                    <img src={imgmenu4}  alt="description of img"></img>
                </div>
                <div class="text">
                    <h3>Tacos with Lime</h3>
                </div>
            </div>
            <div class="box">
                <div class="imgbx">
                    <img src={imgmenu5}  alt="description of img"></img>
                </div>
                <div class="text">
                    <h3>Chocolate Cake</h3>
                </div>
            </div>
            <div class="box">
                <div class="imgbx">
                    <img src={imgmenu6}  alt="description of img"></img>
                </div>
                <div class="text">
                    <h3>Special Chicken With Cury</h3>
                </div>
            </div>
        </div>
        <div class="title">
            <a href="#" class="btn">View All</a>
        </div>

    </section>
    )
}

export default Menu