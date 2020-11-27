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

</style>
