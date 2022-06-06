<template>
  <div class="page">
    <LoginCard></LoginCard>
    <img src="..\static\portatil.png" alt="Person using a laptop." />
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
</style>
