<template>
  <div>
    <custom-header />
    <main></main>
  </div>
</template>

<script>
  import CustomHeader from '../components/CustomHeader';

  export default {
    name: 'Home',
    components: {
      CustomHeader
    }
  };
</script>

<style scoped>
  @import '../assets/styles/variables.css';

  main {
    padding-top: var(--header-height);
  }
</style>
