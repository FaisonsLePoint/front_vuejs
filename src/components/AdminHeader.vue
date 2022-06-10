<template>
    <div class="ad_head">
        Header Admin {{ getMarcel }}
        <button @click="logout()">Logout</button>
    </div>
</template>

<script>
import { accountService } from '@/_services'
import { mapGetters } from 'vuex'

export default {
    name: 'AdminHeader',
    methods:{
        logout(){
            accountService.logout()
            this.$router.push('/')
        }
    },
    computed:{
        ...mapGetters(['getMarcel'])
    }
}
</script>

<style>
    .ad_head{
        border-bottom: solid 1px black;
    }
    button{
        float: right;
    }
</style>