<template>
  <div>
    <CustomHeader
      :routes="[
        {
          name: 'My Skills',
          href: '#my-skills-section'
        }
      ]"
    />
    <main>
      <LandingSection />
      <MySkillsSection id="my-skills-section" class="section" />
    </main>
    <CustomFooter />
  </div>
</template>

<script>
  import CustomHeader from '../components/CustomHeader/CustomHeader';
  import LandingSection from '../components/LandingSection';
  import MySkillsSection from '../components/MySkillsSection';
  import CustomFooter from '../components/CustomFooter';

  export default {
    name: 'Home',
    components: {
      CustomHeader,
      LandingSection,
      MySkillsSection,
      CustomFooter
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
