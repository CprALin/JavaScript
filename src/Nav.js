import Search from "./Search";
import {Link} from "react-router-dom";
import { useContext } from 'react';
import DataContext from './context/DataContext';

const Nav = () => {
   
   const {search , setSearch} = useContext(DataContext);

   return (
      <nav className="Nav">
        <Search search={search} setSearch={setSearch} />
         <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/post">NewPost</Link></li>
            <li><Link to="/about">About</Link></li>
         </ul>
      </nav>
   )
}

export default Nav