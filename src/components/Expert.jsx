import React from 'react'
import imgexp1 from '../images/expert1.jpg'
import imgexp2 from '../images/expert2.jpg'
import imgexp3 from '../images/expert3.jpg'
import imgexp4 from '../images/expert4.jpg'


const Expert = () => {
    return(
        <section className="expert" id="expert">
        <div className="title">
            <h2 className="titleText">Our Kitchen <span>C</span>hef</h2>
            <p>Everything we do here ,we do as a team! Each chef, each cook at the kitchen work as one,
                just to make you culinary experience unforgettable! </p>
        </div>
        <div className="content">
            <div className="box">
                <div className="imgbx">
                    <img src={imgexp1}  alt="description of img"></img>
                </div>
                <div className="text">
                    <h3>Bobby Flay</h3>
                </div>
            </div>
            <div className="box">
                <div className="imgbx">
                    <img src={imgexp2}  alt="description of img"></img>
                </div>
                <div className="text">
                    <h3>Jamie Oliver</h3>
                </div>
            </div>
            <div className="box">
                <div className="imgbx">
                    <img src={imgexp3}  alt="description of img"></img>
                </div>
                <div className="text">
                    <h3>Rachael Ray</h3>
                </div>
            </div>
            <div className="box">
                <div className="imgbx">
                    <img src={imgexp4}  alt="description of img"></img>
                </div>
                <div className="text">
                    <h3>Robert Irvine</h3>
                </div>
            </div>
        </div>
    </section>

    )
}

export default Expert