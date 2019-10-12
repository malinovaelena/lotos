import React from 'react';
import './reviews.css';
import alina from './img/alina.png';


export default class Reviews extends React.Component {
    renderArrows() {
        return(<div className="arrows-container persons-navigation">
        <div className="arrow-right"><p className="trigon-right"></p></div>
        <div className="arrow-left"><p className="trigon-left"></p></div>
    </div>)
    }
    renderUsersList() {
        return(<ul className="ul-persons-list">
        <li className="item-name-person active">Жанна Блиц</li>
        <li className="item-name-person">Анна Наумова</li>
        <li className="item-name-person">Виталий Коробко</li>
        <li className="item-name-person">Юлианна Снежная</li>
        <li className="item-name-person">Светлана Ветрова</li>
     </ul>)
    }
    render() {
        return (<div className="reviews-container" key="comments-slide">
            <div className="names-persons-list">
                {window.outerWidth < 765? this.renderArrows():this.renderUsersList()}
                
            </div>
                <div className="review-block">
                    <div className="person-card">
                        <span className="person-data">
                            <img alt="" src={alina} className="person-photo"/>
                            <p className="name-person">Арина Наумова</p>
                            <p className="age-person">35 лет</p>
                        </span>
                        <span className="persons-comment">
                        Не знаю, как остальные, но после занятий йогой хочется начать новую здоровую жизнь, хочется поесть овощей и фруктов и поднять свой иммунитет. Теперь для меня день занятий йогой — это день здоровья.
                        <br/>

                        После упорных занятий я стала меньше болеть, и поняла, 
в чем смысл всех упражнений. Позы получаются элегантно,  и не больно только тогда, когда не прилагаешь усилия,
а остаёшься расслабленным на протяжении всего урока.
                        </span>
                        <button className="add-to try-it-button">Попробовать тоже</button>
                    </div>
                </div>
            </div>)
    }
};
// 21/31 ГОД
// 22/23/24/32/33/34/ ГОДА
// 18/19/20/25/26/27/28/29/30/35/36/37/38/39/40 ЛЕТ