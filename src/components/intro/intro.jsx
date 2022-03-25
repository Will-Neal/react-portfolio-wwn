import "./intro.css";
import Me from "../../img/myface.jpg"

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="intro-greet">Hello, my name is</h2>
                    <h1 className="intro-name">Will Neal</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="intro-title-item"> Full</div>
                            <div className="intro-title-item"> Stack</div>
                            <div className="intro-title-item"> Web</div>
                            <div className="intro-title-item"> Developer</div>
                        </div>
                    </div>
                    <div className="intro-description">
                    I am a New York based web developer with a backround in audio technology and philosophy. When I am not chasing waves on the coast or snow in the mountains, I am utilizing React, Express, Mongo, MySQL And Node to make your web based dreams a digital reality. If you like what you see, drop me a line. I look forward to hearing from you!
                    </div>
                </div>
            </div>
            <div className="intro-right">
                <div className="intro-bg"></div>   
                <img src={Me} className="intro-image" alt="mixing-a-show"></img>
            </div>
        </div>
    )
}

export default Intro