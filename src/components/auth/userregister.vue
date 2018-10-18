<template>
  <div class="container">
    <h2>Registeration Page</h2>
    <form @submit.prevent="submit()" >
        <div class="form-group">
            <label for="firstname">FirstName:</label>
            <input type="firstname" class="form-control" id="firstname" placeholder="firstname" name="firstname"  v-model="firstname">
        </div>
        <div class="form-group">
            <label for="middlename">MiddleName:</label>
            <input type="middlename" class="form-control" id="middlename" placeholder="middlename" name="middlename"  v-model="middlename">
        </div>
        <div class="form-group">
            <label for="lastname">LastName:</label>
            <input type="lastname" class="form-control" id="lastname" placeholder="lastname" name="lastname"  v-model="lastname">
        </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"  v-model="email">
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"  v-model="password">
      </div>
      <div class="form-group">
        <label for="confirm-pwd">Confirm Password:</label>
        <input type="password" class="form-control" id="confirm-pwd" placeholder="Enter password" name="pswd"  v-model="confirmpassword">
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>
<script>
    import axios from '../../http'
export default {
  name: 'userregister',
  data () {
    return {
      firstname: '',
      middlename: '',
      lastname: '',
      type:'',
      email: '',
      password: '',
      confirmpassword: '',
    }
  },
  methods: {
    submit: function () {

        axios.post('/api/v1/auth/sign-up', {
            firstname: this.firstname,
            middlename: this.middlename,
            lastname :this.lastname,
            type:'individual',
            email:this.email,
            password:this.password,
            rpassword:this.confirmpassword,
            agreement:true
        }).then((response) => {

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
