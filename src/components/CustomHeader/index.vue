<template>
  <header>
    <div class="logo">MA</div>
    <mq-layout :mq="['xs', 'sm', 'md']">
      <mobile-nav />
    </mq-layout>
    <mq-layout mq="lg+">
      <desktop-nav />
    </mq-layout>
  </header>
</template>

<script>
  import MobileNav from './MobileNav';
  import DesktopNav from './DesktopNav';

  export default {
    components: {
      MobileNav,
      DesktopNav
    }
  };
</script>

<style scoped>
  @import '../assets/styles/variables.css';

  header {
    width: 100%;
    height: var(--header-height);
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--header-color);;
    color: white;
    padding: 0 1rem;
    box-shadow: 0px 0px 9px 3px rgba(41, 41, 41, .5);
  }

  .logo {
    user-select: none;
    font-size: 1.7rem;
    font-weight: bold;
  }
</style>
