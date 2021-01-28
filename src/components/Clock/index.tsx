import { useTimeTick } from '../../utils';
import './clock.scss';

export const Clock = () => {
    let date = useTimeTick();
    return (
        <div className="g-clock">
           <div className="g-clock-time">
                <span>{date.hour}</span>
                <span className="g-clock-symbol">:</span>
                <span>{date.minute}</span>
                <span className="g-clock-symbol"></span>
                <span>{date.second}</span>
           </div>
           <div className="g-clock-date">
               <div className="g-clock-date-week">{date.week}</div>
               <div className="g-clock-date-day">
                <span>{date.year}</span>
                年
                <span>{date.month}</span>
                月
                <span>{date.day}</span>
                日
               </div>
           </div>
        </div>
    )
}
