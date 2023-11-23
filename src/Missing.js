import { Link } from "react-router-dom";

const Missing = () => {
   return (
      <div className="Missing">
         <h2>Not Found!</h2>
         <p>Well, that's disappointing.</p>
         <p>
            <Link to='/'>Visit Our Homepage</Link>
         </p>
      </div>
   )
}

export default Missing