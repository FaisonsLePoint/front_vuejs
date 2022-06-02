<template>
    <div>        
        <h1>Création d'un utilisateur</h1>
        <p v-if="errors.length">
            <b>Merci de corriger les erreurs suivantes</b>
            <ul>
                <li v-for="error in errors">{{error}}</li>
            </ul>
        </p>
        <form @submit.prevent="ajout">    
            <div class="formGroup">
                <label for="user_name">Nom</label>
                <input type="text" id="user_name" v-model="user.nom"/>
            </div>
            <div class="formGroup">
                <label for="user_prenom">Prénom</label>
                <input type="text" id="user_prenom" v-model="user.prenom"/>
            </div>
            <div class="formGroup">
                <label for="user_pseudo">Pseudo</label>
                <input type="text" id="user_pseudo" v-model="user.pseudo"/>
            </div>
            <div class="formGroup">
                <label for="user_email">Email</label>
                <input type="text" id="user_email" v-model="user.email"/>
            </div>
            <div class="formGroup">
                <label for="user_email">Mot de passe</label>
                <input type="text" id="user_email" v-model="user.password"/>
            </div>
            <div class="formGroup">
                <label for="confirme">Vérification</label>
                <input type="text" id="confirme" v-model="confirme"/>
            </div>
            <div class="formGroup">
                <button type="submit" class="button">Créer l'utilisateur</button>
            </div>
        </form>
    </div>
</template>

<script>
import { userService } from '@/_services'
export default {
    name: 'UserAdd',
    data(){
        return {
            user: {
                nom:'',
                prenom:'',
                pseudo:'',
                email:'',
                password:''
            },
            confirme:'',
            errors:[]
        }
    },
    methods: {
        ajout(){
            console.log(this.user, this.confirme)

            this.errors = []

            if(this.user.password != this.confirme){
                this.errors.push('Le mot de passe doit correspondre avec la vérification')
            }

            if(this.user.password.length < 6){
                this.errors.push('Le mot de passe doit avoir 6 caractères')
            }

            if(this.errors.length == 0){
                userService.createUser(this.user)
                    .then(res => this.$router.push({name: 'uList'}))
                    .catch(err => console.log(err))
            }
        }
    },
}
</script>

<style>
    
</style>