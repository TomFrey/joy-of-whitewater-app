<script setup>
  import { RouterLink } from 'vue-router';
   
</script>


<template>
    <div class="app-wrapper">

        <h1>You are lost!</h1>

        <RouterLink to="/" class="go-back-link">
            go back
        </RouterLink>

    </div>
</template>

<style lang="scss" scoped>
    @import '@/scss/base/specifications';

    .app-wrapper{
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;

        h1{
            font-size: $bigTitleSize;
        }

        .go-back-link{
            font-size: $titleSize;
        }
    }
</style>