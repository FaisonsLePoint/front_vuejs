<template>
    <div>        
        <h1>Edition Utilisateur</h1>
        <form @submit.prevent="edit">
       
            <input type="text" id="user_id" v-model="user.id" hidden/>
     
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
                <button type="submit" class="button">Modifier</button>
            </div>
        </form>
    </div>
</template>

<script>
import { userService } from '@/_services'
export default {
    name: 'UserEdit',
    props: ['id'],
    data(){
        return {
            user: {}
        }
    },
    methods: {
        // Envoi à l'API pour modification
        edit(){
            userService.updateUser(this.user)
                .then(res => this.$router.push({name: 'uList'}))
                .catch(err => console.log(err))
        }
    },
    mounted(){
        // Récupération à l'affichage de l'utilisateur
        userService.getUser(this.id)
            .then(res => {
                this.user = res.data.data
            })
            .catch(err => console.log(err))
    },
}
</script>

<style>
    
</style>