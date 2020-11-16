<template>
  <div class="animated-typewriter">
      <div
        class="text"
        :style="{
          transition: `${letterTypingTime}ms`,
          width: `${width}px`
        }"
      >
        {{ text }}
      </div>
      <div
        class="cursor"
        :style="{...cursorStyle}"
      >
      </div>
      <div
        class="temp-text"
        v-show="tempText"
        ref="tempText"
      >
        {{ tempText }}
      </div>
  </div>
</template>
<script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      },
      'letter-typing-time': {
        type: Number,
        default: 100
      },
      'cursor-style': {
        type: Object
      }
    },
    data() {
      return {
        width: 0,
        tempText: ''
      }
    },
    async mounted() {
      for (let char of this.text) {
        this.tempText += char;

        await new Promise(e => setTimeout(e, this.letterTypingTime));
      }

      this.tempText = null;
    },
    updated() {
      if (this.tempText) {
        this.width = this.$refs.tempText.clientWidth;
      }
    }
  };
</script>
<style scoped>
  .animated-typewriter {
    display: flex;
  }

  .text {
    white-space: nowrap;
    overflow: hidden;
  }

  .cursor {
    animation-name: blink-cursor;
    animation-duration: 0.4s;
    animation-delay: 0.4s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    margin-left: 2px;
    border-left: 2px solid black;
  }

  .temp-text {
    position: fixed;
    left: -999em;
  }

  @keyframes blink-cursor {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>
