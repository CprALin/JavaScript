import {FaLaptop , FaTabletAlt , FaMobileAlt } from 'react-icons/fa';
import useWindowSize from './hooks/useWindowSize';

const Header = ({title}) => {
   const { width } =  useWindowSize();
   
   return (
      <header className="Header">
          <p>{title}</p>
          <div className='icon'>
            {width < 768 ? <FaMobileAlt />
               : width < 992 ? <FaTabletAlt />
                     : <FaLaptop />}
          </div>
      </header>
   )
}

export default Header