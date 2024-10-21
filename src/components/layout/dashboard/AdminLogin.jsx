/* eslint-disable react/no-unknown-property */
import './adminLogin.css'

const AdminLogin = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <form className="form">
                <div className="title">
                    Welcome,
                    <br />
                    <span>
                        sign up to continue
                    </span>
                </div>
                {/* <input className="input" name="email" placeholder="Email" type="email" /> */}
                <input className="input" name="password" placeholder="Password" type="password" />

                <button className="button-confirm">Let`s go →</button>
            </form>
        </div>
    )
}

export default AdminLogin