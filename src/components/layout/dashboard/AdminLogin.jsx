/* eslint-disable react/no-unknown-property */
import { useState } from 'react';
import './adminLogin.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        // No need for id, because you will get from mongodb
        const userInfo = {
            email,
            password
        };

        try {
            console.log(userInfo);

            setLoading(true);
            const res = await axios.post('https://raiyan-portfolio-be.vercel.app/api/v1/auth/login', userInfo)

            localStorage.setItem('userInfo', res.data);


            setLoading(false);

            setEmail('');
            setPassword('');

            navigate('/admin-dashboard')
        } catch (error) {
            console.log(error, 'Error during adding blog');
            setLoading(false);
        }
    };
    return (
        <div className='flex justify-center items-center h-screen'>
            <form className="form" onSubmit={handleLogin}>
                <div className="title">
                    Welcome,

                    <h3 className='signup'>
                        Sign up to continue
                    </h3>
                </div>
                <input className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email" type="email" />

                <input className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" type="password" />

                <button className="button-confirm">Let`s go →</button>
            </form>
        </div>
    )
}

export default AdminLogin