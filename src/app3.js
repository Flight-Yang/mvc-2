import './app3.css';
import $ from 'jquery';

const $square = $('#app3 .square');

$square.on('click',()=>{
    //toggleClass是检测列表中是否有对应class命名，如果有删除，没有添加
    $square.toggleClass('active');
})