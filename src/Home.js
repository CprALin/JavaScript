import Feed from "./Feed";
import { useStoreState } from "easy-peasy";

const Home = ({isLoading, fetchError}) => {

    const searchResults = useStoreState((state) => state.searchResults);

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