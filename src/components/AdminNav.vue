<template>
    <div>
        <ul>
            <li><router-link to='/'>Accueil</router-link></li>
            <li>&nbsp;</li>
            <li><router-link to='/admin/dashboard'>Dashboard</router-link></li>
            <li>&nbsp;</li>
            <li><router-link to='/admin/users/index'>User list</router-link></li>
            <li><router-link to='/admin/users/add'>User add</router-link></li>
            <li>&nbsp;</li>
            <li><router-link to='/admin/cocktails/index'>Cocktail list</router-link></li>
            <li><router-link to='/admin/cocktails/edit'>Cocktail add</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'AdminNav'
}
</script>

<style>
    ul{
        list-style: none;
        padding-left:0px;
        margin-right:10px;
    }
    ul li{
        text-align:left;
    }
</style>
