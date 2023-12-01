import React from 'react'
import "./about.css"

const About = () => {

  return (
    <div>
        <p className='about-title'>About</p>
        <h2 className='about-subtitle'> THINK TECH CONFERENCE WHICH FOCUSes COMPLETELY ON TECHNOLOGY AS THE FIELD OF THE FUTURE</h2>
        <p className='about-info'>For the first time, Landmark Communications and Technologies introduced a conference which focuses entirely on technology as the field of the future. We have tried to bring an activity different from events or conferences that address the same topic, serving new areas and opportunities in the field of technology. Whether this will be innovative, attractive and useful is up to the public and the participants to decide.</p>
        <div className='moreinfo-txt-but d-flex'>
          <p className='moreinfo-txt'>More information about the conference and the organizer</p>
          <img src='ArrowCircleRight.png' alt='next' />
        </div>
    </div>
  )
}

export default About;
