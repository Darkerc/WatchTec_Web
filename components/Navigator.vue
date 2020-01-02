<template>
    <header>
        <div class="navbar">
            <v-icon class="navbar_menu" @click="toggleMenu">mdi-menu</v-icon>
            <h1 class="title title_navigation">Watch Tec</h1>
        </div>
        <nav class="aside_nav">
            <slot></slot>
            <div class="aside_overlay" @click="toggleMenu"></div>
        </nav>
    </header>
</template>

<script>
export default {
    methods: {
        toggleMenu(){
            // Ayuda a mover el icono del navbar
            const btnMenu = document.querySelector(".navbar_menu");
            btnMenu.classList.toggle("rotate90");
            // Ayuda a mover el menu de la izquierda
            const asideMenu = document.querySelector(".aside_nav");
            asideMenu.classList.toggle("toggleHide");
            // Ayuda a obtener un efecto de fadeout al overlay del menu
            const overlay = document.querySelector(".aside_overlay");
            overlay.classList.toggle("hide");
        }   
    }
}

</script>

<style lang="scss" scoped>
@import "../node_modules/rfs/scss";

$aside_color :#795548;
.navbar{
    width: 100%;
    height: 50px;
    background: $aside_color;
    display: flex;
    box-shadow: 2px 2px 10px #000;
    border-radius: 0 0 5px 5px;

    .navbar_menu{
        color: white;
        @include font-size(2.5rem !important);
        justify-self: self-start;
        @include margin-left(1.5rem !important);
        transition:  all 250ms ease-in-out;

        &.rotate90{
            transform: rotate(-90deg);
        }
    }

    .title{
        margin: auto;
        @include margin-left(1.25rem !important);
        color: white;
        font-weight: 100;
        font-family: 'Fira Sans','comic sans ms',sans-serif;
    }

}
.aside_nav{
    position: absolute;
    top: 0%;
    left: -200%;
    width: 100%;
    height: 100%;
    display: flex;
    transition: all 500ms ease-in-out;

    .aside_overlay{
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: rgba(#000000, .75);
        opacity: 0;
        transition: all 200ms ease-in-out;

        &.hide{
            opacity: 100;
        }
    }   

    &.toggleHide{
        left: 0%;
    }
}
</style>
