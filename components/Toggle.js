import React, {useState} from 'react';
import { motion } from 'framer-motion';
import {AnimateShardLayout} from 'framer-motion';


const Toggle = ({children,title}) => {
    const [toggle,setToggle] = useState(true);
    return(
        <div className="question" onClick={() => setToggle(!toggle)}>
           {toggle ? children : ""}
           <div className="faq-line"></div>
        </div>
    )
};


export default Toggle;