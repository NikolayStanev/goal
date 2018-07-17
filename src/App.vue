<template>
  <div id="app">
    <div class="page-content">

      <header-comp></header-comp>
      <div>
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
  import HeaderComp from './components/HeaderComp.vue'
  import Login from './components/Login'
  import MainLogged from './components/MainLogged'

export default {
    data() {

    },
    components:{
      'header-comp': HeaderComp,
        'login': Login,
        'main-logged': MainLogged,
    }
}

</script>

<style>


</style>

