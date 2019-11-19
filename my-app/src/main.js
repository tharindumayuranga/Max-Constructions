import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VCurrencyField from 'v-currency-field'
import { VTextField } from 'vuetify/lib'  //Globally import VTextField

Vue.component('v-text-field', VTextField)

Vue.config.productionTip = false

import Router from './router.js'

new Vue({
    vuetify,
    router: Router,
    render: h => h(App)
}).$mount('#app')

Vue.use(VCurrencyField, { 
	locale: 'en',
	decimalLength: 2,
	autoDecimalMode: true,
	min: null,
	max: null,
    defaultValue: 0,
})