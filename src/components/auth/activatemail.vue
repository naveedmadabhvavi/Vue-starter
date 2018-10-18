<template>
    <div class="container">
        <h2>Activate Email Page</h2>
        <form @submit.prevent="submit()" >
            <div class="form-group">
                <label for="email">Email Address:</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"  v-model="email">
            </div>
            <div class="form-group">
                <label for="activationCode">Activation Code</label>
                <input type="text" class="form-control" id="activationCode" placeholder="Enter activationCode" name="activationCode"  v-model="activationCode">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
    import store from '../../store'
    import axios from '../../http'
    export default {
        name: "activatemail",
        data () {
            return {
                email: '',
                activationCode: ''
            }
        },
        methods: {

            submit: function () {
                axios.post('/api/v1/activate/activate-account', {
                    email: this.email,
                    activationCode: this.activationCode
                }).then((response) => {
                    console.log(response);
                })

            }
        }
    }
</script>

<style scoped>

</style>