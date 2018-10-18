<template>
    <div class="container">
        <h2>Forgot Password Page</h2>
        <form @submit.prevent="submit()" >
            <div class="form-group">
                <label for="email">Enter Email:</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"  v-model="email">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
    import axios from '../../http'
    export default {
        name: 'forgotpassword',
        data () {
            return {
                email: '',

            }
        },
        methods: {
            submit: function () {

                axios.post('/api/v1/password/forgotPassword', {
                    email: this.email
                }).then((response) => {
                    console.log(response);
                })

            }
        }
    }
</script>

<style scoped>

</style>