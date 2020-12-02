<template>
  <div>
    <custom-header
      :routes="[
        {
          name: 'My Skills',
          href: '#my-skills-section'
        }
      ]"
    />
    <main>
      <landing-area />
      <my-skills-section id="my-skills-section" class="section" />
    </main>
  </div>
</template>

<script>
  import CustomHeader from '../components/CustomHeader/CustomHeader';
  import LandingArea from '../components/LandingArea';
  import MySkillsSection from '../components/MySkillsSection';

  export default {
    name: 'Home',
    components: {
      CustomHeader,
      LandingArea,
      MySkillsSection
    }
  };
</script>

<style scoped>
  .section {
    padding: 0 1.5rem;
  }

  @media (min-width: 576px) {
    .section {
      padding: 0 5rem;
    }
  }
</style>
