import React from 'react'


const Contact = () => {
    return(
        <section className="contact" id="contact">
        <div className="titlec">
            <h2 className="titleTextc"><span>C</span>ontact <span>U</span>s</h2>
            <p>Get in touch</p>
        </div>
        <div className="contactForm">
            <h3>Send Message</h3>
            <div className="inputBox">
                <input type="text" placeholder="Name"></input>
            </div>
            <div className="inputBox">
                <input type="text" placeholder="Email"></input>
            </div>
            <div className="inputBox">
                <textarea placeholder="Address" cols="30" rows="10"></textarea>
            </div>
            <div className="inputBox">
                <input type="submit" value="Send"></input>
            </div>
        </div>
    </section>
    )
}

export default  Contact