<template>
    <div>        
        <h1>Liste des cocktails ({{ comptage }})</h1>
        <table>
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Recette</th>
                    <th>Description</th>
                    <th>Création</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(cocktail, index) in cocktails" :key="cocktail.id">
                    <td><span class="del_btn" @click="del(index)">X</span></td>
                    <td>{{ cocktail.id }}</td>
                    <td class="edit" @click="goEdit(cocktail.id)">{{ cocktail.nom }}</td>
                    <td>{{ cocktail.recette }}</td>
                    <td>{{ cocktail.description }}</td>
                    <td>{{ dateFormat[index] }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { cocktailService } from '@/_services'
export default {
    name: 'CocktailIndex',
    data(){
        return {
            cocktails: []
        }
    },
    methods: {
        goEdit(uid){
            this.$router.push({name: 'cEdit', params:{id:uid}})
        },
        del(index){
            cocktailService.deleteCocktail(this.cocktails[index].id)
                .then(res => this.cocktails.splice(index, 1))
                .catch(err => console.log(err))
        }
    },
    mounted(){
        cocktailService.getAllCocktails()
            .then(res => {
                this.cocktails = res.data.data
            })
            .catch(err => console.log(err))
    },
    computed: {
        comptage(){
            return (this.cocktails.length == 0) ? ' Aucun cocktail ' : ` Il y en a ${this.cocktails.length} `
        },
        dateFormat(){
            return this.cocktails.map(c => c.createdAt.split('T')[0].split('-').reverse().join('/'))
        }
    }
}
</script>

<style>
    
</style>