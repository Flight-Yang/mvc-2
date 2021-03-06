import './app1.css';
import $, { get } from 'jquery';

//一个监听事件的函数方法 ？？
const eventBus = $(window);

//数据相关  m
const m = {
    data: {
        //初始化数据local
        n: parseInt(localStorage.getItem("n"))
    },
    create(){},
    delete(){},
    update(data){
        Object.assign(m.data,data)
        eventBus.trigger('m:updated');
        localStorage.setItem('n', m.data.n);
    },
    get(){}
}

//视图相关  v
const v = {
    el:null,
    html: `
    <div>
        <div class="output">
            <span id="number">{{n}}</span>
        </div>
        <div class="actions">
            <button id="add1">+1</button>
            <button id="minus1">-1</button>
            <button id="mul2">*2</button>
            <button id="divide2">÷2</button>
        </div>
    </div>
    `,
    init(container){
        v.el = $(container)
    },
    render(n) {
        if (v.el.children.length != 0)v.el.empty();
        $(v.html.replace('{{n}}', n))
        .appendTo(v.el);
    }
}


//其他  c
const c = {
    init(container) {
        //第一次渲染html
        v.init(container);
        v.render(m.data.n);
        c.autoBindEvents();
        eventBus.on('m:updated',()=>{
            v.render(m.data.n)
        })
    },
    events: {
        'click #add1':'add',
        'click #minus1':'minus',
        'click #mul2':'mul',
        'click #divide2':'div',
    },
    add(){
        m.update({n: m.data.n + 1})
    },
    minus(){
        m.update({n: m.data.n -= 1})  
    },
    mul(){
        m.update({n: m.data.n *= 2})
    },
    div(){
        m.update({n: m.data.n /= 2})
    },
    autoBindEvents(){
        for(let key in c.events){
            const value = c[c.events[key]];
            const spaceIndex = key.indexOf(' ');
            const part1 = key.slice(0,spaceIndex);
            const part2 = key.slice(spaceIndex);
            console.log(part1,part2);
            v.el.on(part1,part2,value);

        }
    }

}


//初始化 把c导出
export default c







