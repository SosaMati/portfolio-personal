import './toggle.css';
import Sol from '../../img/sol.png';
import Luna from '../../img/luna.png';
import { useContext } from 'react';
import { ThemeContext } from '../../context';


export const Toggle = () => {

    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({ type: 'TOGGLE' });
    };

    return (
        <div className="t" onClick={ handleClick }>
            <img src={Sol} alt="" className="t-icon" />
            <img src={Luna} alt="" className="t-icon" />
            <div 
                className="t-button" 
                
                style={{ left: theme.state.darkMode ? 0 : 25}}
            ></div>
        </div>
    )
}
