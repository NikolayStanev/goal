<template>
    <div>
        <form>
            <div class="form-group">
                <label for="exampleInputUsername">Username</label>
                <input type="text" class="form-control" id="exampleInputUsername" v-model="login.username" placeholder="Username">

            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="login.password" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary-dark" v-on:click="logIn">Sign in</button>
        </form>
    </div>
</template>

<script>
    import MainLogged from "./MainLogged"
    import axios from "axios"

    export default {
        name: "Login",
        data() {
            return {
                login: {
                    username: '',
                    password: '',
                    isLogged: false,
                    token: '',

                }
            }
        },
        methods: {
            logIn: function () {


                axios.get("http://172.16.51.39:8080/scoringEngine/rest/login",{params:{username: this.login.username, pwd: this.login.password}})
                    .then(function (response) {
                        // this.token = response.headers.get("X-AUTH-TOKEN");
                        console.log(response);
                    }).catch(function (error){
                    console.log (error);
                    })
                }
                // //     this.$http.get("http://172.16.51.39:8080/scoringEngine/rest/login",{params:{username: this.login.username, pwd: this.login.password}}).
                // //     then(function (data) {
                // //         this.token = data.headers.get('X-AUTH-TOKEN');
                // //         this.$http.get("http://172.16.51.39:8080/scoringEngine/rest/user/" + this.username);
                // //
                // //     })
                // }
            },
            components: {
                'main-logged': MainLogged
            },
    }
        // created() {
        //     this.$http.get("http://172.16.51.39:8080/scoringEngine/rest/login?username=nikolay&pwd=lolipop"
        //     ).then(function (data) {
        //         this.token = data.headers.get('X-AUTH-TOKEN'),
        //         console.log(this.token)
        //     })
        // },

</script>

<style scoped>
    *{
        margin: 5px;
    }

</style>