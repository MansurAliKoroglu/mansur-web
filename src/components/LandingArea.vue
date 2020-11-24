<template>
  <section class="landing-area">
    <AnimatedTypewriter
      text="Hi, I am Mansur"
      :cursor-style="{'border-left': '2px solid gray'}"
    />
    <h3 class="welcome-text">Welcome to my page</h3>
    <div class='open-source-info-area'>
      <span>Hey! This website is an open source VueJS project. Take a look at the code.</span>
      <a href="https://github.com/MansurAliKoroglu/mansur-web" target="_blank">
        <font-awesome-icon
          :icon="['fab', 'github']"
          :size="$mq === 'xl' ? '3x' : '2x'"
          class="github-icon"
        />
      </a>
    </div>
    <span class="scroll-down-message">{{$mq === 'md' || $mq === 'lg' || $mq === 'xl' ? 'Scroll' : 'Slide'}} down for details about me!</span>
    <div class="scroll-down-animation-area">
      <scroll-down-animation />
    </div>
  </section>
</template>

<script>
  import AnimatedTypewriter from '../components/AnimatedTypewriter';
  import ScrollDownAnimation from './ScrollDownAnimation';

  export default {
    components: {
      AnimatedTypewriter,
      ScrollDownAnimation
    }
  };
</script>

<style scoped>
  @import '../assets/styles/variables.css';

  .landing-area {
    background-color: var(--header-color);
    color: white;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
  }

  .animated-typewriter {
    font-size: 2rem;
    margin-top: 3rem;
  }

  .welcome-text {
    margin: 0;
    margin-left: 0.3rem;
    font-size: 1rem;
    font-weight: normal;
  }

  .open-source-info-area {
    margin: 4rem 0;
    font-size: 0.6rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .github-icon {
    margin-top: 0.3rem;
  }

  .scroll-down-message {
    text-align: center;
  }

  .scroll-down-animation-area {
    height: 175px;
    display: flex;
    justify-content: center;
  }

  .scroll-down-animation {
    width: 50%;
    max-width: 250px;
  }

  @media (min-width: 992px) {
    .landing-area {
      position: relative;
    }

    .animated-typewriter {
      font-size: 3rem;
    }

    .welcome-text {
      font-size: 1rem;
      margin-left: 1rem;
    }

    .open-source-info-area {
      position: absolute;
      top: 0;
      right: 0;
      width: 300px;
      margin: 1rem;
      font-size: 0.7rem;
      flex-direction: row;
      justify-content: space-between;
    }

    .scroll-down-message {
      margin-top: 15rem;
    }
  }

  @media (min-width: 1200px) {
    .animated-typewriter {
      font-size: 4rem;
    }

    .welcome-text {
      font-size: 1.2rem;
    }
  }
</style>
