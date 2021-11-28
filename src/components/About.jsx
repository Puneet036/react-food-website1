import React from 'react'


const About = () => {

    return (
        <section className="about" id="about">
        <div className="row">
            <div className="col50">
                <h2 className="titleText"><span>A</span>bout Us</h2>
                <p>For Mexican food at its best, choose our Restaurant! We are sure to satisfy even the pickiest palate.
                    Our menu features dishes made with the freshest ingredients. One bite into one of our delicious
                    enchiladas
                    or burritos will result in an explosion of mouthwatering flavors! Don`t worry; we have something for
                    those
                    who love the heat, including our Chile peppers! So when hunger strikes, don`t ignore it.
                    <br />
                    Taste our food straight out of the Mexican kitchen!<br />
                    
                    Catering to our clients, and providing our fine
                    food and service, allows us to host elegant and successful
                    events year after year.
                </p>
            </div>
            {/* <div className="col50">
                <div className="imgbx">
                    <img src={imgabout}></img>
                </div>
            </div> */}
        </div>
        </section>
    
    )
};

export default About