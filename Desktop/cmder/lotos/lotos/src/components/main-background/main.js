import React from 'react';
import PageMain from '../page-1/page-1';
import Classes from '../page-2/classes';
import Form from '../page-3/form';
import TrenersList from '../page-4/treners';
import Abonemets from '../page-5/abonemets';
import SheduleTable from '../page-6/shedule-table';
import Reviews from '../page-7/reviews';
import FormTwo from '../page-8-1/form-2';
import Contacts from '../page-8/contacts';

import './main.css';
//ЧТО ОСТАЛОСЬ ПО САЙТУ?
//МЕЛКИЕ ДОРАБОТКИ ДИЗАЙНА - В САМОМ КОНЦЕ!
//СЕЙЧАС!!! ЗАЛИТЬ НА СЕРВЕР? НАПИСАТЬ НЕБОЛЬШОЙ СКРИПТ ДЛЯ ОТПРАВКИ ПИСЕМ НА ЭЛЕКТРОНКУ
//ПОПРОБОВАТЬ РАЗОБРАТЬСЯ В БЭКЕ.
//СЕЙЧАС ИЗ ГЛАВНОГО ПРИКРУТИТЬ ГУГЛ КАРТЫ??

import lotoezolan from './img/lotosEzolan.svg';

export default class Main extends React.Component {
    constructor() {
        super();
        this.clickToArrow();
        this.numberSlide = 0;
        this.MAX_WIDTH_FOR_MOBILE_DEVICES = 1366;
        this.presentation = [<PageMain/>,<Classes/>,<Form/>,<TrenersList/>,<Abonemets/>,<SheduleTable/>,<Reviews/>,<FormTwo/>,<Contacts/>];
        this.arrNamesOfSlides = ['Добро пожаловать','Направления и классы','Пробное занятие',"Преподаватели","Абонементы", "Расписание","Отзывы","Пробное занятие","Контакты","Вернуться"];
    };
    state = {
        currentPage:<PageMain/>,
    };
    clickToArrow() {
        const perem = window;
        perem.addEventListener('keydown',() => {
            if (perem.event.keyCode === 40) {
                console.log('test');
                if (this.numberSlide === 8) {
                    console.log('test');
                    return;
                } else {
                    console.log('test');
                    this.numberSlide = this.numberSlide + 1;
                    console.log(this.numberSlide);
                }
            } else if(perem.event.keyCode === 38) {
                if (this.numberSlide === 0) {
                    return;
                } else {
                    this.numberSlide = this.numberSlide - 1;
                }
            }
            this.setState({currentPage:this.presentation[this.numberSlide]});
        });
    };
    //RENDER
    mobileRenderTop() {
            return (<div className="top-bar">
                <div className="left-bar__menu">
                    <span className="menu-item">Меню</span>
                    <ul className="left-bar__menu hide">
                        <li>Главная</li>
                        <li>Направления</li>
                        <li>Преподаватели</li>
                        <li>Абонементы</li>
                        <li>Расписания</li>
                        <li>Отзывы</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <span className="logo"></span>
                <div className="tel">7 925 022 78 32</div>
            </div>)
    };
    mobileRenderSlider(slide) {
        return(<div className="slides-container">
            {slide}
        </div>)
    };

    mobileRenderBottom() {
            return(<div className="bottom-bar">
            <span className="arrow-down"><p className="trigon"></p></span>
            <ul className="social">
                    <li className="social-icon">
                        <a className="social-icon__vk" href="#">VK</a>
                        <a className="social-icon__fb" href="#">FB</a>
                        <a className="social-icon__inst" href="#">INST</a>
                    </li>
                </ul>
            <dl className="pagination">
                <dt className="current-slide">0{this.numberSlide + 1}</dt>
                <dd className="count-slides">-09</dd>
            </dl>
        </div>)
    };

    renderForFullScreen() {
        
        return(<div className="main">
        <div className="left-bar">
            <div className="left-bar__menu">
                <span className="menu-item">Меню</span>
                <ul className="left-bar__menu hide">
                    <li>Главная</li>
                    <li>Направления</li>
                    <li>Преподаватели</li>
                    <li>Абонементы</li>
                    <li>Расписания</li>
                    <li>Отзывы</li>
                    <li>Контакты</li>
                </ul>
            </div>
            <span className="logo"></span>
            <ul className="social">
                <li className="social-icon">
                    <a className="social-icon__vk" href="#">VK</a>
                    <a className="social-icon__fb" href="#">FB</a>
                    <a className="social-icon__inst" href="#">INST</a>
                </li>
            </ul>
        </div>
        
        <div className="slides-container">
            <h3 className="name-current-slide">{this.arrNamesOfSlides[this.numberSlide]}</h3>
            {this.state.currentPage}
        </div>
        <div className="right-bar">
            <div className="tel">7 925 022 78 32</div>
            <dl className="pagination">
                <dt className="current-slide">0{this.numberSlide + 1}</dt>
                <dd className="count-slides">-09</dd>
            </dl>
            <span className="name-next-slide">{this.arrNamesOfSlides[this.numberSlide + 1]}
                <span className="arrow-down"><p className="trigon"></p></span>
            </span>
        </div>
    </div>)
    };
    render() {
        
        if (window.outerWidth < 1365) {
            return(<div className="main">
                {this.mobileRenderTop()}
                {this.mobileRenderSlider(this.state.currentPage)}
                {this.mobileRenderBottom()}
            </div>)
        } else {
            
            return this.renderForFullScreen();
        }
    };
};