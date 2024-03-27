import './contact.css'

const Contact = () => {
    return (
        <div id='contact'>
            <div className="card"
                data-aos='zoom-in'
                data-aos-delay='50'
                data-aos-duration='1000'
                data-aos-easing='ease-in-out'
            >
                <h2 className=''>Contact Me</h2>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" />
                        </div>
                    </div>



                    <div className="col">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" />
                        </div>
                    </div>

                    {/* <div className="col">
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="text" />
                        </div>
                    </div> */}

                    <div className="col">
                        <div className="form-group">
                            <label>Message</label>
                            <textarea></textarea>
                        </div>
                    </div>

                    <div className="col">
                        <input type="submit" value="Submit" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;