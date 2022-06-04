<template>
  <div id="login">
    <label id="user" for="username">User</label>
    <input
      v-model="input.username"
      type="text"
      name="username"
      placeholder="Username"
    />
    <label id="password" for="password">Password</label>
    <input
      v-model="input.password"
      type="password"
      name="password"
      placeholder="Password"
    />
    <button type="button" @click="login()">
      <div id="buttontext">Login</div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'LoginBox',
  data() {
    return {
      input: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    login() {
      if (this.input.username !== '' && this.input.password !== '') {
        this.$router.replace({ name: 'home' })
      } else {
        alert('Please enter a username and a password')
      }
    },
  },
}
</script>
