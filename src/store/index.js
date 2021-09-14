import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    colors: [
      {
        name: "red",
        color: "#FF0000",
        time: 10,
        active: false
      },
      {
        name: "yellow",
        color: "#FFFF00",
        time: 3,
        active: false
      },
      {
        name: "green",
        color: "#00FF00",
        time: 15,
        active: false
      }
    ],
    goDown: true,
    timeLeft: null
  },
  getters: {
    getActiveColor(state) {
      return state.colors.filter(color => color.active == true)[0];
    },
    getColors(state) {
      return state.colors;
    },
    // Получаем индекс цвета по названию
    getIndex: state => color => {
      let index = 0;
      for (let i = 0; i < state.colors.length; i ++) {
        if (color == state.colors[i].name) {
          index = i;
          break;
        }
      }
      return index;
    },
    getTime(state) {
      return state.timeLeft;
    },
    getGoDown(state) {
      return state.goDown;
    }
  },
  mutations: {
    setActiveColor(state, index) {
      state.colors.forEach(color => {
        color.active = false;
      })
      state.colors[index].active = true;
    },
    setTime(state, time) {
      state.timeLeft = time;
    },
    setGoDown(state, val) {
      state.goDown = val;
    }
  },
  actions: {
    changeTime(state, time) {
      localStorage.setItem('timeLeft', time);
      state.commit('setTime', time);
    },
    async switchColor(state, color) {
      let colors = state.getters.getColors;
      // Получаем индекс текущего цвета
      let index = state.getters.getIndex(color);
      
      // Устанавливаем направление движения и записываем его в localStorage
      if (index + 1 == colors.length) {
        localStorage.setItem('goDown', false)
        state.commit('setGoDown', false);
      }

      if (index == 0) {
        localStorage.setItem('goDown', true)
        state.commit('setGoDown', true);
      }

      // Меняем цвет на предыдущий или следующий
      if (state.getters.getGoDown) {
        index++;
      } else {
        index--;
      }

      state.commit('setTime', colors[index].time)
      state.commit('setActiveColor', index);

      // Возвращаем индекс следующего цвета
      return index;
    },
    load(state) {
      // Считываем все из localStorage перед загрузкой приложения
      let time = +localStorage.getItem('timeLeft');
      let goDown = localStorage.getItem('goDown');
      if (time != undefined) state.commit('setTime', time);
      if (goDown != undefined) state.commit('setGoDown', goDown);
    }
  }
})
