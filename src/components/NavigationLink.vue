<script setup>
    import { defineProps } from 'vue';
    import { RouterLink, useRoute } from 'vue-router';

    defineProps({
        page: {
            type: Object
        }
    });

    //wird nicht gebraucht
    //useRoute gibt den aktuelle Pfad zurück
    const isActiveNavigation = (routePath) => {
      const actualRoute = useRoute();
      return actualRoute.path === routePath;
    }
</script>


<template>

    <RouterLink 
        class="nav-link"
        aria-current="page"
        :to="page.link.url"
        :title="`Dieser Link geht zur ${page.link.text} Seite`"
    >
        {{ page.link.text }}
    </RouterLink>
    
</template>




<style lang="scss" scoped>
    @import '@/scss/base/specifications';

    .nav-link{
        color: white;
    }

    .nav-link.router-link-active{
        color: black;
        font-weight: 700;
        font-size: 1.75rem;
    }

</style>