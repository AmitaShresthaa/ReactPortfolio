import myResume from '../assets/CV.pdf'
import profileImage from '../assets/download.jpg'

const Hero = () =>{
    return(
        <>
         {/* <!---HERO SECTION----> */}
    <section id="home">
      <div className="grid-container hero-section">
        <div className="intro-text">
          <p>Hi I am <b>Dented Code</b></p>
          <p><b>Software Engineer</b></p>
          <br />
          <p>I love coding!</p>
          
          <a href={myResume} download>
            <button className="download-btn">
              Download CV <i className="fa-solid fa-download"></i>
            </button>
          </a>
        </div>

        <div className="profile-image">
          <img src={profileImage} alt="profile-image" />
        </div>
      </div>
    </section>

        </>
    )
}
export default Hero;