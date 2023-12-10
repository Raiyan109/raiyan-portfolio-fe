import './glowingBtn.css'

const GlowingBtn = () => {
    return (
        <a href="/resume.pdf" download>
            <button className='glowing-btn'>
                <span className='glowing-txt'>
                    D
                    <span className='faulty-letter'>
                        O
                    </span>
                    WNL
                    <span className='faulty-letter'>
                        OAD
                    </span>
                </span>
                <span className='glowing-txt'>
                    &nbsp; &nbsp;R
                    <span className='faulty-letter'>
                        E
                    </span>
                    SUM
                    <span className='faulty-letter'>
                        E
                    </span>
                </span>
            </button>
        </a>
    );
};

export default GlowingBtn;