<template>
  <nav>
    <ul>
      <li v-for="(route, index) in routes" :key="index">
        <a :href="route.href">{{route.name}}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    props: {
      routes: {
        type: Array
      }
    }
  };
</script>

<style scoped>
  nav ul {
    display: flex;
    justify-content: space-around;
  }

  nav ul li {
    margin: 0 1rem;
  }
</style>
