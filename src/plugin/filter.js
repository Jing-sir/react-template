import { moment } from "../utils/common";


export const timeStampToDate = (timeStamp, reg = 'YYYY.MM.DD HH:mm:ss') =>{ // 时间戳转时间
     if (!timeStamp) return '暂无相关数据';
     return moment(timeStamp).format(reg);
 };

export const timeDuration = (start, end, key) => { // 时间周期，支持单独获取一个key的时间周期
    const momentDiff = moment(start).diff(moment(end), key, true);
    const timeDuration = moment.duration(momentDiff);
    return key ? momentDiff : {
        years: timeDuration.get('years'),
        months: timeDuration.get('months'),
        weeks: timeDuration.get('weeks'),
        days: timeDuration.get('days'),
        hours: timeDuration.get('hours'),
        minutes: timeDuration.get('minutes'),
        seconds: timeDuration.get('seconds'),
        milliseconds: timeDuration.get('milliseconds'),
    };
};

export const toFixed = (amount = 0, fix = 5) => { // 数字保留精度
    const fixNum = Number(fix);
    // eslint-disable-next-line radix
    if (fixNum === 0) return parseInt(amount);
    const amountArr = String(getFullNum(amount)).split('.');
    const newAmount = amountArr.length > 1 ? `0.${amountArr[1].substr(0, fixNum)}` : amount;
    const isPlus = amountArr.length > 1 && amountArr[0] === '-0' ? '-' : '';
    const data = fixNum ? Number(newAmount).toFixed(fixNum + 1).slice(0, -1) : Number(newAmount);
    return amountArr.length > 1 ? `${isPlus}${Number(amountArr[0])}.${String(data).split('.')[1]}` : data;
};

export const getFullNum = (num) => { // 处理非数字
    if (isNaN(num)) { return num; }
    // 处理不需要转换的数字
    const str = `${num}`;
    if (!/e/i.test(str)) { return num; }
    return (num).toFixed(18).replace(/\.?0+$/, '');
};
