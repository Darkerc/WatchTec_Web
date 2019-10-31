<template>
<v-app dark>
    <client-only>
      <Navbar v-show="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"/>
    </client-only>
    <v-row class="content_main">
        <client-only>
          <v-col v-show="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)" md="4" class="col_container">
            <AsideNavigation class="aside_navigation"/>
          </v-col>
        </client-only>

        <v-col cols="12" md="8" class="col_container">
            <nuxt class="page_container" />
        </v-col>
    </v-row>
    <LoadingPage id="LoadingPage"/>
</v-app>
</template>

<script>
import AsideNavigation from '~/components/AsideNavigation.vue'
import Navbar from '~/components/Navbar.vue'
import LoadingPage from '~/components/loading-page.vue'


export default {
  components: {
    AsideNavigation,
    Navbar,
    LoadingPage
  },
}

</script>

<style lang="scss">
html,
.content_main {
    overflow-y: hidden;
    max-width: 100vw;
    max-height: 100vh;
    margin: 0 !important;

    .col_container {
        padding: 0 !important;

        .aside_navigation,
        .page_container {
            min-width: 100%;
            min-height: 100%;
        }
    }
}
</style>
