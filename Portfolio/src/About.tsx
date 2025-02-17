import'./About.css'


export default function About (){
    return(
        <div id="about-container">
            <div id="hero-banner">
                <div className="hero-banner-top">
                    <p>Hi! I'm a professional with a background in digital marketing and entrepreneurship and am now applying my skills in the tech industry as a <strong> full-stack developer</strong>. Also I'm a soon to be a father and am eager to tackle any professional challenge and provide the most value to the industry to build a strong career path. </p>
                </div>
                <div className="hero-banner-bot">
                    <div className="hero-text">            
                        <h1>Let's build something <br/> <span> awesome </span> <br /> together!</h1>
                        <button>Contact me</button>
                        <button>Download resume</button>
                    </div>
                    <img src="Shin-foto.png" alt="Shin's photo" id="Shin-photo" />
                </div>
            </div>
        </div>
    )
}