import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
    return ( 
        <div>
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to='/'>Back to the homepage...</Link>
        </div>
     );
}
 
export default NotFoundPage;