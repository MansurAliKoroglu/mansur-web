<template>
  <section class="my-skills-section">
    <h2>My Skills</h2>
    <div class="skill-displays">
      <div class="skill-display">
        <SkillChart title="NodeJS - Express" :level="5" style="width: 260px" />
        <SkillChart title="VueJS" :level="5" style="width: 260px" />
        <SkillChart title="HTML/CSS/JS" :level="5" style="width: 260px" />
        <SkillChart title="Python - Django" :level="3" style="width: 260px" />
        <SkillChart title="ReactJS" :level="3" style="width: 260px" />
      </div>
      <div class="skill-display">
        <SkillChart title="Docker" :level="5" style="width: 260px" />
        <SkillChart title="Git" :level="5" style="width: 260px" />
        <SkillChart title="Linux" :level="4" style="width: 260px" />
      </div>
      <div class="skill-display">
        <SkillChart title="SRP/DRY etc." :level="5" style="width: 260px" />
        <SkillChart title="Clean Code" :level="5" style="width: 260px" />
        <SkillChart title="Unit Testing" :level="4" style="width: 260px" />
        <SkillChart title="e2e Testing" :level="4" style="width: 260px" />
      </div>
    </div>
    <!-- TODO: Show more button will be added here for redirecting user to a page to show all the skills -->
  </section>
</template>

<script>
  import SkillChart from '../components/SkillChart';

  export default {
    components: {
      SkillChart
    }
  };
</script>

<style scoped>
  @import '../assets/styles/variables.css';

  .my-skills-section {
    color: var(--header-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2rem 0;
  }

  h2 {
    margin-top: 0;
  }

  .skill-displays {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 1rem 0;
    background-color: rgb(235, 235, 235, .3);
    border-radius: 10px;
    box-shadow: 0px 0px 2px 3px rgba(41, 41, 41, .1);
  }

  .skill-display {
    margin: 1rem;
  }
</style>
