<template>
<div class="fill-height brown darken-1" id="aside_container">
    <div class="aside_header">

        <v-toolbar-title class="header_child title_navigation">WatchTec</v-toolbar-title>

        <v-img class="header_child" src="/v.png" height="100px" contain>
        </v-img>
    </div>

    <perfect-scrollbar class="aside_body" :options="{ swipeEasing: true}">
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
</div>
</template>

<script>
import Vue from 'vue'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

Vue.use(PerfectScrollbar)

export default {
    data() {
        return {
            items: [{
                    title: 'Dashboard',
                    icon: 'dashboard'
                },
                {
                    title: 'Account',
                    icon: 'account_box'
                },
                {
                    title: 'Admin',
                    icon: 'gavel'
                },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>

#aside_container {
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    box-sizing: border-box;
    padding: 0 5px 1.1em 5px;

    .aside_header {
        margin: 0;
        display: flex;
        box-sizing: border-box;
        padding: .75em;

        .header_child {
            margin: auto;
            font-size: 30px;
            width: 50%;
            text-align: center;
            white-space: initial;
        }
    }

    .aside_body {
        margin: 0 0 auto 0;
        overflow: auto;
        overflow-x: hidden;
        max-height: 100%;
        // text-align: center;

        .title {
            box-sizing: border-box;
            font-size: 1.1em !important;
            padding: 0.5em !important;
            padding-left: 1em;
            transition: 200ms all ease-in-out;

        }

        .title_active {
            transform: scale(1.1);
        }

        .v-list-item__subtitle {
            width: 100%;
            white-space: initial;
        }
    }

    .aside_footer {
        font-size: 10px;
        box-sizing: border-box;
        padding: 5px;
        text-align: center;
    }
}
</style>
