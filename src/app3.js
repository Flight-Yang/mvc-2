import './app3.css';
import $ from 'jquery';

const html = `
        <section id="app3">
            <div class="square"></div>
        </section>
`
const $element = $(html).appendTo($('body>.page'));




const $square = $('#app3 .square');
const localKey = 'app3.active';
//简写，如果有就返回true,没有就返回no
const active = localStorage.getItem(localKey) === 'yes';
//这就话就是读取到刷新后active的状态,保存上面简写的返回值
$square.toggleClass('active',active);


$square.on('click',()=>{
    if($square.hasClass('active')){
        $square.removeClass('active');
        localStorage.setItem(localKey,'no');
    }else{
        $square.addClass('active');
        localStorage.setItem('app3.active','yes');
    }

    //toggleClass是检测列表中是否有对应class命名，如果有删除，没有添加
    //$square.toggleClass('active');
})