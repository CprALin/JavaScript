import Feed from "./Feed";
import { useContext } from 'react';
import DataContext from './context/DataContext';

const Home = () => {

    const {searchResults , fetchError, isLoading} = useContext(DataContext);

    return (
        <main className="Home">
            {/*  {posts.length ? (
                 <Feed posts={posts} />
             ) : (
                 <p style={{paddingTop : "3rem", paddingLeft: "3rem" , fontSize: "1.5rem"}}>
                    No posts to display.
                 </p>   
             )} */}

             {isLoading && <p className="statusMsg">Loading posts...</p>}
             {!isLoading && fetchError && <p className="statusMsg" style={{color: "red"}}>{fetchError}</p>}
             {!isLoading && !fetchError && (searchResults.length ? <Feed posts={searchResults}/> : <p className="statusMsg">No posts to display.</p>)}
        </main>
    )
}

export default Home