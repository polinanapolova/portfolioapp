import React, { useState, useEffect } from 'react';

// import background from '../images/Background.png'
import framework from "../images/framework.png"
import js from "../images/js.png"
import tools from "../images/tools.png"
import other from "../images/other.png"

const Skills = React.forwardRef((props, ref) =>{
    return (
      <>
      {/* <div style={{ backgroundImage: `url(${background})` }} className='background-skills'> */}
      <div className='normal-text title-text' style={{marginTop:"150px"}}>My <span className='bold-title-text'>Skills</span></div>
      <div className="Skills" ref={ref} id='skills'>
     <div className='skill-block white-block'>
     <img className="skill-image" src={js} alt="" style={{ width:"50px" }}/>
      <div className='skill-title'>Languages</div>
      <div className='skill-text'>JavaScript</div>
      <div className='skill-text'>TypeScript</div>
      <div className='skill-text'>Python</div>
     </div>
     <div className='skill-block white-block '>
     <img className="skill-image" src={framework} alt="" style={{ width:"50px" }}/>
      <div className='skill-title'>Frameworks</div>
      <div className='skill-text'>React</div>
      <div className='skill-text'>Flutter</div>
      <div className='skill-text'>Vue</div>
     </div>
     <div className='skill-block white-block'>
     <img className="skill-image" src={tools} alt="" style={{ width:"50px" }}/>
      <div className='skill-title'>Tools</div>
      <div className='skill-text'>VSCode</div>
      <div className='skill-text'>Figma</div>
      <div className='skill-text'>Git</div>
     </div>
     <div className='skill-block white-block ' >
     <img  className="skill-image" src={other} alt="" style={{ width:"50px" }}/>
      <div className='skill-title'>Others</div>
      <div className='skill-text'>HTML</div>
      <div className='skill-text'>CSS</div>
      <div className='skill-text'>REST API</div>

     </div>
      </div>
      {/* </div> */}
      </>
      
    );
  });
  export default Skills;
