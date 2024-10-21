import './createBlog.css'

const CreateBlog = () => {
    return (
        <div id='contact'>
            <div className="card"
                data-aos='zoom-in'
                data-aos-delay='50'
                data-aos-duration='1000'
                data-aos-easing='ease-in-out'
            >
                <h2 className=''>Create Blog</h2>
                <div className="blogRow flex flex-col">
                    <div className="col">
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="col">
                        <div className="form-group">
                            <label>Body</label>
                            <input type="text" />
                        </div>
                    </div>


                    <div className="col">
                        <input type="submit" value="Submit" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBlog