<template>
   <div>
   <toolbar></toolbar>
      <router-view></router-view>
   <app-footer></app-footer>
   </div>
</template>

<script>
    import toolbar from './Toolbar'
    import AppFooter from './AppFooter';
    import login from './login/login';
    export default {
        components:{AppFooter, toolbar, login}
    }
</script>

<style scoped>

</style>