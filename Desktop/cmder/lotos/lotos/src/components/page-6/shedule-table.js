import React from 'react';
import './shedule-table.css';

export default class SheduleTable extends React.Component {
    arrTime = ['08:00 - 09:25','09:30 − 10:55','11:00 − 12:25','11:00 − 12:25','15:00 − 16:25','17:00 − 18:25'];

    arrDaysOfWeek = ['понедельник','вторник','среда','четверг','пятница','суббота','воскресенье'];

    namesOfLessons = ['Йога для начинающих', 'Кундалини-йога', '','','','','','','',''];
    test = ['Йога для начинающих'];
    namesOfLessons = {
        'Йога для начинающих':'mon',
        'Кундалини йога':'mon',
        'Универсальная йога':'mon',
        'Йогатерапия':'mon',
        'Йога Айенгара':'mon',
        'Аштара Виньяса йога':'mon'
    }
    renderTimingString = (arrTime) => {
        return arrTime.map((time) => {
            return(<td className="rarrra" key={time}>{time}</td>)
        })
    };
    renderString = (arrDaysOfWeek,test) => {
        return arrDaysOfWeek.map((day) => {
            return(
                <tbody key={day}>
                    <tr>
                        <td className="day-of-week">{day}</td>
                        <td>{test}</td>
                        <td>{test}</td>
                        <td>{test}</td>
                        <td>{test}</td>
                        <td>{test}</td>
                        <td>{test}</td>
                    </tr>
                </tbody>)
        });
    }
    render() {
        return(<div className="table" key="shedule">
            <table className="shedule-table">
                <tbody className="shedule-table__string">
                <tr>
                    <td><a href="#" download>Скачать расписание</a></td>
                    {this.renderTimingString(this.arrTime)}
                </tr>
                </tbody>
                {this.renderString(this.arrDaysOfWeek,this.test)}
            </table>
        </div>)
    }
};