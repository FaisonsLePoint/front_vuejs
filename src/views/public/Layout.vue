<template>
    <div class="public">
        {{ getMarcel }}
        {{ getUser(1) }}
        <button @click="change">Changer Marcel</button>
        <button @click="action">Action Marcel</button>
        <PublicNav/>
        <router-view/>
    </div>
</template>

<script>
import PublicNav from '@/components/PublicNav.vue'
import { mapGetters, mapMutations, mapActions } from "vuex"
export default {
    name: 'PublicLayout',
    components: {
        PublicNav
    },
    computed:{
        ...mapGetters(['getMarcel', 'getUser']),        
    },
    methods: {
        ...mapMutations(['changeMarcel']),
        ...mapActions(['modify']),
        change(){
            //this.$store.commit('changeMarcel', {name: 'Lydie'})
            this.changeMarcel({name: 'Lydie'})
        },
        action(){
            //this.$store.dispatch('modify')
            this.modify({name: 'jkjkljlk'})
        }
    },
}
</script>

<style>
    
</style>