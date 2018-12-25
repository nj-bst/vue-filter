# vue-filter
timespan filter
# Installation
$ npm install --save yyt-vue-filter
# or
$ yarn add yyt-vue-filter

# Import
import yytFilter from 'yyt-vue-filter'
Vue.use(yytFilter)
# Example
{{'/Date(1542017922133)/' | toTimeString}}  => 2018-11-12 18:18:42


{{'/Date(1542017922133)/' | toTimeString('yyyy-MM-dd hh:mm:ss')}}  => 2018-11-12 18:18:42

