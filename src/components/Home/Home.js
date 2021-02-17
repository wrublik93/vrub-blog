import { useState, useEffect } from 'react';
import BlogList from '../BlogList';

import './Home.css';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [isError, setIsError] = useState(null);

    /* const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }; */

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if(!res.ok) {
                    throw new Error('could not fetch the data...')
                }
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
                setIsPending(false);
                setIsError(null);
            })
            .catch(err => {
                setIsPending(false);
                setIsError(err.message);
            });
    }, []);

    return ( 
        <div className="home">
            { isError && <div>{ isError }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All blogs" /> }
        </div>
     );
}
 
export default Home;