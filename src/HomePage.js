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
import { DataProvider } from "./context/DataContext";

const HomePage = () => {
   return(
      <div className="HomePage">
         <Header title="BlogPost"/>
         <DataProvider>
               <Nav />
               <Routes>
                  <Route exact path="/" element={<Home />}/>
                  <Route path="/post/:id" element={<PostPage />}/>
                  <Route exact path="/post" element={<NewPost />}/>
                  <Route path="/edit/:id" element={<EditPost/>}/>
                  <Route path="/about" element={<About />}/> 
                  <Route path="*" element={<Missing />}/>
               </Routes>
          </DataProvider>
          <Footer />
      </div>
   )
}

export default HomePage