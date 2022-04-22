import './product.css';


export const Product = ({img, link, repo}) => {
    return (
        <div className="p-c">
            <div className='p'>
                  <div className="p-browser">
                        <div className="p-circle"></div>
                        <div className="p-circle"></div>
                        <div className="p-circle"></div>
                  </div>
                  <a href={link} target="_blank" rel='noreferrer'>
                        <img src={img} alt="" className='p-img' />
                  </a>
            </div>
            <div className="p-repo">
                  <a href={repo} target="_blank" rel='noreferrer'>Repositorio</a>
            </div>
        </div>   
  )
}
