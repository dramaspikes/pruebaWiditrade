<template>
  <div class="page">
    <LoginCard class="login-card"></LoginCard>
    <div class="image">
      <div class="gradient"></div>
    </div>
  </div>
</template>

<script>
import LoginCard from '~/components/LoginCard.vue'
export default {
  name: 'IndexPage',
  components: { LoginCard },
}
</script>

<style scoped>
img {
  display: none;
}

@media screen and (min-width: 1024px) {
  .image {
    display: flex;
    position: absolute;
    width: 55.83%;
    height: 100%;
    left: 44.17%;
    top: 0;
    background: url('../static/portatil.jpg');
    box-shadow: 20px 0 80px rgba(53 55 68 / 16%);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    z-index: 0;
  }

  .gradient {
    /* gradient */
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 50;
    padding: 0;
    margin: 0;

    /* Gradient */
    background: linear-gradient(114.44deg, #624af2 0%, #50ddc3 100%);
    opacity: 0.5;
  }
}
</style>
