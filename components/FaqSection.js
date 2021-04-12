import React from 'react';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
// import {useScroll} from './useScroll';
// import {fade} from '../animation';

const FaqSection = () => {
   // const [element, controls] = useScroll();
   // variants={fade} animate={controls} initial="hidden"
    return (
       <div className="faq">
           <h2>Any question <span>FAQ</span></h2>
           <h4>How Do I Start?</h4>
           <AnimateSharedLayout>
           <Toggle>
               <div className="answer">
                   <p>Lorem jjsggs jjdgdte jjjjh.</p>
                   <p>LOrem ggsffs kkashsyyeksnb nnddjfhfjfvdbuiyher 
                       xsdlikjiopuyf iouhajsjbfphuiafs.</p>
               </div>
           </Toggle>
           <h4>Daily Schedule</h4>
           <Toggle>
               <div className="answer">
                   <p>Lorem jjsggs jjdgdte jjjjh.</p>
                   <p>LOrem ggsffs kkashsyyeksnb nnddjfhfjfvdbuiyher 
                       xsdlikjiopuyf iouhajsjbfphuiafs.</p>
               </div>
           </Toggle>
           <h4>Difrrent Payment Methods</h4>
           <Toggle>
               <div className="answer">
                   <p>Lorem jjsggs jjdgdte jjjjh.</p>
                   <p>LOrem ggsffs kkashsyyeksnb nnddjfhfjfvdbuiyher 
                       xsdlikjiopuyf iouhajsjbfphuiafs.</p>
               </div>
           </Toggle>
           <h4>What Product do you offer.</h4>
           <Toggle>
               <div className="answer">
                   <p>Lorem jjsggs jjdgdte jjjjh.</p>
                   <p>LOrem ggsffs kkashsyyeksnb nnddjfhfjfvdbuiyher 
                       xsdlikjiopuyf iouhajsjbfphuiafs.</p>
               </div>  
           </Toggle>
           </AnimateSharedLayout>
       </div> 
    )
}
 

export default FaqSection;