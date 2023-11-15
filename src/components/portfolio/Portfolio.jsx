import './portfolio.css'
import Menu from './Menu';
import { useState } from 'react';
import { BsLink45Deg } from 'react-icons/bs'

const Portfolio = () => {
    const [items, setItems] = useState(Menu)
    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((updatedItem) => {
            return updatedItem.category === categoryItem;
        })
        setItems(updatedItems)
    }

    return (
        <section className="work container section" id="portfolio">
            <h2 className="section__title">Recent Works</h2>

            <div className="work__filters">
                <span className="work__item" onClick={() => setItems(Menu)}>Everything</span>
                <span className="work__item" onClick={() => filterItem('MERN')}>MERN</span>
                <span className="work__item" onClick={() => filterItem('Frontend')}>Frontend</span>
                <span className="work__item" onClick={() => filterItem('Backend')}>Backend</span>
                {/* <span className="work__item" onClick={() => filterItem('Tailwind')}>Tailwind</span> */}
            </div>

            <div className="work__container grid">
                {
                    items.map((item) => {
                        const { id, image, title, category } = item
                        return (
                            <div className="work__card" key={id}>
                                <div className="work__thumbnail">
                                    <img src={image} alt="" className="work__img" />
                                    <div className="work__mask"></div>
                                </div>

                                <span className="work__category">{category}</span>
                                <h3 className="work__title">{title}</h3>
                                <a href="#" className="work__button">
                                    <BsLink45Deg className='work__button-icon absolute top-3 left-3' />
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Portfolio;