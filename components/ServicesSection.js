import React from 'react';
//import icon
import clock from '../img/clock.svg';
import diaphragm  from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
// import { useScroll} from '../components/useScroll';
// import {fade} from '../animation';

const ServicesSection = () => {
    // const [element, controls] = useScroll();
    // variants={fade} animate={controls} initial="hidden" ref={element}
    return(
         <div className="service" >
             <div className="description1">
                 <h2>High <span>quality</span> service</h2>
                 <div className="cards">
                     <div className="card">
                         <div className="icon">
                          <img alt="icon" src={clock} />
                          <h3>Efficient</h3>
                         </div>
                         <p>Lorem ipsum fhhfj jkjfjhshg kjfdkjk.</p>
                     </div>
                     <div className="card">
                         <div className="icon">
                         <img alt="icon" src={teamwork} />
                          <h3>Teamwork</h3>
                         </div>
                         <p>Lorem ipsum fhhfj jkjfjhshg kjfdkjk.</p>
                     </div>
                     <div className="card">
                         <div className="icon">
                          <img alt="icon" src={diaphragm} />
                          <h3>Diaphragm</h3>
                         </div>
                         <p>Lorem ipsum fhhfj jkjfjhshg kjfdkjk.</p>
                     </div>
                     <div className="card">
                         <div alt="icon" className="icon">
                          <img alt="icon" src={money} />
                          <h3>Affordable</h3>
                         </div>
                         <p>Lorem ipsum fhhfj jkjfjhshg kjfdkjk.</p>
                     </div> 
                 </div> 
             </div> 
             <div className="image">
                 <img alt="camera" src={home2}/>
             </div>
         </div>
    )
}

export default ServicesSection;