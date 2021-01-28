
import { useEffect, useState } from 'react';
const weekDay = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
export const useTimeTick = () => {
    const [time, setTime] = useState(getDate());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTime(getDate());
      }, 1000);
      return () => clearInterval(timer);
    }, []);
  
    return time
  };

  function getDate() {
    let date = new Date();
    let data = {
        year: date.getFullYear() + '',
        month: (date.getMonth() + 1)  < 10 ? '0' + (date.getMonth() + 1) :  '' + (date.getMonth() + 1),
        day: date.getDate() < 10 ? '0' + date.getDate() :  '' + date.getDate(),
        hour: date.getHours() < 10 ? '0' + date.getHours() :  '' + date.getHours(),
        minute: date.getMinutes() < 10 ? '0' + date.getMinutes() :  '' + date.getMinutes(),
        second: date.getSeconds() < 10 ? '0' + date.getSeconds() :  '' + date.getSeconds(),
        week: filterWeek(date.getDay())
    }
    return data;
}

function filterWeek(week) {
    return weekDay[week]
}