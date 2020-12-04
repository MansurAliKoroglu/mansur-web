<template>
  <footer>
    <div class="icons">
      <a href="https://github.com/MansurAliKoroglu" target="_blank">
        <FontAwesomeIcon
          :icon="['fab', 'github']"
        />
      </a>
      <a href="https://stackoverflow.com/users/10530420/mansur" target="_blank">
        <FontAwesomeIcon
          :icon="['fab', 'stack-overflow']"
        />
      </a>
      <a href="mailto:mansuralikoroglu@gmail.com">
        <FontAwesomeIcon
          :icon="['fas', 'at']"
        />
      </a>
      <a href="tel:+905059150896">
        <FontAwesomeIcon
          :icon="['fas', 'phone']"
        />
      </a>
    </div>
    <div class="author-info">
      <span>Designed and coded by</span>
      <span>Mansur Ali Koroglu</span>
    </div>
  </footer>
</template>

<script>
  export default {
  };
</script>

<style scoped>
  @import '../assets/styles/variables.css';

  footer {
    background-color: var(--header-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    position: relative;
  }

  .icons > * {
    margin: 0.4rem;
  }

  .author-info {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0.4rem;
    font-size: 0.5rem;
    width: 100px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  @media (min-width: 576px) {
    .author-info {
      font-size: 0.6rem;
      width: auto;
    }
  }
</style>
