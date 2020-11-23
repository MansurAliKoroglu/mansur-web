<template>
  <div class="scroll-down-animation">
    <div class="arrow-down-image-first">
      <img src="../assets/images/arrow-down.png" alt="arrow-down" />
    </div>
    <div class="arrow-down-image-second">
      <img src="../assets/images/arrow-down.png" alt="arrow-down" />
    </div>
  </div>
</template>

<script>
  export default { };
</script>

<style scoped>
  .scroll-down-animation {
    position: relative;
  }

  .arrow-down-image-first {
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    animation: move-down-and-fade 4s infinite;
  }

  .arrow-down-image-first img {
    width: 100%;
  }

  .arrow-down-image-second {
    text-align: center;
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
  }

  .arrow-down-image-second img {
    width: 100%;
  }

  @keyframes move-down-and-fade {
    0% {
      opacity: 1;
      top: 0;
    }
    30% {
      opacity: 0;
    }
    30%, 100% {
      opacity: 0;
      top: 20%;
    }
  }
</style>
