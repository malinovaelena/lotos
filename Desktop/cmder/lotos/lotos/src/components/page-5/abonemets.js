import React from 'react';
import './abonemets.css';

//доделать блоки с чекобоксами абонементов ✓
//подумать над кнопками и сделать их более переиспользуемыми
//сделать расписание
//подумать над архитектурой блоков,и далее переиспользовать блоки для
//2/4/7 ==== одинаковые блоки с разным наполнением
//3//8 === абсолютно одинаковы
//1 - главная не переспользуешь, 5 -- виды абонементов,6 -- расписание, 9 карта и схема

export default class Abonemets extends React.Component {
    
    renderCheckbox = (name,price, id) => {
        
            return(
                <div className="abonement-item" key={id}>
            <h4 className="abonemet-name">{name}</h4>
            <p className="abonement-price"><strong>{price}</strong>руб.</p>

            <input type="checkbox" id="bla" className="not-visible input-abon"/>
            <label htmfor="bla" className="label-abonement"></label>
        </div>
            ) 
    }
    abonemetsInfo = {
        "разовое занятие":300,
        "месяц занятий":2000,
        "2 месяца занятий":3500,
        "3 месяца занятий":4500,
        "полгода занятий":8000,
        "год занятий":14000,
    };
    renderAllCheckbox() {
        let pareIn = Object.entries(this.abonemetsInfo);
        return pareIn.map(([key,value])=> {
            return (this.renderCheckbox(key,value,key));
        });
    };
    render() {
        return(<div className="abonements" key="abonements">
        <form className="table-of-abonements">

        {this.renderAllCheckbox()}

        </form>
        <button type="submit" className="submit-button order-button">Заказать абонемент</button>
        </div>)
    }
};