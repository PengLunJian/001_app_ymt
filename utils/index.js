/**
 * 
 * @param {*} date 
 * @param {*} type 
 */
export const dateFormat = (date, type) => {
    let str = '';
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    const monthStr = month > 9 ? '' + month : '0' + month;
    const dayStr = day > 9 ? '' + day : '0' + day;
    switch (type) {
        case 'yyyy/mm/dd':
            str = year + '/' + monthStr + '/' + dayStr;
            break;
        default:
            str = year + '-' + monthStr + '-' + dayStr;
            break;
    }
    return str;
}