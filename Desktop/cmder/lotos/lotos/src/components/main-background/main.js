/* eslint-disable no-unused-vars */
import React from 'react';
import PageMain from '../page-1/page-1';
import Classes from '../page-2/classes';
import {Form,FormTwo} from '../page-3/form';
import TrenersList from '../page-4/treners';
import Abonemets from '../page-5/abonemets';
import SheduleTable from '../page-6/shedule-table';
import Reviews from '../page-7/reviews';
import Contacts from '../page-8/contacts';

import './main.css';
//ЧТО ОСТАЛОСЬ ПО САЙТУ?
//МЕЛКИЕ ДОРАБОТКИ ДИЗАЙНА - В САМОМ КОНЦЕ! ???????????????
//ПОПРОБОВАТЬ РАЗОБРАТЬСЯ В БЭКЕ. ????????

import lotoezolan from './img/lotosEzolan.svg';

export default class Main extends React.Component {
    constructor() {
        super();
        this.numberSlide = 0;
        this.MAX_WIDTH_FOR_MOBILE_DEVICES = 1366;
        this.presentation = [<PageMain/>,<Classes/>,<Form/>,<TrenersList/>,<Abonemets/>,<SheduleTable/>,<Reviews/>,<FormTwo/>,<Contacts/>];
        this.arrNamesOfSlides = ['Добро пожаловать','Направления и классы','Пробное занятие',"Преподаватели","Абонементы", "Расписание","Отзывы","Пробное занятие","Контакты","Вернуться"];   
        //this.widthWindow = window.innerWidth;
        //this.shouldComponentUpdate();
    };
    
    state = {
        currentPage:<PageMain/>,
        numberSl:0,
        nameSlides:'Добро пожаловать',
        widthWindow:window.outerWidth
    };
    //NAVIGATION 
    clickToArrow() {
        const perem = window;
        perem.addEventListener('keydown',() => {
            console.log(this.state);
            if (perem.event.keyCode === 40) {
                if (this.state.numberSl === 8) {
                    return;
                } else {
                    this.setState({
                        numberSl: this.state.numberSl + 1
                    });
                }
            } else if(perem.event.keyCode === 38) {
                if (this.state.numberSl === 0) {
                    return;
                } else {
                    this.setState({
                        numberSl: this.state.numberSl - 1
                    });
                }
            }
            this.setState({
                currentPage:this.presentation[this.state.numberSl],
                nameSlides:this.arrNamesOfSlides[this.state.numberSl]
            });
            console.log(this.state);
        });
    };
    burgerMenuButton() {
        const toggleMenuButton = document.querySelector('.burger-menu');
        const burgerMenu = document.querySelector('.nav-menu-list');
        const text = document.querySelector('.menu-item > p');
        
        toggleMenuButton.addEventListener('click', function() {
            burgerMenu.classList.toggle('hide');
            text.classList.toggle('not-visibleee');
        });
    };
    closeBurgerMenu() {
        const burgerMenu = document.querySelector('.nav-menu-list');
        burgerMenu.classList.toggle('hide');
    };
    closeBurgerMenuAndGoToPage = () => {
        const arrOfvalue = ['main','direction','teachers','abonements','schedule','reviews','contacts'];
        const burgerMenu = document.querySelector('.nav-menu-list');
        burgerMenu.classList.toggle('hide');

        let clickedItemMenu = window.event.path[0].id;

        if (clickedItemMenu === arrOfvalue[0]) {
            this.setState({
                currentPage:this.presentation[0],
                numberSl:0,
                nameSlides:this.arrNamesOfSlides[0]
            });
        } else if (clickedItemMenu === arrOfvalue[1]) {
            this.setState({
                currentPage:this.presentation[1],
                numberSl:1,
                nameSlides:this.arrNamesOfSlides[1]
            });

        } else if (clickedItemMenu === arrOfvalue[2]) {
            this.setState({
                currentPage:this.presentation[3],
                numberSl:3,
                nameSlides:this.arrNamesOfSlides[3]
            });
        } else if (clickedItemMenu === arrOfvalue[3]) {
            this.setState({
                currentPage:this.presentation[4],
                numberSl:4,
                nameSlides:this.arrNamesOfSlides[4]
            });
        } else if (clickedItemMenu === arrOfvalue[4]) {
            this.setState({
                currentPage:this.presentation[5],
                numberSl:5,
                nameSlides:this.arrNamesOfSlides[5]
            });
        } else if (clickedItemMenu === arrOfvalue[5]) {
            this.setState({
                currentPage:this.presentation[6],
                numberSl:6,
                nameSlides:this.arrNamesOfSlides[6]
            });

        } else if (clickedItemMenu === arrOfvalue[6]) {
            this.setState({
                currentPage:this.presentation[8],
                numberSl:8,
                nameSlides:this.arrNamesOfSlides[8]
            });
        }
    };
    ///////////RENDER
    //MOBILE
    mobileRenderTop() {
            return (<div className="top-bar">
                <div className="left-bar__menu">
                    <span className="menu-item">
                        <span className="burger-menu"></span>
                        <p>Меню</p></span>
                    {this.renderBurgerMenu()}
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
                        <a className="social-icon__vk" href="https://vk.com/">VK</a>
                        <a className="social-icon__fb" href="https://www.facebook.com/">FB</a>
                        <a className="social-icon__inst" href="https://www.instagram.com/">INST</a>
                    </li>
                </ul>
            <dl className="pagination">
                <dt className="current-slide">0{this.state.numberSl + 1}</dt>
                <dd className="count-slides">-09</dd>
            </dl>
        </div>)
    };
    renderBurgerMenu() {
        const arrOfNamesMenu = ["Главная","Направления","Преподаватели","Абонементы","Расписания","Отзывы","Контакты"];
        const arrOfvalue = ['main','direction','teachers','abonements','schedule','reviews','contacts'];
        const navListItem = () => {
            return (arrOfNamesMenu.map((itemMenu,i) => {
                return (<li key={itemMenu} id={arrOfvalue[i]} onClick={this.closeBurgerMenuAndGoToPage}>{itemMenu}</li>)
            }))
        };
        return (
                <ul className="nav-menu-list hide">
                    {window.outerWidth < 765 ? <li className="close-mobile-burger" onClick={this.closeBurgerMenu}>X</li>:""}
                    {navListItem()}
                </ul>)
    };
    //FULLSCREEN
    renderForFullScreen() {
        
        return(<div className="main">
        <div className="left-bar">
            <div className="left-bar__menu">
            
                <span className="menu-item"><span className="burger-menu"></span><p>Меню</p></span>
                {this.renderBurgerMenu()}
            </div>
            <span className="logo"></span>
            <ul className="social">
                <li className="social-icon">
                    <a className="social-icon__vk" href="https://vk.com/">VK</a>
                    <a className="social-icon__fb" href="https://www.facebook.com/">FB</a>
                    <a className="social-icon__inst" href="https://www.instagram.com/">INST</a>
                </li>
            </ul>
        </div>
        
        <div className="slides-container">
            <h3 className="name-current-slide">{this.state.nameSlides}</h3>
            {this.state.currentPage}
        </div>
        <div className="right-bar">
            <div className="tel">7 925 022 78 32</div>
            <dl className="pagination">
                <dt className="current-slide">0{this.state.numberSl + 1}</dt>
                <dd className="count-slides">-09</dd>
            </dl>
            <span className="name-next-slide">{this.arrNamesOfSlides[this.state.numberSl + 1]}
                <span className="arrow-down"><p className="trigon"></p></span>
            </span>
        </div>
    </div>)
    };
    ////////
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
    /*
    shouldComponentUpdate() {
        console.log('teee');
        return true;
    };*/
    blabla = () => {
        console.log(window.innerWidth,'resize',this.state);
        window.addEventListener('resize',() => {
            console.log(window.innerWidth,'resize',this.state);
            this.setState({widthWindow: window.innerWidth});
        });
    };
    
    componentDidMount() {
        this.burgerMenuButton();
        this.clickToArrow();
        this.blabla();
        //this.shouldComponentUpdate();
    };
};