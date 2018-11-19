import timeToFormatString from 'time'
const install = function (Vue: any) {
    Vue.filter('toTimeString', function (value: string, format: string = 'yyyy-MM-dd hh:mm:ss') {
        return timeToFormatString(value, format)
    })
}
export default install

