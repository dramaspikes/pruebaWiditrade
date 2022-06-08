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
  left: calc(50% - 311px / 2);
  right: 60.8%;
  top: 26.35%;
  bottom: 63.55%;
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
    top: 16.02%;
    left: 39.5%;
    right: 42.34%;
  }

  .form {
    /* login - wrapper */
    width: 408px;
    height: 285px;
    left: 13.04%;
    top: 48.68%;
  }
}

@media screen and (min-width: 1024px) {
  .logo {
    /* logo */
    left: calc(53.14% - (356px / 2) - 16px);
    top: 25.39%;
    bottom: 66.6%;
  }

  .backlayer {
    width: 44.17%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 100;
    box-shadow: none;
    border-radius: 0;
  }
}
</style>
