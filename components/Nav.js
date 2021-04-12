import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <nav>
           <h1>
               <Link id="Logo" to="/">
                   Capture
               </Link>
           </h1>
           <ul>
               <li>
                   <Link to="/">1. About Us</Link>
                   <div className="line"></div>
               </li>
               <li>
                   <Link to="/work">2. Our Work</Link>
               </li>
               <li>
                   <Link to="/contact">3. Cotact Us</Link>
               </li>
           </ul>
        </nav>
    )
};



export default Nav;