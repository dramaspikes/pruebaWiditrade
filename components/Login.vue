<template>
  <div id="login-wrapper">
    <!-- Login form -->
    <div class="input username">
      <label for="username">User</label>
      <input
        v-model="input.username"
        type="text"
        name="username"
        placeholder="Enter your username"
      />
    </div>
    <div class="input password-area">
      <label for="password">Password</label>
      <input
        ref="password"
        v-model="input.password"
        type="password"
        name="password"
        placeholder="Enter your password"
        @keyup.enter="login()"
      />

      <!-- Semi-circle eye symbol for toggling password text visibility -->
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="toggleVis()"
      >
        <path
          d="M15 12.9999C15 13.7956 14.6839 14.5587 14.1213 15.1213C13.5587 15.6839 12.7956 15.9999 12 15.9999C11.2044 15.9999 10.4413 15.6839 9.87868 15.1213C9.31607 14.5587 9 13.7956 9 12.9999C9 12.2043 9.31607 11.4412 9.87868 10.8786C10.4413 10.316 11.2044 9.99994 12 9.99994C12.7956 9.99994 13.5587 10.316 14.1213 10.8786C14.6839 11.4412 15 12.2043 15 12.9999Z"
          fill="#4E4B66"
        />
        <path
          d="M2 12.9999C3.33515 8.94294 7.30811 5.99994 12 5.99994C16.6929 5.99994 20.6649 8.94294 22 12.9999"
          stroke="#4E4B66"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <button type="button" @click="login()">
      <div id="button-text">Login</div>
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
    // Method to submit form, check that neither input is empty, and go to homepage
    login() {
      if (this.input.username !== '' && this.input.password !== '') {
        this.$router.replace({ name: 'home' })
      } else {
        alert('Please enter a username and a password.')
      }
    },

    // Method for password text visibility
    toggleVis() {
      const passwordElement = this.$refs.password
      if (passwordElement.type === 'password') {
        passwordElement.type = 'text'
      } else {
        passwordElement.type = 'password'
      }
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Mulish:wght@400;700&display=swap');

#login-wrapper {
  position: absolute;
  width: 82.93%;
  height: 35.1%;
  left: 8.53%;
  top: 45.32%;
}

.input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  gap: 8px;
  position: absolute;
  width: 311px;
  height: 77px;
  left: calc(50% - 311px / 2);
}

.password-area {
  top: 108px;
}

button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 42px;
  gap: 14px;
  position: absolute;
  width: 311px;
  height: 52px;
  left: calc(50% - 311px / 2);
  top: 233px;

  /* Primary */
  background: #22a2a2;
  border-radius: 60px;
}

label {
  /* User */
  width: 67px;
  height: 21px;
  font-family: Mulish, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;

  /* identical to box height, or 21px */

  /* Label */
  color: #6e7191;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

input {
  /* input */
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  width: 311px;
  height: 48px;
  background: #f8f8fc;

  /* Accent */
  border: 1px solid #e3e4ec;
  border-radius: 16px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
}

input:focus {
  color: #4e4b66;
  outline: none;
  border: 2px solid #4fc2c2;
  caret-color: #4fc2c2;
}

:placeholder-shown {
  /* placeholder */
  width: 311px;
  height: 24px;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  /* identical to box height, or 24px */

  /* Body */
  color: #4e4b66;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 1;
}

#button-text {
  /* Login */
  width: 44px;
  height: 24px;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;

  /* identical to box height, or 24px */
  color: #fff;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}

svg {
  /* eyes/eye */
  width: 24px;
  height: 24px;
  position: absolute;
  left: 87%;
  top: 55%;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}
</style>
