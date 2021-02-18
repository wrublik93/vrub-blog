import useFetch from '../../services/useFetch';
import BlogList from '../BlogList';

import './Home.css';

const Home = () => {
    const { data: blogs, isPending, isError } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            { isError && <div>{ isError }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All blogs" /> }
        </div>
     );
}
 
export default Home;