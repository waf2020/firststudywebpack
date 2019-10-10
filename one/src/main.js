import $ from 'jquery'
import './css/my.css'


$(function(){
    $('li:odd').css('backgroundColor','yellow');
    $('li:even').css('backgroundColor','hotpink')
})


class Person{
    static info={name:'zhangsan'}
}
console.log(Person.info);