import { useState } from 'react';
import BlogList from '../BlogList';

import './Home.css';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            title: 'My new website Ivan',
            body: 'something....',
            author: 'Ivan',
            id: 1,
        },
        {
            title: 'My new website Peter',
            body: 'something....',
            author: 'Peter',
            id: 2,
        },
        {
            title: 'My new website Lol',
            body: 'something....',
            author: 'Lol',
            id: 3,
        },
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" handleDelete={ handleDelete }/>
        </div>
     );
}
 
export default Home;