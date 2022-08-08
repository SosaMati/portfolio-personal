import { products } from '../../data';
import { Product } from '../product/Product';
import './productList.css';


export const ProductList = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">Mis proyectos</h1>
                <p className="pl-desc">
                Te presento algunos de mis proyectos que he realizando a mediada que fui aprendiendo programación web.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} title={item.title} link={item.link} repo={item.repo}/>
                ))}
            </div>
        </div>
  )
}
