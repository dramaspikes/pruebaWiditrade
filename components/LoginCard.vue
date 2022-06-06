<template>
  <div class="backlayer">
    <WiditradeLogo class="logo"></WiditradeLogo>
    <LoginForm class="form"></LoginForm>
  </div>
</template>

<script>
import WiditradeLogo from '~/components/WiditradeLogo.vue'
import LoginForm from '~/components/LoginForm.vue'
export default {
  name: 'LoginCard',
  components: { WiditradeLogo, LoginForm },
}
</script>

<style>
.logo {
  position: absolute;
  width: 115px;
  height: 82px;
  left: calc(50% - 311px / 2);
  top: 26.35%;
}

.form {
  position: absolute;
  width: 82.93%;
  height: 35.1%;
  left: 8.53%;
  top: 45.32%;
}

@media screen and (min-width: 720px) {
  .backlayer {
    /* backlayer */
    position: absolute;
    width: 552px;
    height: 749px;
    left: calc(50% - 552px / 2);
    top: 192px;
    background: #fff;

    /* Soft shadow */
    box-shadow: 0 8px 16px rgba(53 55 68 / 4%);
    border-radius: 32px;
  }

  .logo {
    /* logo */
    position: absolute;
    left: 39.49%;
    top: 16.02%;
    width: 20.83%;
    height: 10.95%;
  }

  .form {
    /* login - wrapper */
    position: absolute;
    width: 408px;
    height: 285px;
    left: calc(50% - 408px / 2);
  }
}
</style>
