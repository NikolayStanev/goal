<template>
    <div>
        <header>
            <navBarComp></navBarComp>
        </header>
    </div>
</template>

<script>
    import NavBar from './NavBarComp.vue'

    export default {
        name: "asd",
        data(){
            return{
                title:'Header comp',
            }
        },
        components:{
            'navBarComp': NavBar,
        }
    }
</script>

<style scoped>

</style>