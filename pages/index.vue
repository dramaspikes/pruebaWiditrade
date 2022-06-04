<template>
  <div>
    <WiditradeLogo></WiditradeLogo>
    <Login></Login>
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
