import React from 'react';
import image2vector from './img/image2vector.svg';
import './classes.css';

export default class Classes extends React.Component {
    
    renderArrowsMobile = () => {
            return(<div className="arrows-container">
                <div className="arrow-right"><p className="trigon-right"></p></div>
                <div className="arrow-left"><p className="trigon-left"></p></div>
            </div>)
    }
    render() {
        return(<div className="clasess" key="classes">

            {window.outerWidth < 760 ? this.renderArrowsMobile():""}
            
            <div className="clasess-navigation">
                <ul className="clasess-list">
                    <li className="clasess-list-item active">Для начинающих</li>
                    <li className="clasess-list-item">Аштанга Виньяса</li>
                    <li className="clasess-list-item">Универсальная</li>
                    <li className="clasess-list-item">Кундалини</li>
                    <li className="clasess-list-item">Айенгара</li>
                    <li className="clasess-list-item">Терапия</li>
                </ul>
            </div>
            <div className="clasess-description">
                <h2 className="classes-title">Yoga — </h2>
                <dl>
                    <dt className="class-title">Для начинающих</dt>
                    <dd className="class-description">
                    Йога для начинающих рассчитана на тех, кто до этого никогда ей не занимался и требует обучения. 
                    Такой программный комплекс существует и в нашем центре.
                    <br/>
                    Мы предлагаем посетить бесплатное вводное занятие, чтобы узнать, 
                    почему так много людей занимаются йогой и придерживаются здорового образа жизни.
                    </dd>
                </dl>
                <button className="add-to">Записаться онлайн</button>
            </div>
        </div>)
    }
};