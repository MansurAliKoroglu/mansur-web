<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  #app {
    font-family: 'Poppins', sans-serif;
    color: white;
  }

  button {
    font-family: inherit;
    border: none;
    cursor: pointer;
    outline: none;
  }
</style>
