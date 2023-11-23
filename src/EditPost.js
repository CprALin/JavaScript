import {useState, useEffect , useContext } from "react";
import { useParams , Link } from "react-router-dom";
import DataContext from './context/DataContext';
import { useNavigate } from "react-router-dom";
import {format} from 'date-fns';
import api from './api/posts';

const EditPost = () => {
    
    const[editTitle, setEditTitle] = useState('');
    const[editBody , setEditBody] = useState('');
    const navigate = useNavigate();
    const {posts, setPosts} = useContext(DataContext);
    const {id} = useParams();
    const post = posts.find(post => (post.id).toString() === id);
    
    useEffect(() => {
        if(post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    },[post, setEditTitle, setEditBody])
    
    const handleEdit = async (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const updatePost = {id , title: editTitle , datetime , body: editBody};
        try {
           const response = await api.put(`posts/${id}`, updatePost);
           setPosts(posts.map(post => post.id === id ? {...response.data} : post));
           setEditTitle('');
           setEditBody('');
           navigate('/');
        }catch(e){
           console.log(`Error: ${e.message}`)
        }
     } 
  

    return (
        <main className="NewPost">
            {editTitle && 
              <>
                    <p>EditPost</p>
                    <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="postTitle">Title :</label>
                        <input 
                            id="postTitle"
                            type="text"
                            required
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        ></input>
                        <label htmlFor="postBody">Post :</label>
                        <textarea 
                            id="postBody"
                            required
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                        />
                        <button type="submit" onClick={() => handleEdit(post.id)}>Submit</button>
                    </form>
              </>
            }
            {!editTitle &&
               <>
                   <h2>Post Not Found</h2>
                   <p>Well, that's disappointing.</p>
                   <p>
                      <Link to='/'>Visit Our Homepage</Link>
                   </p>
               </>
            }
        </main>
     )
} 

export default EditPost