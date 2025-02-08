/* eslint-disable react/no-unescaped-entities */
import profileImage from '../assets/download.jpg'

const AboutMe = () => {
    return(
        <>
        {/* <!----About Me Section-------> */}
      <section className="about-me-section" id="about">
         <center><h2>About Me</h2></center>

        <div className="flex-container about-me-container">
          <div><img src={profileImage} alt="profile-image" /></div>
          
          <div className="bio-container">
            <h4>Dented Code</h4>
            <p>Narendra Sunar is a seasoned full-stack engineer 
            with expertise in React, Ruby on Rails, and 
            Node.js, spanning over 6 years in software 
            development. Passionate about impactful 
            web applications, he mentors junior developers
            with enthusiasm, finding it a rewarding 
            investment of his time. Narendra's teaching 
            extends to HTML and CSS basics, where he 
            employs interactive methods like hands-on 
            coding and PowerPoint slides. Recently, 
            he's delved into CSS animations and 
            integrating tools like Intro.js into React 
            applications. With a knack for detail, 
            Narendra refines his coding style with 
            features like Flow for type checking, 
            demonstrating a commitment to robust and 
            efficient development practices.
            </p>
          </div>
        </div>
      </section>

      <section id="contact">
        <center><h4>Get In Touch</h4></center>

        <div className="flex-container get-in-touch-container">
          <a><i className="fa-brands fa-linkedin"></i></a>
          <a><i className="fa-brands fa-github"></i></a>
          <a><i className="fa-brands fa-youtube"></i></a>
          <a href="tel:04161453369"><i className="fa-solid fa-mobile"></i></a>
        </div>

        <center><h5>OR</h5></center>

        <div className="mail-container">
          <a href="mailto:myemail@dentedcode.com">
            <button className="download-btn">
              myemail@dentedcode.com <i className="fa-solid fa-paper-plane"></i>
            </button>
          </a>
        </div>
      </section>


      </>
    )
}

export default AboutMe