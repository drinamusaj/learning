import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer-bg'>
        <div className='content d-flex'>
            <div className='txt-content'>
                <p>About the conference</p>
                <p>Events</p>
                <p>Our Partners</p>
                <p className='copyright'>© Copyrights 2022 Thinktech</p>
            </div>
            
            <div className='organizers'>
                <p className='org-title'>Organizer</p>
                <div className='org-logos d-flex'>
                    <img src='landmark-logo.png' alt='landmark' width={200} height={40} style={{marginTop:52}}  />
                    <img src='moveo2-logo.png' alt='moveo' width={124} height={62} style={{marginTop:41}}/>
                </div>
                <p className='org-info'> If you want to cooperate with us, become a partner or have another important issue, please contact us using the email below.</p>
                <p className='org-email'>info@thinktech.al</p>
            </div>

            <div className='social'>
                <div className='social-logo d-flex'>
                    <img src='fb-logo.png' alt='facebook' style={{marginRight:27}}/>
                    <img src='yt-logo.png' alt='youtube' style={{marginRight:27}} />
                    <img src='ig-logo.png' alt='instagram'/>
                </div>
                <p className='soc-landmark'>Landmark</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer;
