<template>
    <div class="page_containers">
        <div class="page_top">
            <div class="cont_top">
                <div class="img_cont">
                    <img src="~/assets/images/index/v.png">
                </div>
                <h2 class="title">Watch Tec</h2>
            </div>
            <div class="cont_med">
                <div class="description">
                    La WebApp para buscar a tus amigos con mapas
                </div>
                <div class="options">
                    <nuxt-link :to="{ name: 'Registro'}">Registrarse</nuxt-link>
                    <nuxt-link :to="{ name: 'login'}">Iniciar sesion</nuxt-link>
                </div>
            </div>
            <div class="cont_bot">

            </div>
            <img class="maps_mark left" src="~/assets/images/index/google-maps-png-map-marker-png-hd-1024.png">
        </div>
        <div class="page blue">
            <div class="cont">
                <div class="description">
                    Utiliza mapas con alta presicion
                </div>
                <div class="img_cont">
                    <img src="~/assets/images/index/australia-traveling-travelling-travel-68704.jpg">
                </div>
            </div>
            <img class="maps_mark right" src="~/assets/images/index/google-maps-png-map-marker-png-hd-1024.png">
        </div>
        <div class="page gold">
            <div class="cont">
                <div class="img_cont">
                    <img src="~/assets/images/index/close-up-photo-of-assorted-color-of-push-pins-on-map-1078850.jpg">
                </div>
                <div class="description">
                    Establece puntos de reunion
                </div>
            </div>
            <img class="maps_mark left" src="~/assets/images/index/google-maps-png-map-marker-png-hd-1024.png">
        </div>
        <div class="page green">
            <div class="cont">
                <div class="description">
                    Ubica a tus familizares y amigos
                </div>
                <div class="img_cont">
                    <img src="~/assets/images/index/backpack-bag-blur-commuter-346768.jpg">
                </div>
            </div>
            <img class="maps_mark right" src="~/assets/images/index/google-maps-png-map-marker-png-hd-1024.png">
        </div>
        <div class="page gold">
            <div class="cont">
                <div class="img_cont">
                    <img src="~/assets/images/index/ball-shaped-blur-close-up-focus-346885.jpg">
                </div>
                <div class="description">
                    Guarda a diferentes personas alrededor del mundo
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head:{
        title:"Bienvenido"
    }
}
</script>

<style lang="scss">
@import "../node_modules/rfs/scss";

.page_containers{

    .page_top{
        width: 100vw;
        height: 100vh;
        min-height: 700px;
        background-color: rgb(253, 152, 36);
        display:flex;
        flex-direction: column;
        position: relative;

        .cont_top{
            width: 100%;
            height: 33.33%;
            display: flex;
            box-sizing: border-box;
            @include padding(1.5rem);

            @media (max-width: 960px){
                flex-direction: column;
                justify-items: center;
                align-items: center;
            }

            .img_cont{
                width: 33.33%;
                height: 100%;
                display: flex;

                @media (max-width: 960px){
                    width: 100%;
                }

                img{
                    @media (max-width: 960px){
                        margin: auto;
                    }
                    margin: 0 0 0 auto;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .title{
                display: flex;
                justify-items: center;
                align-items: center;
                color: white;
                @include font-size(4rem !important);
                font-family: 'Raleway','comic sams ms',sans-serif;   
            }
        }

        .cont_med{
            width: 100%;
            height: 33.33%;
            display: flex;
            flex-direction: column;
            @include padding(1rem);

            .description{
                text-align: center;
                color: white;
                @include font-size(2.25rem);
                @include padding(2rem);
                font-family: 'Raleway','comic sams ms',sans-serif;   
            }

            .options{
                display: flex;
                margin: auto;

                a{
                    color: white;
                    text-decoration: none;
                    box-sizing: border-box;
                    @include padding(1.2rem);
                    @include font-size(1.2rem);
                    background-color: #926e60;
                    border-radius: 25px;
                    font-family: 'Raleway',"comic sans ms",sans-serif;
                    @include margin(.75rem);
                    text-align: center;
                    transition: all 250ms ease-in-out;

                    &:hover{
                        transform: scale(1.05);
                        background-color: #795548;
                    }
                }
            }

        }


    }

    .page{
        width: 100vw;
        height: 100vh;
        min-height: 700px;
        display: flex;
        position: relative;
        box-sizing: border-box;
        @include padding(2rem);

        &.blue{
            background-color: rgb(29, 135, 255);
        }

        &.gold{
            background-color: rgb(187, 207, 0);
        }

        &.green{
            background-color: rgb(39, 197, 0);
        }

        .cont{
            display: flex;
            margin: auto 0;
            height: 60%;

            @media (max-width: 960px){
                flex-direction: column;
                height: 60%;
            }

            .img_cont{
                width: 45%;
                height: 100%;
                margin: 0 auto;
                @include margin-right(2rem);
                border-radius: 20px;
                overflow: hidden;
                transform: rotateZ(-3deg);
                box-sizing: border-box;
                border: 10px solid #fff;
                transition: all 250ms ease-in-out;

                &:hover{
                    transform: scale(1.1);
                }

                @media (max-width: 960px){
                    margin: auto;
                     width: 65%;
                }

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter:blur(1px);
                }
            }

            .description{
                display: flex;
                justify-items: center;
                align-items: center;
                @include font-size(2.75rem);
                color:white;
                text-align: center;
                font-family: 'Raleway','comic sams ms',sans-serif;  

                @media (max-width: 960px){
                    margin: auto;
                    @include margin-top(3rem);
                    @include margin-bottom(3rem);
                } 
            }
        }

    }

    img.maps_mark{
        $size: 25%;
        position: absolute;
        bottom: -($size/2);
        width: $size;
        height: $size;
        z-index: 20;
        object-fit: contain;
        animation: 2s infinite linear girar_izquierda;

        &.right{
            right: -($size/2);
        }

        &.left{
            left: -($size/2);
        }
    } 

}

@keyframes girar_izquierda{
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
</style>