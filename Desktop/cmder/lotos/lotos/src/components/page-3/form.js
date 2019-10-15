import React from 'react';
import './form.css';

function Form() {
        return(<div className="form" key="form-one">
            <form className="form-with-discount">
            <h3 className="discount-text">
                <strong className="discount">10% </strong>
            cкидка на абонемент
            </h3>
            <p>Мы сделаем для вас 10% скидку на абонемент,
                купленный в день посещения вводного занятия.
            </p>
            <input type="text" className="form-input" placeholder="Ваше имя"/>
            <input type="tel" className="form-input" placeholder="Ваш телефон"/>
            <button className="submit">Отправить заявку</button>
            <p className="small-text">Нажимая «Отправить заявку», 
                вы даете <a href="" className="users-agreement">согласие</a> на обработку своих персональных данных</p>
            </form>
        </div>)
};
function FormTwo() {
    return(<div className="form slide-eight" key="form-two-slide">
        <form action="/sendEmail.js" method="post" className="form-with-discount" >
        <h3 className="discount-text">
            <strong className="discount">10% </strong>
        cкидка на абонемент
        </h3>
        <p>Хотите скидку на абонемент? Приведите с собой друзей и получите -10% за каждого пришедшего
        </p>
        <input type="text" className="form-input" placeholder="Ваше имя"/>
        <input type="tel" className="form-input" placeholder="Ваш телефон"/>
        <button type="submit" name="forExsample" className="submit">Отправить заявку</button>
        <p className="small-text">Нажимая «Отправить заявку», 
            вы даете <a href="" className="users-agreement">согласие</a> на обработку своих персональных данных</p>
        </form>
    </div>)
};
export {Form, FormTwo};