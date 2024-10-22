import { useNavigate } from 'react-router-dom';
import './blog.css'
const Blog = ({ blog }) => {
    const navigate = useNavigate()

    const goToBlogDetails = () => {
        navigate(`/blogs/${blog?._id}`)
    }
    return (
        <div className="blogCard" onClick={goToBlogDetails}>
            <p className="header">Raiyan Blog's</p>
            <div className="main-content">
                <p className="heading">{blog.title}</p>
            </div>
            <div className="footer">by Raiyan Kabir</div>
        </div>
    );
};

export default Blog;