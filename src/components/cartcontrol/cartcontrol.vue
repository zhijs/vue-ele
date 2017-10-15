<template>
     <div class="cartcontrol">
        <transition name="move">
          <div class="cart-decrease " v-show="food.count > 0" @click="decreaseCart">
              <transition >
                 <span class="inner icon-remove_circle_outline"></span>
              </transition>
          </div>
        </transition>
        <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
        <div class="cart-add icon-add_circle" @click="addCount"></div>
     </div>
</template>

<script type="text/ecmascript-6">
  import eventbus from '../../common/eventbus/eventbus';
   import Vue from 'vue';
   export default {
     props: {
       food: {
         type: Object
       }
     },
     created() {
     },
     methods: {
       addCount(event) {
         if (event._constructd) { // 浏览器原生event没有该属性,移动端有该属性
           return;
         }
         if (!this.food.count) {
           Vue.set(this.food, 'count', 1);
         } else {
           this.food.count ++;
         }
         // 事件派发，给父组件传递信息
         eventbus.$emit('cart.add', event.target);
       },
       decreaseCart(event) {
         if (event._constructd) { // 浏览器原生event没有该属性,移动端有该属性
           return;
         }
         if (this.food.count) {
           this.food.count --;
         }
       }
     }
   };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      transition: all 0.4s linear
      &.move-transition
        opacity: 1
        transform: translate3d(0, 0, 0)

      .inner
        display: inline-block
        line-height: 24px
        font-size: 24px
        color: rgb(0, 160, 220)
        transition: all 0.4s linear
        transform: rotate(0)
      &.move-enter, &.move-leave-to  // 动画开始位置和离开的目的位置
        opacity: 0
        transform: translate3d(24px, 0 , 0)
        .inner
          transform: rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align:center
      font-size: 10px
      color: rgb(147, 153, 159)
    .cart-add
      display: inline-block
      line-height: 24px
      font-size: 24px
      padding: 6px
      color: rgb(0, 160, 220)

</style>
