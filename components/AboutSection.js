import React from 'react';
import home1 from "../img/home1.png";
import {motion} from 'framer-motion';
import { titleAnim, fade, photoAnim} from '../animation';

const AboutSection = () => {
    return (
        <div className="about">
         <div className="description">
             <div>
                 <div className="hide">
                     <h2>We work to make</h2>
                 </div>
                 <div className="hide">
                     <h2>your <span>dream</span> come</h2>
                 </div>
                 <div className="hide">
                     <h2>true.</h2>
                 </div>
                 <p>Contact us for any phoptography or videograph ideas that you have. We 
                     have professionals with amazing skills 
                 </p>
                 <button className="button">Contac Us</button>
                 </div>
              </div>
            <div className="image">
                <img src={home1} alt=" camera gay" />
            </div>
           
        </div> 

    )
}




export default AboutSection;