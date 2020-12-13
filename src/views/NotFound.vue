<template>
  <Fragment>
    <CustomHeader />
    <main>
      <span class="error-code">404</span>
      <span class="error-text">Page Not Found</span>
      <button @click="redirectToHomePage">GO TO HOME PAGE</button>
    </main>
    <CustomFooter />
  </Fragment>
</template>

<script>
  import { Fragment } from 'vue-fragment';
  import CustomHeader from '../components/CustomHeader/CustomHeader';
  import CustomFooter from '../components/CustomFooter';

  export default {
    name: 'NotFound',
    components: {
      Fragment,
      CustomHeader,
      CustomFooter
    },
    methods: {
      redirectToHomePage() {
        this.$router.push('/');
      }
    }
  };
</script>

<style scoped>
  @import '../assets/styles/variables.css';

  main {
    width: 100vw;
    height: 100vh;
    background-color: var(--header-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .error-code {
    font-size: 5rem;
  }

  .error-text {
    margin-bottom: 2rem;
  }

  button {
    background-color: orangered;
    color: white;
    padding: 0.5rem;
    font-weight: bold;
  }

  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>
