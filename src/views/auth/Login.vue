<template>
    <div>
        <h1>Connexion</h1>
        <form @submit.prevent="login">
            <div class="formGroup">
                <label for="user_email">Email</label>
                <input type="text" id="user_email" v-model="user.email"/>
            </div>
            <div class="formGroup">
                <label for="user_password">Mot de passe</label>
                <input type="text" id="user_password" v-model="user.password"/>
            </div>
            <div class="formGroup">
                <button type="submit" class="button">Connexion</button>
            </div>
        </form>
    </div>
</template>

<script>
import { accountService } from '@/_services'
export default {
    name: 'Login',
    data(){
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login(){
            accountService.login(this.user)
                .then(res => {
                    accountService.saveToken(res.data.access_token)
                    this.$router.push('/admin/dashboard')
                })
                .catch(err => console.log(err))

            // fetch('http://localhost:8888/auth/login', {
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     },
            //     method: 'POST',
            //     body: JSON.stringify(this.user)
            // })
            //     .then(blob => blob.json())
            //     .then(data => {
            //         console.log(data)
            //         localStorage.setItem('token', data.access_token)
            //         this.$router.push('/admin/dashboard')
            //     })
            //     .catch(err => console.log(err))
        }
    }
}
</script>

<style>
    form{
        max-width: 300px;
        margin: 0 auto;
    }
    .formGroup{
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
    }
</style>