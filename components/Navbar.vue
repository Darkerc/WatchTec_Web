<template>
<div>
    <v-card>
        <v-app-bar id="app-bar" color="brown darken-1" dark :tile="false">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title class="headline title_navigation">Watch Tec</v-toolbar-title>

            <div class="flex-grow-1"></div>
        </v-app-bar>
    </v-card>

    <v-navigation-drawer id="navigation_aside" app temporary dark v-model="drawer" color="brown darken-1" style="max-height: 100$;">
        <v-img :aspect-ratio="16/9" src="/v.png" contain>
        </v-img>
        <perfect-scrollbar class="aside_body" :options="{ swipeEasing: true , suppressScrollX: true}">
            <v-list two-line class="list-cont remove-underline  brown darken-1">
                <v-list-item-group active-class="title_active">
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="title">
                                <v-icon>mdi-vuejs</v-icon>
                                Inicio
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                Secondary line text Lorem ipsum dolor sit amet,
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="title">
                                <v-icon>mdi-vuetify</v-icon>
                                Opcion 1
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                Secondary line text Lorem ipsum dolor sit amet,
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="title">
                                <v-icon>mdi-nuxt</v-icon>
                                Opcion 1
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                Secondary line text Lorem ipsum dolor sit amet,
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="title">
                                <v-icon>mdi-language-javascript</v-icon>
                                Opcion 1
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="title">
                                <v-icon>mdi-language-php</v-icon>
                                Opcion 1
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="title">
                                <v-icon>mdi-jquery</v-icon>
                                Opcion 1
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="title">
                                Opcion 1
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="title">
                                Opcion 1
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="title">
                                Opcion 1
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="title">
                                Opcion 1
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="title">
                                Opcion 1
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </perfect-scrollbar>
        <div class="aside_footer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid beatae ab enim, voluptas tenetur harum fugit veniam quaerat neque consectetur numquam nulla quod quasi id odit sequi aliquam ratione similique?
        </div>
    </v-navigation-drawer>

</div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false
        }
    }
}
</script>

<style lang="scss">
#navigation_aside {

    .v-navigation-drawer__content {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 1.1em .25em 1.1em 0;
    }

    .aside_body {
        margin: 0 0 auto 0;
        overflow: auto;
        max-height: 100%;

        .title {
            box-sizing: border-box;
            font-size: 1.1em !important;
            padding: 0.5em !important;
            padding-left: 1em;
            transition: 200ms all ease-in-out;
        }

        .title_active {
            transform: scale(1.15);
        }

        .v-list-item__subtitle {
            width: 100%;
            white-space: initial;
        }
    }

    .aside_footer {
        font-size: 10px;
        box-sizing: border-box;
        padding: 8px;
        text-align: center;
    }

}
</style>
