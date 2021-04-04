import React from 'react';
import {Link} from 'react-router-dom';

//images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';



const OurWork = () => {
    return(
        <div className="work">
            <div className="movie">
            <h2>The Athlete</h2>
            <div className="line"></div>
            <Link to="/work/the-athlete">
            <img src={athlete} alt="athlate" />
            </Link>
            </div>
            <div className="movie">
            <h2>The Racer</h2>
            <div className="line"></div>
            <Link to="/work/the-racer">
            <img src={theracer} alt="theracer" />
            </Link>
            </div>
            <div className="movie">
            <h2>Good Times</h2>
            <div className="line"></div>
            <Link to="/work/good-times">
            <img src={goodtimes} alt="goodtimes" />
            </Link>
            </div>
        </div>
    );
};


export default OurWork;