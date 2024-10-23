import './portfolio.css'
import Menu from './Menu';
import { useEffect, useState } from 'react';
import { BsLink45Deg } from 'react-icons/bs'
import { AnimatePresence, motion } from 'framer-motion'
import Modal from './Modal';
import axios from 'axios';

const Portfolio = () => {
    const [items, setItems] = useState([])
    const [projects, setProjects] = useState([])
    const [itemId, setItemId] = useState('')
    const [modalOpen, setModalOpen] = useState(false);
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);


    const showModal = (id) => {
        setItemId(id)
        if (modalOpen) {
            close()
            console.log(id);
        }
        else {
            open()
        }
    }
    const filterItem = (categoryItem) => {
        const updatedItems = projects.filter((updatedItem) => {
            const categories = updatedItem.category.includes(categoryItem);

            return categories
        })
        setItems(updatedItems)
    }

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get('https://raiyan-portfolio-be.vercel.app/api/v1/bio/project');

                setProjects(res.data.data); // Store the fetched projects in state
                setItems(res.data.data); // Initially set all items to the fetched projects
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        })();
    }, []);

    return (
        <>
            <section className="work container section" id="portfolio"
                data-aos='zoom-in'
                data-aos-delay='50'
                data-aos-duration='1000'
                data-aos-easing='ease-in-out'
            >
                <h2 className="section__title">Recent Works</h2>

                <div className="work__filters">
                    <span className="work__item" onClick={() => setItems(projects)}>Everything</span>
                    <span className="work__item" onClick={() => filterItem('MERN')}>MERN</span>
                    <span className="work__item" onClick={() => filterItem('Frontend')}>Frontend</span>
                    <span className="work__item" onClick={() => filterItem('Backend')}>Backend</span>
                    <span className="work__item" onClick={() => filterItem('NextJS')}>NextJS</span>
                </div>

                <div className="work__container grid">
                    {
                        items.map((item) => {
                            const { _id, image, title, category } = item
                            return (
                                <div className="work__card" key={_id}>
                                    <div className="work__thumbnail">
                                        <img src={image} alt="" className="work__img" />
                                        <div className="work__mask"></div>
                                    </div>

                                    <span className="work__category">{category.join(', ')}</span>
                                    <h3 className="work__title">{title}</h3>
                                    {/* <div className="work__button">
                                        <BsLink45Deg className='work__button-icon absolute top-3 left-3' />
                                    </div> */}
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="work__button"
                                        onClick={() => showModal(_id)}
                                    >
                                        <BsLink45Deg className='work__button-icon absolute top-3 left-3' />
                                    </motion.button>
                                    {/* <a href={liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="work__button">
                                    <BsLink45Deg className='work__button-icon absolute top-3 left-3' />
                                </a> */}
                                </div>
                            )
                        })
                    }
                </div>

            </section>
            <AnimatePresence
                // Disable any initial animations on children that
                // are present when the component is first rendered
                initial={false}
                // Only render one component at a time.
                // The exiting component will finish its exit
                // animation before entering component is rendered
                // exitBeforeEnter={true}
                mode='wait'
                // Fires when all exiting nodes have completed animating out
                onExitComplete={() => null}
            >
                {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} itemId={itemId} />}
            </AnimatePresence>
        </>
    );
};

export default Portfolio;