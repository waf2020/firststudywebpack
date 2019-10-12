import $ from 'jquery'
import './css/my.css'
import Vue from 'vue'
import login from './login.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);
$(function(){
    $('li:odd').css('backgroundColor','yellow');
    $('li:even').css('backgroundColor','hotpink')
})


class Person{
    static info={name:'zhangsan'}
}

import acconts from './main/acconts.vue'
import allist from './main/allist.vue'
import a from './main/a.vue'
import b from './main/b.vue'


console.log(Person.info);
console.log(document.getElementById("app"));
//创建路由对象
var router=new VueRouter({
    routes:[
        {path:'/acconts',component:acconts,
            children:[{path:'a',component:a},
                      {path:'b',component:b}]
        },
        {path:'/allist',component:allist}
    ]

})

new Vue({
    el:'#app',
    data:{
        msg:Person.info
    },
    render:(c)=> c(login),
    router,//将路由挂载到实例中
})