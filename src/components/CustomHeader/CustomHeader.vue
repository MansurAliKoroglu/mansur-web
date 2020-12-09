<template>
  <header>
    <div class="logo">MA</div>
    <MqLayout :mq="['xs', 'sm']">
      <MobileNav
        :routes="routes"
      />
    </MqLayout>
    <MqLayout mq="md+">
      <DesktopNav
        :routes="routes"
      />
    </MqLayout>
  </header>
</template>

<script>
  import MobileNav from './MobileNav';
  import DesktopNav from './DesktopNav';

  export default {
    components: {
      MobileNav,
      DesktopNav
    },
    props: {
      routes: {
        type: Array
      }
    },
  };
</script>

<style scoped>
  @import '../../assets/styles/variables.css';

  header {
    width: 100%;
    height: var(--header-height);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--header-color);
    padding: 0 1rem;
    box-shadow: 0px 0px 9px 3px rgba(41, 41, 41, .5);
    z-index: 100;
  }

  .logo {
    user-select: none;
    font-size: 1.7rem;
    font-weight: bold;
  }
</style>
