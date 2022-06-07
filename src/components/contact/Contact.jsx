import './contact.css';
import Phone from '../../img/whatsapp.png';
import Mail from '../../img/gmail.png';
import Ubicacion from '../../img/ubicacion.png';
import Linkedin from '../../img/linkedin.png';
import Github from '../../img/github.png';
import emailjs from '@emailjs/browser';
import { useRef, useContext } from 'react';
import { ThemeContext } from '../../context';
import Swal from 'sweetalert2'



export const Contact = () => {
    
    const formRef = useRef();
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;


    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_ejq1jxk', 
                'template_q9lehgz', 
                formRef.current, 
                'Z16jZvK62fN5yGupZ'
            )
        Swal.fire(
            '¡Mensaje enviado!',
            '¡Gracias por contactarme!',
            'success'
        )
        .then((result) => {
            console.log(result.text);
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Hablemos de tu proyecto</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="Phone" className="c-icon" />
                            <a href="https://api.whatsapp.com/send?phone=5493484342298" target="_blank" rel="noreferrer" >+54 9 348 4342298</a>
                        </div>
                        <div className="c-info-item">
                            <img src={Mail} alt="Mail" className="c-icon" />
                            <a href="mailto:matiasezequielsosa@gmail.com" target="_blank" rel="noreferrer" > Matiasequielsosa@gmail.com</a>
                        </div>
                        <div className="c-info-item">
                            <img src={Linkedin} alt="Linkedin" className="c-icon" />
                            <a href="http://www.linkedin.com/in/matiasezequielsosa" target="_blank" rel="noreferrer" >Perfil de Linkedin</a>
                        </div>
                        <div className="c-info-item">
                            <img src={Github} alt="Github" className="c-icon" />
                            <a href="https://github.com/SosaMati" target="_blank" rel="noreferrer" >Perfil de Github</a>
                        </div>
                        <div className="c-info-item">
                            <img src={Ubicacion} alt="Ubicacion" className="c-icon" />
                            Buenos Aires, Argentina.
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>¿Qué tienes para contarme?</b> Ponete en contacto, siempre estare disponible para darte una respuesta.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && '#333'}}type="text" placeholder='Name' name='user_name' autoComplete="off"/>
                        <input style={{backgroundColor: darkMode && '#333'}}type="text" placeholder='Subjec' name='user_subject' autoComplete="off"/>
                        <input style={{backgroundColor: darkMode && '#333'}}type="text" placeholder='Email' name='user_email' />
                        <textarea style={{backgroundColor: darkMode && '#333'}} rows='5' placeholder='Message' name='message' />
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
 