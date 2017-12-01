// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import './config/rem'
import {RollNotice, RollNoticeItem} from 'vue-ydui/dist/lib.rem/rollnotice'
import {Slider, SliderItem} from 'vue-ydui/dist/lib.rem/slider'
import {Accordion, AccordionItem} from 'vue-ydui/dist/lib.rem/accordion'
import {LightBox, LightBoxImg, LightBoxTxt} from 'vue-ydui/dist/lib.rem/lightbox'
import {TimeLine, TimeLineItem} from 'vue-ydui/dist/lib.rem/timeline'
/* 使用px：import {TimeLine, TimeLineItem} from 'vue-ydui/dist/lib.px/timeline'; */

Vue.component(TimeLine.name, TimeLine)
Vue.component(TimeLineItem.name, TimeLineItem)
Vue.prototype.$http = axios
Vue.component(RollNotice.name, RollNotice)
Vue.component(RollNoticeItem.name, RollNoticeItem)
Vue.component(Slider.name, Slider)
Vue.component(SliderItem.name, SliderItem)
Vue.component(Accordion.name, Accordion)
Vue.component(AccordionItem.name, AccordionItem)
Vue.config.productionTip = false
Vue.component(LightBox.name, LightBox)
Vue.component(LightBoxImg.name, LightBoxImg)
Vue.component(LightBoxTxt.name, LightBoxTxt)
/* eslint-disable no-new */

// Vue.filter('discount', function (value) {
//   return value.split('，')[0]
// })
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
