import './BlogList.css';

const BlogList = ({ blogs, title, handleDelete }) => {
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                    <div className="blog-preview" key={ blog.id }>
                        <h2 className="blog-preview-title">{ blog.title }</h2>
                        <p className="blog-preview-author">Written by: { blog.author }</p>
                        <button onClick={ () => handleDelete(blog.id) }>Delete</button>
                    </div>
            ))}
        </div>
     );
}
 
export default BlogList; 