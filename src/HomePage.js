import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import About from "./About";
import Footer from "./Footer";
import Missing from "./Missing";
import {Routes, Route} from "react-router-dom";
import { useEffect } from "react";
import useAxiosFetch from "./hooks/useAxiosFetch";
import { useStoreActions } from "easy-peasy";

const HomePage = () => {
   
   const setPosts = useStoreActions((actions) => actions.setPosts);
   const { data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts');
    
   useEffect(() => {
      setPosts(data);
   }, [data, setPosts])

   return(
      <div className="HomePage">
         <Header title="BlogPost"/>
               <Nav />
               <Routes>
                  <Route exact path="/" element={<Home isLoading={isLoading} fetchError={fetchError}/>}/>
                  <Route path="/post/:id" element={<PostPage />}/>
                  <Route exact path="/post" element={<NewPost />}/>
                  <Route path="/edit/:id" element={<EditPost/>}/>
                  <Route path="/about" element={<About />}/> 
                  <Route path="*" element={<Missing />}/>
               </Routes>
          <Footer />
      </div>
   )
}

export default HomePage