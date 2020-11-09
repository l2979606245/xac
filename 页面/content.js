// 组件
Vue.component('house-button', {
    props: {
        info: Object
    },
    data() {
        return {
        }
    },
    template: `
    <div class="goods">
        <img :src="info.image" alt="">    
        <h4 class="goods-name">{{ info.name }}</h4>
    </div > `
})
//实例
var app = new Vue({
    el: '#content',
    data: {
        list: [{ image: "./img/11.jpg", name: '1巷1户王乃刚' },
        { image: "./img/11.jpg", name: 'xxx' },
        { image: "./img/11.jpg", name: 'xxx' },
        { image: "./img/11.jpg", name: 'xxx' },
        { image: "./img/11.jpg", name: 'xxx' },
        { image: "./img/11.jpg", name: 'xxx' },
        { image: "./img/11.jpg", name: 'xxx' },
        { image: "./img/22.jpg", name: 'xxx' },
        { image: "./img/11.jpg", name: 'xxx' },
        { image: "./img/11.jpg", name: 'xxx' },
        { image: "./img/22.jpg", name: 'xxx' },
        { image: "./img/33.jpg", name: 'xxx' },
        { image: "./img/11.jpg", name: 'xxx' },
        { image: "./img/11.jpg", name: 'xxx' },
        { image: "./img/11.jpg", name: 'xxx' },
        { image: "./img/11.jpg", name: 'xxx' },
        { image: "./img/11.jpg", name: 'xxx' },
        { image: "./img/11.jpg", name: 'xxx' },
        { image: "./img/11.jpg", name: 'xxx' },
        { image: "./img/11.jpg", name: 'xxx' },
        { image: "./img/1.jpg", name: 'xxx' },
        { image: "./img/1.jpg", name: 'xxx' },
        { image: "./img/1.jpg", name: 'xxx' },
        { image: "./img/1.jpg", name: 'xxx' },
        { image: "./img/1.jpg", name: 'xxx' },

        { image: "./img/1.jpg", name: 'xxx' },],
        cur: 1,

    },
    watch: {
        cur: function (oldValue, newValue) {
            console.log(arguments);
        }
    },
    computed: {
        filteredAndOrderedList() {
            let list = [...this.list]
            list = list.slice((this.cur - 1) * 10, this.cur * 10)
            return list
        },
        all: function () {
            return Math.ceil(this.list.length / 10)
        },
        indexs: function () {
            var left = 1;
            var right = this.all;
            var ar = [];
            if (this.all >= 5) {
                if (this.cur > 3 && this.cur < this.all - 2) {
                    left = this.cur - 2
                    right = this.cur + 2
                } else {
                    if (this.cur <= 3) {
                        left = 1
                        right = 5
                    } else {
                        right = this.all
                        left = this.all - 4
                    }
                }
            }
            while (left <= right) {
                ar.push(left)
                left++
            }
            return ar
        }
    },
    methods: {
        btnClick: function (data) {
            //页码点击事件
            if (data != this.cur) {
                this.cur = data
            }
        },
        pageClick: function () {
            console.log('现在在' + this.cur + '页');
        }
    },

})