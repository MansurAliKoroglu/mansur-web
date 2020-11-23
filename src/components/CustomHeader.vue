<template>
  <header>
    <div class="logo">MA</div>
    <mq-layout :mq="['xs', 'sm', 'md']">
      <font-awesome-icon
        :icon="['fas', 'bars']"
        @click="toggleDrawer"
      />
      <transition name="drawer-toggle">
        <nav v-show="isDrawerOpened" class="drawer">
          <div class="drawer-header">
            <font-awesome-icon :icon="['fas', 'bars']" @click="toggleDrawer" />
          </div>
          <hr />
        </nav>
      </transition>
    </mq-layout>
    <mq-layout mq="lg+">
      <nav></nav>
    </mq-layout>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        isDrawerOpened: false
      };
    },
    methods: {
      toggleDrawer() {
        this.isDrawerOpened = !this.isDrawerOpened;
      }
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

  .drawer {
    width: 75%;
    max-width: 400px;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    transform: translateX(0);
    background-color: var(--header-color);
    display: flex;
    flex-direction: column;
  }

  .drawer-header {
    height: var(--header-height);
    padding: 0 1rem;
    display: flex;
    align-items: center;
  }

  .drawer hr {
    width: 85%;
  }

  .drawer-toggle-enter-active, .drawer-toggle-leave-active {
    transition: transform .5s;
  }

  .drawer-toggle-enter, .drawer-toggle-leave-to {
    transform: translateX(100%);
  }
</style>
