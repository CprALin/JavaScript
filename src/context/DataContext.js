import {useState , useEffect, createContext} from 'react';
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext = createContext({});

export const DataProvider = ({children}) => {

    const[posts,setPosts] = useState([]);
    const[search , setSearch] = useState('');
    const[searchResults , setSearchResults] = useState([]);
    const { data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts');
    
    useEffect(() => {
       setPosts(data);
    }, [data])

    useEffect(() => {
        const filteredResults = posts.filter(post => 
           ((post.body).toLowerCase()).includes(search.toLowerCase())
           || ((post.title).toLowerCase()).includes(search.toLowerCase()));
          
        setSearchResults(filteredResults.reverse());  
     },[posts,search])
     
     /*  useEffect(() => {
       const fetchPost = async () => {
           try {
             const response = await api.get('/posts');
             setPosts(response.data);
           }catch(e)
           {
            if(e.response)
            {
               console.log(e.response.data);
               console.log(e.response.status);
               console.log(e.response.headers);
            }else{
               console.log(`Error: ${e.message}`);
            } 
           }
       }

       fetchPost();
      },[]) */

     return (
        <DataContext.Provider value={{
           search , setSearch, searchResults , fetchError , isLoading ,
           posts, setPosts
        }} >
            {children}
        </DataContext.Provider>
     )
}

export default DataContext;