import './product.css';
import github from '../../img/github2.svg';
import react from '../../img/react.svg';


export const Product = ({title, img, link, repo}) => {

      
    return (
        <div className="p-c">
            <div className='p'>
                        <div className='p-proyect'>
                              <img src={img} alt="" className='p-img' />
                              <div className='p-link animate__animated animate__fadeIn'>
                                    <a href={link} target="_blank" rel='noreferrer'><img className='p-img-icon' src={react} alt="" /><h4>Demo</h4></a>
                                    <a href={repo} target="_blank" rel='noreferrer'><img className='p-img-icon' src={github} alt="" /><h4>Repo</h4></a>
                              </div>
                        </div>
            </div>
            <div className="p-repo">
                  <p>{title}</p>
            </div>
        </div>   
  )
}
 