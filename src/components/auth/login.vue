<template>
  <div class="container">
    <h2>Login Page</h2>
    <form @submit.prevent="submit()" >
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"  v-model="email">
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"  v-model="password">
      </div>
      <div class="form-group form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" name="remember"> Remember me
        </label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
    import axios from '../../http'
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submit: function () {
        axios.post('/api/v1/auth/sign-in', {
            email: this.email,
            password: this.password
        }).then((response) => {
            sessionStorage.setItem('currentUser', JSON.stringify(response.data))
            this.$router.push({path: 'home'})
        }).catch((err) => {
            this.email = ''
            this.password = ''
        })

    }
  }
}
</script>

<style scoped>

</style>
