import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap'
import 'bootstrap/scss/bootstrap.scss'

import { date, currency } from '../src/methods/filters.js'

import './assets/all.scss'

// 引入 VeeValidate 元件跟功能
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
// 引入 VeeValidate 的驗證規則
import * as VeeValidateRules from '@vee-validate/rules'
// 設定語言環境
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n'
// 引入 VeeValidate 的繁體中文語系檔
// 使用 VeeValidateI18n.loadLocaleFromURL 語法載入繁體中文的 CDN
// 只要將末端的 ar.json 改為 zh_TW.json 即可，這段意思是語言代碼
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// 定義驗證規則，驗證失敗時才會跳出提示文字
Object.keys(VeeValidateRules).forEach(rule => {
  if (rule !== 'default') {
    defineRule(rule, VeeValidateRules[rule])
  }
})

// 再使用 configure 將回饋訊息的語言設定為繁體中文，並在輸入內容就即時驗證
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 設定預設語系
setLocale('zh_TW')

// 掛載 Global 的 VeeValidate 元件
app.component('VForm', Form) // 對應到 HTML 中原本的 form 標籤
app.component('VField', Field) // 對應到 input 標籤
app.component('ErrorMessage', ErrorMessage) // 驗證失敗時會顯示的提示訊息

app.config.globalProperties.$filters = {
  date,
  currency
}

app.use(createPinia())
app.use(router)

app.mount('#app')
