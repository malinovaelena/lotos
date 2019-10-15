import React from 'react';
import './contacts.css';
import { YMaps, Map, Placemark } from "react-yandex-maps";

export default class Contacts extends React.Component {
    style = {
        'width':'100%',
        'height':'100%',
        'zIndex': '200',
        "hue": -0.5,
        "saturation": -0.5
    };
    styleMApp = {
        'width':'100%',
        'height':'100%',
    }
    //РАБОТАЕТ
    mapData = {
        center: [59.933472, 30.354378],
        zoom:17
    };
    //НЕ РАБОТАЕт
    geoobjectOfMap= {
        type: "geoobject",
        coordinates: [59.933472, 30.354378]
    };
    balloonOfMap = {
        type: "balloon",
        coordinates: [59.933472, 30.354378],
    };
    option = {
        geoObject: {
            //type: "geoobject",
            //coordinates: [59.933471, 30.354379],
            geometry: {
                type: "Point",
                coordinates: [59.933472, 30.354378]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Я тащусь',
                hintContent: 'Ну давай уже тащи'
            }
        }
    };
    renderMapYa() {
        return(<YMaps props={this.option} options={this.option}>
            {console.log(<YMaps/>,<Map/>)}
            <Map
                //РАБОТАЕТ
                state={this.mapData} 
                style={this.style}
                //
                options={this.option}
            />
        </YMaps>)
    };
    render() {
        return(<div className="contacts-container" key="contacts-slide">
            <div className="map-on-slide">
                <div id="map" style={this.styleMApp}>{this.renderMapYa()}</div>
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
    };
}
