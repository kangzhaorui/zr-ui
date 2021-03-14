/*
 * @Author: your name
 * @Date: 2021-03-14 15:19:20
 * @LastEditTime: 2021-03-14 15:28:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /localProject/one-ui/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
//引入button
import OneButton from './components/button.vue'
Vue.config.productionTip = false
Vue.component(OneButton.name, OneButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
