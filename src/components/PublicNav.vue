<template>
    <img alt="Vue logo" src="../assets/logo.png">
    <nav>
        <router-link to='/'>Accueil</router-link> |
        <router-link to='/cocktails'>Cocktails</router-link> |
        <router-link to='/contact'>Contact</router-link> |
        <router-link to='/admin/dashboard'>Admin</router-link>
    </nav>
</template>

<script>
export default {
    name: 'PublicNav'
}
</script>

<style>
    img{
        position: absolute;
        right: 30px;
        height: 50px;
    }
</style>