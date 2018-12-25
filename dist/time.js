export default function timeToFormatString(value, format = 'yyyy-MM-dd hh:mm:ss') {
    if (!value) {
        return '';
    }
    let date = null;
    let dateStrings = value.match(/\([^\\)]+\)/g);
    if (dateStrings) {
        let timestamp = parseInt(dateStrings[0].substring(1, dateStrings[0].length - 1));
        date = new Date(timestamp);
    }
    else {
        date = new Date(value);
    }
    if (!date) {
        return '';
    }
    let transforms = {};
    transforms['yyyy'] = date.getFullYear();
    let MM = date.getMonth() + 1;
    transforms['MM'] = MM < 10 ? ('0' + MM) : MM;
    let dd = date.getDate();
    transforms['dd'] = dd < 10 ? ('0' + dd) : dd;
    let hh = date.getHours();
    transforms['hh'] = hh < 10 ? ('0' + hh) : hh;
    let mm = date.getMinutes();
    transforms['hh'] = mm < 10 ? ('0' + mm) : mm;
    let ss = date.getSeconds();
    transforms['ss'] = ss < 10 ? ('0' + ss) : ss;
    switch (date.getDay()) {
        case 0:
            transforms['WWCN'] = '星期日';
            transforms['WWEN'] = 'Sunday';
            break;
        case 1:
            transforms['WWCN'] = '星期一';
            transforms['WWEN'] = 'Monday';
            break;
        case 2:
            transforms['WWCN'] = '星期二';
            transforms['WWEN'] = 'Tuesday';
            break;
        case 3:
            transforms['WWCN'] = '星期三';
            transforms['WWEN'] = 'Wednesday';
            break;
        case 4:
            transforms['WWCN'] = '星期四';
            transforms['WWEN'] = 'Thursday';
            break;
        case 5:
            transforms['WWCN'] = '星期五';
            transforms['WWEN'] = 'Friday';
            break;
        case 6:
            transforms['WWCN'] = '星期六';
            transforms['WWEN'] = 'Saturday';
            break;
    }
    for (const Key in transforms) {
        if (transforms.hasOwnProperty(Key) && transforms[Key] !== '') {
            // resultStr += (resultStr ? '&' : '') + PKey + '.' + Key + '=' + value[Key];
            format.replace(Key, transforms[Key]);
        }
    }
    return format;
}
