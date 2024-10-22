import './blog.css'
const Blog = ({ blog }) => {
    return (
        <div className="blogCard">
            <p className="header">UI Blog's</p>
            <div className="main-content">
                <p className="heading">{blog.title}</p>
            </div>
            <div className="footer">by Harsh Gupta</div>
        </div>
    );
};

export default Blog;