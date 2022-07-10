import cv from '../../cv/MatiasEzequielSosa.pdf';
import './cv.css';



export const Cv = () => {
    return (
        <div className='c-v'>
            <a href={cv} download target='_blank' rel='noopener noreferrer'><p>VER CV</p></a>
        </div>
    )
}

