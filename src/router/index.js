import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import store from '../store/index';
Vue.use(VueRouter)

const routes = [
  
  // Используется один компонент для избежания повторения кода, цвет передаем как параметр
  {
    path: '/:color',
    name: 'home',
    component: Home,
    // Устанавливаем активный цвет перед загрузкой страницы.
    beforeEnter (to, from, next) {
      let index = store.getters.getIndex(to.params.color);
      store.commit('setActiveColor', index);
      next();
    }
  },
  // Любой неправильный путь перенаправляем на стандартный цвет red
  {
    path: '*',
    redirect: '/red'
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
