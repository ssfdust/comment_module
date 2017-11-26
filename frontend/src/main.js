// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElTreeGrid from 'element-tree-grid'
import {
  Table,
  TableColumn,
  Form,
  FormItem,
  Input,
  Button,
  Col,
  Row
} from 'element-ui'

Vue.prototype.$ELEMENT = { size: 'medium' }
Vue.config.productionTip = false
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Col)
Vue.use(Row)
Vue.use(Button)
Vue.component(ElTreeGrid.name,ElTreeGrid);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
