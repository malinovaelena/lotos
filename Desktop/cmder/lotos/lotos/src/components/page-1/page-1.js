import './page-1.css';
import logo from './img/logo.png';
import React from 'react';

export default class PageMain extends React.Component {
    renderLogo() {
        return(<img className="big-logo" src={logo} alt="школа йоги"/>)
    };
    render() {
        return(<div className="page-main" key="main-page">
            {window.outerWidth < 1366 ? "":this.renderLogo()}
            
            <div className="title-container">
                <h1 className="main-title">Lotos</h1>
                
                <span className="main-text">
                    <span className="bigger arrow-down"></span>
                    <p>Приглашаем вас и ваших друзей<br/>
                        на бесплатное пробное занятие</p>
                </span>
            </div>
        </div>)
    }
};
