// nav-header组件
<template>
    <div class="header">
       <div class="nav-topbar">
           <div class="container">
               <div class="topbar-menu">
                   <a href="javascript:;">小米商城</a>
                   <a href="javascript:;">MUI</a>
                   <a href="javascript:;">云服务</a>
                   <a href="">协议规则</a>
               </div>
               <div class="topbar-user">
                   <a href="javascript:;" v-if="username">{{username}}</a>
                   <a href="javascript:;" v-if="!username" @click="login">登录</a>
                   <a href="javascript:;" v-if="username">我的订单</a>
                   <a href="javascript:;" class="my-cart">
                       <span  class="icon-cart" @click="goToCart">
                       </span>
                        购物车
                    </a>
               </div>
           </div>
       </div>
       <div class="nav-header">
           <div class="container">
               <div class="header-logo">
                <a href="/#/index"></a>
               </div>
               <div class="header-menu">
                   <div class="item-menu">
                       <span>小米手机</span>
                       <div class="children">
                           <ul>
                              <li class="product" v-for="(item,index) in phoneList" :key="index"
                              >
                                <a v-bind:href="'/#/product' + item.id" target="_blank">
                                    <div class="pro-img">
                                        <img :src="item.mainImage" :alt="item.subtitle">
                                    </div>
                                    <div class="pro-name">{{item.name}}</div>
                                    <div class="pro-price">{{item.price | currency}}</div>
                                </a>
                              </li> 
                           </ul>
                       </div>
                   </div>
                     <div class="item-menu">
                       <span>RedMi红米</span>
                       <div class="children">
                           
                       </div>
                   </div>
                     <div class="item-menu">
                       <span>电视</span>
                       <div class="children">
                       </div>
                   </div>
               </div>
               <div class="header-search">
                   <div class="wrapper">
                       <input type="text" name="keyword">
                       <a href="javascript:;"></a>
                   </div>
               </div>
           </div>

       </div>
    </div>
</template>
<script>
export default {
    name: 'nav-header',
    data() {
        return {
            username: 'jack',
            phoneList: []
        }
    },
    filters: {
      currency(val) {
          if(!val) return '0.00';
            return '¥' + val.toFixed(2) + '元';
       }  
    }, 
    
    mounted() {
        this.getProductList()
    },
    methods: {
        goToCart() {
            this.$router.push('/cart')
        },
        login() {
            this.$router.push('/login')
        },
        getProductList() {
            this.axios.get('/products', {
                params: {
                    categoryId: '100012'
                }
                // res不包括status中内容
            }).then((res) => {
                if( res.list.length > 6) {
                    this.phoneList = res.list.splice(0,6)
                } else{
                    this.phoneList = res.list
                }
            })
        }
    }
}
</script>
<style lang="scss">
    @import './../assets/sass/base.scss';
    @import './../assets/sass/mixin.scss';
.header{
    .nav-topbar{
        height: 39px;
        line-height: 39px;
        background: #333333;
        color: #b0b0b0;
        .container{
            @include flex();
            
            a{
                display: inline-block;
                color: #b0b0b0;
                margin-right: 17px;
            }
            .my-cart{
                width: 100px;
                text-align: center;
                background-color:#ff6600;
                color: #ffffff;
            }
                .icon-cart{
                    @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
                }
        } 
    }
    .nav-header{
        
        .container{
            @include flex();
            position: relative;
            height: 112px;
            .header-logo{
            display: inline-block;
            width: 55px;
            height: 55px;
            background-color: #ff6600;
            
            a{
                display: inline-block;
                width: 110px;
                height: 55px;
                &:before{
                    content: '';
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    background: url('/imgs/mi-logo.png') no-repeat center;
                    background-size: 55px;
                    transition: margin .2s;             
                }
                &:after{
                    content: '';
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    background: url('/imgs/mi-home.png') no-repeat center;
                    background-size: 55px;        
                }
                &:hover::before{
                    margin-left: -55px;
                    transition: margin .2s;
                }
                 
            }
        }
            .header-menu{
                display: inline-block;
                padding-left: 209px;
                // width: 200px;
                .item-menu{
                    display: inline-block;
                    color: #333333;
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 112px;
                    margin-right: 20px;
                    &:hover{
                        color: #ff6600;
                        .children{
                            height: 220px;
                            opacity: 1;
                        }
                    }
                    .children{
                        position: absolute;
                        top: 112px;
                        left: 0;
                        width: 1226px;
                        height: 0;
                        opacity: 0;
                        overflow: hidden;
                        // height: 220px;
                        border-top: 1px solid #e5e5e5;
                        // 防止因为层级关系被遮住
                        z-index: 10;
                        background-color: #ffffff;
                        transition: all .5s;
                        .product{
                            position: relative;
                            float: left;
                            width: 16.6%;
                            height: 220px;
                            font-size: 12px;
                            line-height: 12px;
                            text-align: center;
                            &::before{
                                content: ' ';
                                position: absolute;
                                top: 28px;
                                right: 0;
                                border-left: 1px solid #d7d7d7;
                                height: 100px;
                                width: 1px;
                            }
                            // 最后一个子元素 加上伪类 为空
                            &:last-child::before{
                                display: none;
                            }
                            a{
                                display: inline-block;
                            }
                            img{
                                // width: auto;
                                height: 111px;
                                margin-top: 26px;
                            }
                            .pro-img{
                                height: 137px;
                            }
                            .pro-name{
                                font-weight:bold;
                                // 100 - 800
                                margin-top: 19px;
                                margin-bottom: 8px;
                                color: #333333;
                            }
                            .pro-price{
                                color: #ff6600;
                            }
                        }
                    }
                    span{
                        cursor: pointer;       
                    }
                
                }
            };
        
            .header-search{
                    width: 319px;
                    .wrapper{
                        height: 50px;
                        border: 1px solid #e0e0e0;
                        display: flex;
                        align-items: center;
                        input{
                            border: none;
                            box-sizing: border-box;
                            border-right: 1px solid #e0e0e0;
                            width: 264px;
                            height: 50px;
                            padding-left: 14px; 
                        }
                        a{  
                            @include bgImg(18px,18px,'/imgs/icon-search.png');
                            margin-left: 17px;    
                        }         
                    }
            }
        }
    }    
}
</style>