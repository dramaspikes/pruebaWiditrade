<template>
  <div>
    <WiditradeLogo></WiditradeLogo>
    <Login></Login>
    <img src="..\static\portatil.png" alt="Person using a laptop." />
  </div>
</template>

<script>
import WiditradeLogo from '~/components/WiditradeLogo.vue'
import Login from '~/components/Login.vue'
export default {
  name: 'IndexPage',
  components: { WiditradeLogo, Login },
}
</script>

<style scoped>
template {
  position: relative;
  width: 375px;
  height: 812px;
  background: #fff;
}

img {
  display: none;
}
</style>
