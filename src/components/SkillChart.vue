<template>
  <div
    class="skill-chart"
    v-observe-visibility="animate"
  >
    <span class="title">{{title}}</span>
    <div class="dots">
      <span ref="firstDot" class="dot"></span>
      <span ref="secondDot" class="dot"></span>
      <span ref="thirdDot" class="dot"></span>
      <span ref="fourthDot" class="dot"></span>
      <span ref="fifthDot" class="dot"></span>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      level: {
        type: Number,
        required: true,
        validator (value) {
          return value >= 0 && value <= 5
        }
      }
    },
    methods: {
      async animate(isVisible) {
        if (!isVisible) {
          return;
        }
        let levelClass;

        switch (this.level) {
          case 1:
            levelClass = 'level-one';
            break;
          case 2:
            levelClass = 'level-two';
            break;
          case 3:
            levelClass = 'level-three';
            break;
          case 4:
            levelClass = 'level-four';
            break;
          case 5:
            levelClass = 'level-five';
            break;
          default:
            break;
        }

        for (let i = 1; i <= this.level; i++) {
          await new Promise(e => setTimeout(e, 300));

          switch (i) {
            case 1:
              this.$refs.firstDot.classList.add(levelClass);
              break;
            case 2:
              this.$refs.secondDot.classList.add(levelClass);
              break;
            case 3:
              this.$refs.thirdDot.classList.add(levelClass);
              break;
            case 4:
              this.$refs.fourthDot.classList.add(levelClass);
              break;
            case 5:
              this.$refs.fifthDot.classList.add(levelClass);
              break;
            default:
              break;
          }
        }
      }
    }
  };
</script>
<style scoped>
  .skill-chart {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    margin-right: 1rem;
  }

  .dots {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dot {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin: 0 0.2rem;
    transition: background-color .3s;
    background-color: gray;
  }

  .level-one {
    background-color: #FF0000;
  }

  .level-two {
    background-color: orangered;
  }

  .level-three {
    background-color: orange;
  }

  .level-four {
    background-color: yellowgreen;
  }

  .level-five {
    background-color: lime;
  }
</style>
