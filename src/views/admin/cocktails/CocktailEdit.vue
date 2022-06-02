<template>
    <div>        
       
        <h1>Ajouter un cocktail</h1>
        {{ roger }}
        <div v-if="roger">Edition</div>
        <form @submit.prevent="ajout">               

            <div class="formGroup">
                <label for="cocktail_nom">Nom</label>
                <input type="text" id="cocktail_nom" v-model="cocktail.nom"/>
            </div>
            <div class="formGroup">
                <label for="cocktail_description">Description</label>
                <input type="text" id="cocktail_description" v-model="cocktail.description"/>
            </div>
            <div class="formGroup">
                <label for="cocktail.recette">Recette</label>
                <input type="text" id="cocktail.recette" v-model="cocktail.recette"/>
            </div>
            <div class="formGroup">
                <button type="submit" class="button">Ajouter le Cocktail</button>
            </div>
        </form>
    </div>
</template>

<script>
//user_id, nom, description, recette
import { cocktailService } from '@/_services'
import { watch, ref } from 'vue'
export default {
    name: ' CocktailEdit',
    props: ['id'],
    data(){
        return {
            cocktail: {
                user_id:4,
                nom: '',
                description:'',
                recette:''
            }
        }
    },
    setup(props){
        console.log(props)
        let roger = ref(false)
        watch(props, (value, old) => {
            console.log(value.id)
            roger.value = true
        
        })
        return {roger}
    },
    
    mounted(){        
        console.log(this.id)
        if(this.id == ''){
            this.roger = true
        }
    },
    methods: {
        test(){
            console.log('test')
        },
        ajout(){
            cocktailService.createCocktail(this.cocktail)
                .then(res => this.$router.push({name: 'cList'}))
                .catch(err => console.log(err))
        }
    },
}
</script>

<style>
    
</style>