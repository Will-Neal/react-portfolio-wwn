import './contact.css';
import Email from '../../img/email-icon.png';
import Github from '../../img/github-icon.png';
import Linkedin from '../../img/linkedin-icon.png'

const Contact = () => {
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contact</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <a href='mailto:willwneal@gmail.com' target="_blank"><img src={Email} alt='email' className='c-icon'></img></a>willwneal@gmail.com
                        </div>
                        <div className="c-info-item">
                            <a href='https://github.com/Will-Neal' target="_blank"><img src={Github} alt='email' className='c-icon'></img></a>Will-Neal
                        </div>
                        <div className="c-info-item">
                            <a href='https://www.linkedin.com/in/will-neal-567565a1/' target="_blank"><img src={Linkedin} alt='email' className='c-icon'></img></a>will-neal
                        </div>
                        
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore tenetur qui deleniti minus excepturi quisquam cupiditate soluta.</p>
                    <form>
                        <input type="text" placeholder='Name' name="user_name" />
                        <input type="text" placeholder='Subject' name="user_subject" />
                        <input type="text" placeholder='Email' name="user_email" />
                        <textarea rows="5" placeholder='Message' name="message"/>
                        <button>submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact