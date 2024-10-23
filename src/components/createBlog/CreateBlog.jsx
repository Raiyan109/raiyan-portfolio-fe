import { useState } from 'react';
import './createBlog.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleBlogSubmit = async (e) => {
        e.preventDefault();
        // No need for id, because you will get from mongodb
        const blogDetails = {
            title,
            body
        };

        try {
            console.log(blogDetails);

            setLoading(true);
            const res = await axios.post('https://raiyan-portfolio-be.vercel.app/api/v1/blog', blogDetails)
            console.log(res);

            setLoading(false);
            // Reset form fields
            setTitle('');
            setBody('');

            navigate('/admin-dashboard')
        } catch (error) {
            console.log(error, 'Error during adding blog');
            setLoading(false);
        }
    };
    return (
        <div id='contact'>
            <div className="card"
                data-aos='zoom-in'
                data-aos-delay='50'
                data-aos-duration='1000'
                data-aos-easing='ease-in-out'
            >
                <h2 className=''>Create Blog</h2>
                <form onSubmit={handleBlogSubmit}>
                    <div className="blogRow flex flex-col">
                        <div className="col">
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

                            </div>
                        </div>

                        <div className="col">
                            <div className="form-group">
                                <ReactQuill theme="snow" value={body} onChange={setBody} />
                            </div>
                        </div>




                        <div className="col">
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateBlog