<template>
  <fragment>
    <font-awesome-icon
      :icon="['fas', 'bars']"
      @click="toggleDrawer"
    />
    <transition name="drawer-toggle">
      <nav v-show="isDrawerOpened">
        <div class="drawer-header">
          <font-awesome-icon :icon="['fas', 'bars']" @click="toggleDrawer" />
        </div>
        <hr />
      </nav>
    </transition>
  </fragment>
</template>

<script>
  import { Fragment } from 'vue-fragment';

  export default {
    components: {
      Fragment
    },
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

  nav {
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

  nav hr {
    width: 85%;
  }

  .drawer-toggle-enter-active, .drawer-toggle-leave-active {
    transition: transform .5s;
  }

  .drawer-toggle-enter, .drawer-toggle-leave-to {
    transform: translateX(100%);
  }
</style>
