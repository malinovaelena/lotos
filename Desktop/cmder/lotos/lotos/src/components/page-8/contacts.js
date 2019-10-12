import React from 'react';
import './contacts.css';


export default class Contacts extends React.Component {
    render() {
        return(<div className="contacts-container" key="contacts-slide">
            <div className="map-on-slide">

            </div>
            <ul className="contacts">
                <li className="adress">
                    <dt>Адрес:</dt>
                    <dd>СПб, Невский проспект 108</dd>
                </li>
                <li className="e-mail">
                    <dt>E-mail:</dt>
                    <dd>Lotos-yoga@gmail.com</dd>
                </li>
                <li>
                    <a className="open-map" href="#">Смотреть на карте</a>
                </li>
                <li>
                    <a className="leave-feedback" href="#">Оставить отзыв</a>
                </li>
                <li className="copyright">
                    © 2018 — ООО “Центр йоги Лотос”
                </li>
                <li>
                    <button className="sign-up_online">Записаться онлайн</button>
                </li>
            </ul>
        </div>)
    }
}