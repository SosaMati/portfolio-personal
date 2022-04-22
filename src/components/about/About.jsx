import './about.css';
import html from '../../img/html.svg';
import css from '../../img/css.svg';
import sass from '../../img/sass.svg';
import bootstrap from '../../img/bootstrap.svg';
import javascript from '../../img/javascript.svg';
import react from '../../img/react.svg';
import redux from '../../img/redux.svg';
import node from '../../img/nodejs.png';
import mongo from '../../img/mongodb.png';
import postgre from '../../img/postgresql.png';
import git from '../../img/git.svg';
import github from '../../img/github2.svg';
import python from '../../img/python.svg';
import firebase from '../../img/firebase.png';
import vsc from '../../img/vsc.svg';

export const About = () => {

    return (
        <div className='a'>
            <div className="a-left">   
                <div className="a-card">
                    <img className='a-icon' src={html} alt="" />
                    <img className='a-icon' src={css} alt="" />
                    <img className='a-icon' src={bootstrap} alt="" />
                    <img className='a-icon' src={sass} alt="" />
                    <img className='a-icon' src={javascript} alt="" />
                    <img className='a-icon' src={react} alt="" />
                    <img className='a-icon' src={redux} alt="" />
                    <img className='a-icon' src={node} alt="" />
                    <img className='a-icon' src={mongo} alt="" />
                    <img className='a-icon' src={postgre} alt="" />
                    <img className='a-icon' src={git} alt="" />
                    <img className='a-icon' src={github} alt="" />
                    <img className='a-icon' src={python} alt="" />
                    <img className='a-icon' src={firebase} alt="" />
                    <img className='a-icon' src={vsc} alt="" />
                </div>
            </div>

            <div className="a-right">
                    <h1 className="a-title">Sobre Mí</h1>
                    <p className="a-sub">
                    Soy un desarrollador web, apasionado por la tecnología y la programación.  
                    Estoy cursando en segundo año de la Tecnicatura en Programación en el instituto Teclab y también de forma autodidacta mediante varios cursos que fui realizando. Día a día me capacito para poder incrementar mis conocimientos y habilidades. Me considero una persona responsable, con una actitud positiva y con una gran capacidad de adaptación.
                    </p>
                    <p className="a-desc">
                    Me certifique como Fullstack en el curso Codo a Codo (2021) de la agencia aprendizaje a lo largo de la vida. Realice certificaciones en freeCodeCamp en Responsive Web Desing y en JavaScrip Algorithms and Data Structures. También varias certificaciones en Udemy como por ejemplo cursos de Git, Github, Nodejs y MongoDb. Actualmente además de seguir la cursada de la tecnicatura, me encuentro aprendiendo React de la mano del profesor Fernando Herrera en Udemy.
                    </p>
            </div>
        </div>
    )
}
