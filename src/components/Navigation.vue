<script setup>
    import NavLink from '/src/components/NavigationLink.vue';
    import { defineProps, ref } from 'vue';

    const pages = ref([ { link: {text: 'Home', url: '/'}},
                        { link: {text: 'Events', url: '/event'}},
                        { link: {text: 'States', url: '/state'}}
                      ]);
</script>


<template>
    <nav>
        <ul class='navbar-nav'>
            <li v-for="(page, index) in pages" class="navbar-item" :key="index">
              <NavLink :page="page"></NavLink>
            </li>
        </ul>

        <!-- <md-menu>
            <md-menu-item>Item1</md-menu-item>
            <md-menu-item>Item2</md-menu-item>
            <md-menu-item>Item3</md-menu-item>
        </md-menu> -->
    </nav>
    
</template>


<style lang="scss" scoped>
    @import '@/scss/base/specifications';


    .navbar-nav {
        @include navigationTextFont();

        .navbar-item {
            display: inline-block;
            padding-right: 16px;
        }
    }

</style>



<!-- <a :href="page.link.url"
class="navbar-link"
:class="{active: activePage == index}"
:title="`Dieser Link geht zur ${page.link.text} Seite.`"
 @click.prevent="navLinkClick(index)"
>{{ page.link.text }}</a>



<a 
class="nav-link"
:class="activeClasses"
aria-current="page"
:href="page.link.url"
:title="`Dieser Link geht zur ${page.link.text} Seite`"
>
{{ page.link.text }}
</a> -->