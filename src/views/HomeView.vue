<script setup>
    import { ref } from 'vue'; 
    import Navigation from '@/components/Navigation.vue';
    import Header from '@/components/Header.vue';
    import EmailField from '@/components/forms/EmailField.vue';   
</script>


<template>
    <div class="app-wrapper">

        <div class="side-space--left">
            <div class="side-space--left-wrapper">
                side-space--left
            </div>
        </div>
        
        <Header />
      
        <Navigation />

        <main>
            <div class="main-wrapper">
                <div class="home-title-wrapper">
                    <v-icon class="home-title-icon" icon="mdi-home" size="x-large"/> <h1> Home </h1>   
                </div>
                

                <EmailField />

            </div>  
        </main>

        <footer>
            <div class="footer-wrapper">
                FOOTER
            </div>
        </footer>


        <div class="side-space--right">
            <div class="side-space--right-wrapper">
                side-space--right
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/scss/base/specifications';

    .home-title-wrapper{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;

        .home-title-icon{
            margin-right: $basicWidth;
        }
    }
</style>