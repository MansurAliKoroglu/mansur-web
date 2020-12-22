<template>
  <div>
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
    font-family: 'Poppins', sans-serif;
    color: white;
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

  button {
    font-family: inherit;
    border: none;
    cursor: pointer;
    outline: none;
  }
</style>
