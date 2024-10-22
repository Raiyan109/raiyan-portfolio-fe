import './contact.css'
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div id='contact' className='py-1'>
            <div className="card container section"
                data-aos='zoom-in'
                data-aos-delay='50'
                data-aos-duration='1000'
                data-aos-easing='ease-in-out'
            >
                <h1 className='text-5xl lg:text-[90px] mb-8'>Contact Me</h1>
                <div>
                    <ul className="mt-12 space-y-3 hidden md:block">
                        <li className="flex items-center">
                            <IoMdMail className="text-grayText" size={20} />
                            <a href="javascript:void(0)" className=" text-sm ml-4">
                                support@playtimehub.com
                            </a>
                        </li>
                        <li className="flex items-center">
                            <FaPhoneAlt className="text-grayText" size={20} />
                            <a href="javascript:void(0)" className=" text-sm ml-4">
                                01713160709
                            </a>
                        </li>
                        <li className="flex items-center">
                            <FaMapMarkerAlt className="text-grayText" size={20} />
                            <a href="javascript:void(0)" className=" text-sm ml-4">
                                123 Street 256 House
                            </a>
                        </li>
                    </ul>
                </div>
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