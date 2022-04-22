import './intro.css';
import me from '../../img/yo.png';


export const Intro = () => {
    return (
        <div className="i">

            <div className="i-left animate__animated animate__zoomIn">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>¡Hola!, mi nombre es</h2>  
                    <h1 className='i-name'>Matías Ezequiel Sosa</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Fullstack developer en proceso</div>
                            <div className="i-title-item">Buenos Aires, Argentina</div>
                        </div>
                    </div>
                    <p className="i-desc">
                    Te invito a que me conozcas un poco más a lo largo de mi portfolio.
                    </p>
                </div>
            </div>


            <div className="i-right">
                <div className="i-bg animate__animated animate__fadeIn"></div>
                <img src= { me } alt="" className="i-img animate__animated animate__fadeInRight" />
            </div>

        </div>
  )
}
