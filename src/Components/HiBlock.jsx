import React from 'react';
import './Components.css';

import photo2 from "../images/photo2.png"

const HiBlock = React.forwardRef((props, ref) => {

  return (
    <>
<div className='welcome' ref={ref} id="home">
<div className='welcome-info-block'>
       <div className='hi-block'>
        <div className='hi'>
            Hi!
        </div>
        <div className='name-info big-text'>
            I'm Napolova Polina.
        </div>
        <div className='who-info big-text'>
            a Front-End Developer
        </div>
        <div className='line'></div>
       </div>
       <div className='about-info normal-text'>
       Front-End developer with experience in creating and maintaining web-applications. I have a strong knowledge of HTML, CSS, and JavaScript. 
       </div>
    </div>
    <div className='photo'>
    <img className="hi-photo" src={photo2} alt="" style={{width:"360px", borderRadius:"20px"}}/>
    </div>
</div>
   

    </>
  );
});

export default HiBlock;