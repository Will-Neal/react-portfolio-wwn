import './contact.css';
import Email from '../../img/email-icon.jpg'
import Github from '../../img/github-icon.png';
import Linkedin from '../../img/linkedin-icon.png'
import ResumeIcon from '../../img/resume-icon.png'
import Resume from '../../img/resume-wwn.pdf'
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    //Importin form reference from react and passing it to the form tag as a reference
    const formRef = useRef()
    //use State
    const [done, setDone] = useState(false)
    //function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_eea4bqg', 'template_57fcrbv', formRef.current, 'y2-uDLRs5AvWjVBRW')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            },
                (error) => {
                    console.log(error.text);
                })
    }   
    //main xml being returned
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contact</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <a href='mailto:willwneal@gmail.com' target="_blank"><img src={Email} alt='email' className='c-icon'></img>willwneal@gmail.com</a>
                        </div>
                        <div className="c-info-item">
                            <a href='https://github.com/Will-Neal' target="_blank"><img src={Github} alt='email' className='c-icon'></img>Will-Neal</a>
                        </div>
                        <div className="c-info-item">
                            <a href='https://www.linkedin.com/in/will-neal-567565a1/' target="_blank"><img src={Linkedin} alt='email' className='c-icon'></img>will-neal</a>
                        </div>
                        <div className="c-info-item">
                            <a href={Resume} target="_blank"><img src={ResumeIcon} alt='email' className='c-icon'></img>Résumé</a>
                        </div>
                        
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">If you like what you see or have any questions, I would love to chat further. Shoot me a message and we can get started on making your vision a reality.</p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name="user_name" />
                        <input type="text" placeholder='Subject' name="user_subject" />
                        <input type="text" placeholder='Email' name="user_email" />
                        <textarea rows="5" placeholder='Message' name="message"/>
                        <button>submit</button>
                        {done && <div className='thanks'>Thank you!</div>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact