<template>
    <div>
    <span>login.vue组件{{name}}</span>
        <br>
        <router-link to="/acconts">acconts</router-link>

        <router-link to="/allist">allist</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return {name:'login'}
        },
        methods:{
            show(){
                console.log('use .vue file')
            }
        },
        created() {
            this.show();
        }
    }
</script>