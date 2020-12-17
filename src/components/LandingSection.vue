<template>
  <section class="landing-section">
    <div class="welcome-area">
      <AnimatedTypewriter
        text="Hi, I am Mansur"
        :cursor-style="{'border-left': '2px solid gray'}"
      />
      <h3 class="welcome-text">Welcome to my page</h3>
    </div>
    <div class="open-source-info-area">
      <span class="open-source-info-message">
        Hey! This website is an open source VueJS project. Take a look at the code.
      </span>
      <a href="https://github.com/MansurAliKoroglu/mansur-web" target="_blank">
        <FontAwesomeIcon
          :icon="['fab', 'github']"
          :size="$mq === 'xl' ? '3x' : '2x'"
          class="github-icon"
        />
      </a>
    </div>
    <div class="scroll-down-animation-area">
      <span class="scroll-down-message">
        {{$mq === 'md' || $mq === 'lg' || $mq === 'xl' ? 'Scroll' : 'Slide'}} down to learn details about me!
      </span>
      <ScrollDownAnimation />
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

  .landing-section {
    height: 100vh;
    padding: 2rem;
    padding-top: var(--header-height);
    background-color: var(--header-color);
    display: flex;
    flex-direction: column;
  }

  .animated-typewriter {
    font-size: 2rem;
  }

  .welcome-area {
    padding-top: 1.5rem;
  }

  .welcome-text {
    margin: 0;
    margin-left: 0.6rem;
    font-size: 1rem;
    font-weight: normal;
  }

  .open-source-info-area {
    padding-top: var(--header-height);
    margin: 4rem 0;
    font-size: 0.6rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .open-source-info-message {
    max-width: 300px;
  }

  .github-icon {
    margin-top: 0.3rem;
  }

  .scroll-down-animation-area {
    width: 100%;
    height: 150px;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .scroll-down-message {
    text-align: center;
  }

  @media (min-width: 576px) {
    .landing-area {
      position: relative;
      padding: 0rem;
      padding-top: var(--header-height);
    }

    .welcome-area {
      position: absolute;
      top: 20%;
      padding-left: 10%;
    }

    .open-source-info-area {
      width: 200px;
      position: absolute;
      top: 0;
      right: 0;
      margin: 1rem;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  @media (min-width: 992px) {
    .animated-typewriter {
      font-size: 3rem;
    }

    .welcome-text {
      font-size: 1rem;
      margin-left: 1rem;
    }

    .open-source-info-area {
      width: 300px;
      font-size: 0.7rem;
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
