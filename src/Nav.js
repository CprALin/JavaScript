import Search from "./Search";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import { useStoreActions , useStoreState } from "easy-peasy";

const Nav = () => {
   
   const posts = useStoreState((state) => state.posts);
   const search = useStoreState((state) => state.search);
   const setSearch = useStoreActions((actions) => actions.setSearch);
   const setSearchResults = useStoreActions((actions) => actions.setSearchResults);

   useEffect(() => {
      const filteredResults = posts.filter(post => 
         ((post.body).toLowerCase()).includes(search.toLowerCase())
         || ((post.title).toLowerCase()).includes(search.toLowerCase()));
        
      setSearchResults(filteredResults.reverse());  
   },[posts,search , setSearchResults])

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