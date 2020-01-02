<template>
<div class="aside_menu">
    <div class="aside_header">
        <strong class="title title_navigation">
            Watch Tec
        </strong>
        <div class="img_cont">
            <img src="@/assets/images/index/v.png">
        </div>
    </div>
    <perfect-scrollbar class="aside_body nav_list" :options="{ swipeEasing: true , suppressScrollX: true}">                        
        <nuxt-link :to="{ name: 'App'}" class="nav_item">
            <v-icon class="item_icon">mdi-account</v-icon>  
            <legend class="item_caption">
                <strong class="item_title">
                    Inicio
                </strong>
            </legend>  
        </nuxt-link>   
        <nuxt-link :to="{ name: 'App-lista_amigos'}" class="nav_item">
            <v-icon class="item_icon">mdi-account-badge-horizontal</v-icon>  
            <legend class="item_caption">
                <strong class="item_title">
                    Lista de amigos
                </strong>
                <strong class="item_description">
                    Amigos disponibles para buscar
                </strong>
            </legend>  
        </nuxt-link>
        <a class="nav_item">
            <v-icon class="item_icon">mdi-account</v-icon>  
            <legend class="item_caption">
                <strong class="item_title">
                    El titulo op
                </strong>
            </legend>  
        </a>
        <a class="nav_item">
            <v-icon class="item_icon">mdi-account</v-icon>  
            <legend class="item_caption">
                <strong class="item_title">
                    El titulo op
                </strong>
                <strong class="item_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                </strong>
            </legend>  
        </a>
        <a class="nav_item">
            <v-icon class="item_icon">mdi-account</v-icon>  
            <legend class="item_caption">
                <strong class="item_title">
                    El titulo op
                </strong>
                <strong class="item_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                </strong>
            </legend>  
        </a>
        <a class="nav_item">
            <v-icon class="item_icon">mdi-account</v-icon>  
            <legend class="item_caption">
                <strong class="item_title">
                    El titulo op
                </strong>
                <strong class="item_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                </strong>
            </legend>  
        </a>
        <a class="nav_item">
            <v-icon class="item_icon">mdi-account</v-icon>  
            <legend class="item_caption">
                <strong class="item_title">
                    El titulo op
                </strong>
            </legend>  
        </a>
        <a class="nav_item">
            <v-icon class="item_icon">mdi-account</v-icon>  
            <legend class="item_caption">
                <strong class="item_title">
                    El titulo op
                </strong>
            </legend>  
        </a>
    </perfect-scrollbar>
    <div class="aside_footer">
        <button class="btn" @click="logout">
            Cerrar sesion
        </button>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
Vue.use(PerfectScrollbar)

export default {
    methods:{
        logout(){
            this.$auth.logout()
        }
    }
}
</script>

<style lang="scss">
@import "../node_modules/rfs/scss";

$aside_color :#795548;
.aside_menu{
    width: 40%;
    min-width: 300px;
    height: 100%;
    background-color: $aside_color;
    display: flex;
    flex-direction: column;
    z-index: 2;

    .aside_header,.aside_body,.aside_footer{
        width: 100%;
        margin: auto;
    }

    .aside_header{
        width: 100%;
        height: 20%;
        background-color: $aside_color;
        margin-top: 0;
        display: flex;
        user-select: none;
        
        .title{
            box-sizing: border-box;
            margin: auto;
            text-align: center;
            width: 55%;
            font-family: 'Fira Sans','comic sans ms',sans-serif;
            @include font-size(2.5rem !important);
        }

        .img_cont{
            margin: auto 0 auto auto;
            width: 45%;
            height: 100%;
            overflow: hidden;
            box-sizing: border-box;
            @include padding(.75rem !important);
            display: flex;
                
            img{
                margin: auto;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    .aside_body{
        width: 100%;
        height: 65%;
        background-color:$aside_color;
        box-sizing: border-box;
        @include padding-right(.75rem !important);

        &.nav_list{
            margin: 0 0 auto 0;
            overflow: auto;
            overflow-x: hidden;
            max-height: 100%;

            .nav_item{
                display: flex;
                height: 85px;
                box-sizing: border-box;
                margin: 3px 0;
                position: relative;
                user-select: none;
                cursor: pointer;
                text-decoration: none;
                transition: all 250ms ease-in-out;

                .item_icon{
                    box-sizing: border-box;
                    @include font-size(3rem !important);
                    @include padding-bottom(1rem !important);
                    color: white;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;                                                
                    text-align: right;
                    width: 20%;
                }

                .item_caption{
                    width: 80%;
                    height: 100%;
                    color: white;
                    display: flex;
                    flex-direction: column;
                    @include padding-left(.75rem !important);
                    @include padding-right(.75rem !important);

                    .item_title{
                        @include font-size(2.25rem !important);
                        display: block;
                        text-align: center;
                        margin: auto;
                        font-family: 'Raleway','comic sans ms',sans-serif;

                    }

                    .item_description{
                        box-sizing: border-box;
                        @include font-size(.75rem !important);
                        // @include padding-top(1rem !important);
                        display: block;
                        margin: auto;
                        text-align: center;
                        font-family: 'Courier Prime','comic sans ms',sans-serif;
                    }
                }

                &:before{
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    background-color: white;
                    opacity: 0;
                    transition: all 300ms ease-in-out;
                }

                &:hover{
                    &:before{
                        opacity: .1;
                    }
                }

                &:active{
                    transform: scale(.95);
                }
                
            }
        }
    }

    .aside_footer{
        width: 100%;
        height: 15%;
        background-color: $aside_color;
        margin-bottom: 0;

        .btn{
            color: white;
            box-sizing: border-box;
            padding: 15px;
        }
    }
}
</style>