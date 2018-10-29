<template>
    <div class="container">
        <h2>Login  Password Page</h2>
        <form @submit.prevent="submit()" >
            <div class="form-group">
                <label for="oldloginpassword">old Password:</label>
                <input type="oldloginpassword" class="form-control" id="oldloginpassword" placeholder="Enter email" name="oldloginpassword"  v-model="oldloginpassword" required>
            </div>
            <div class="form-group">
                <label for="newloginpassword">New Password:</label>
                <input type="newloginpassword" class="form-control" id="newloginpassword" placeholder="Enter email" name="newloginpassword"  v-model="newloginpassword" required>
            </div>
            <div class="form-group">
                <label for="rloginpassword">Confirm Password:</label>
                <input type="rloginpassword" class="form-control" id="rloginpassword" placeholder="Enter email" name="rloginpassword"  v-model="rloginpassword" required>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
    import axios from '../../http'
    import store from '../../store'

    export default {
        name: 'changeLoginPassword',
        data () {
            return {
                oldloginpassword: '',
                newloginpassword: '',
                rloginpassword: ''
            }
        },
        methods: {
            submit: function () {

                axios.post('/api/v1/password/changeLoginPassword', {
                    oldloginpassword: this.oldloginpassword,
                    newloginpassword: this.newloginpassword,
                    rloginpassword: this.rloginpassword
                }).then((response) => {
                    console.log(response);
                })

            }
        }
    }
</script>

<style scoped>

</style>