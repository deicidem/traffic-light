<template>
  <div class="timer">
    {{time}}
  </div>
</template>

<script>
export default {
  props: {
    totalTime: Number
  },
  data: () => ({
    time: null,
  }),
  methods: {
    startTimer() {
      // Сообщаем, что прошла секунда и передаем оставшееся время. Это для localStorage
      this.$emit('tick', this.time);
      setTimeout(() => {
        if (this.time > 1) {
          this.time--;
          
          // Сообщаем, что осталось 3 секунды и фонарю светофора пора мигать
          if (this.time < 3) {
            this.$emit('blink');
          }
          
          // Начинаем таймер заново
          this.startTimer();
        } else {
          // Сообщаем, что время вышло
          this.$emit('out')
        }
      }, 1000)
    }
  },
  mounted() {
    // Передаем максимальное время, чтобы с ним можно было работать
    this.time = this.totalTime;
    this.startTimer();
  }
}
</script>

<style lang="sass">
  .timer
    font-size: 36px
    color: #fff
    text-align: center
    padding: 20px
</style>