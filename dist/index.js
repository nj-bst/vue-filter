import timeToFormatString from 'time';
const install = function (Vue) {
    Vue.filter('toTimeString', function (value, format = 'yyyy-MM-dd hh:mm:ss') {
        return timeToFormatString(value, format);
    });
};
export default install;
