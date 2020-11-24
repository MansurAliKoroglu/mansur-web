<template>
  <div>
    <custom-header />
    <main>
      <landing-area />
    </main>
  </div>
</template>

<script>
  import CustomHeader from '../components/CustomHeader/CustomHeader';
  import LandingArea from '../components/LandingArea';

  export default {
    name: 'Home',
    components: {
      CustomHeader,
      LandingArea
    }
  };
</script>

<style scoped>
  @import '../assets/styles/variables.css';

  main {
    padding-top: var(--header-height);
  }
</style>
