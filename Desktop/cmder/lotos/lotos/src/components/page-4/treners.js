import React from 'react';
import './treners.css';

export default class TrenersList extends React.Component {
    button() {
        return(<button className="add-to treners-choose-button">Записаться к тренеру</button>);
        
    };
    arrowRight() {
        return (<div className="arrow-right treners-right"><p className="trigon-right"></p></div>)
    };
    arrowLeft() {
        return(<div className="arrow-left treners-left"><p className="trigon-left"></p></div>)
    };
    render() {
        return(<div className="treners-list" key="treners-list">
            {window.outerWidth < 760 ? this.arrowRight():''}
            {window.outerWidth < 760 ? this.arrowLeft():''}
            <div className="list">
                <ul className="names-treners">
                    <li className="trener-name choose-name">Иванова Ольга</li>
                    <li className="trener-name">Иванова Ольга</li>
                    <li className="trener-name">Иванова Ольга</li>
                    <li className="trener-name">Иванова Ольга</li>
                    <li className="trener-name">Иванова Ольга</li>
                    <li className="trener-name">Иванова Ольга</li>
                </ul>
            </div>
            <div className="treners-description">
                <h2 className="treners-name">Иванова Ольга</h2>
                <h3 className="treners-subtitle">Преподаватель йоги с 1997 года</h3>
                <p className="trener-about">
                Занимается йогой Айенгара с 1990 года. Является преподавателем йоги Айенгара с 1997 года. Имеет международный сертификат Junior I. Проводит семинары, занятия разных уровней сложностей.
                </p>
                <p className="trener-about">
                В йогу привел интерес. Является одним из самых опытных преподавателей и опорой нашего центра. Все студенты любят Максима за отзывчивость
и индивидуальный подход к каждому.
                </p>
                {window.outerWidth > 760 ? this.button():''}
            </div>
            {window.outerWidth < 760 ? this.button():''}
        </div>)
    }
};