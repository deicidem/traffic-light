<template>
  <div class="box">
    <!-- Создаем таймер. Ключ чтобы обновлять таймер -->
    <timer @out="switchLight()" 
           @tick="changeTime($event)" 
           @blink="blink()"
           :key="activeColor.color"
           :totalTime="totalTime <= activeColor.time ? totalTime : activeColor.time">
    </timer>
    <!-- Создаем фонари светофора -->
    <light v-for="(item, i) in colors" 
          :key="i" 
          :disabled="disable || !item.active"
          :color="item.color"
          >
    </light>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';
import Timer from '../components/Timer.vue'
import Light from '../components/Light.vue'
export default {
  components: {
    Timer,
    Light
  },
  data: () => ({
    disable: false
  }),
  computed: {
    ...mapGetters({
      colors: 'getColors',
      totalTime: 'getTime',
      activeColor: 'getActiveColor'
    }),
  },
  methods: {
    ...mapActions({
      switchColor: 'switchColor',
      changeTime: 'changeTime'
    }),
    async switchLight() {
      // Получаем индекс следующего цвета
      let ind = await this.switchColor(this.activeColor.name);

      // Меняем роут
      this.$root.$router.push({name: 'home', params: {color: this.colors[ind].name}});
    },
    // Реализация моргания светофора
    blink() {
      this.disable = true;
      setTimeout(() => {
        this.disable = false;
      }, 500)
    },
  },
}
</script>

<style lang="sass">
  .box
    position: fixed
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    background: #000
    padding: 20px
    border-radius: 5px
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
  .light
    width: 200px
    height: 200px
    border: 1px solid black
    border-radius: 50%
    background: #fff
    margin: 10px 0
    opacity: 0.5
  .active
    opacity: 1
</style>