<script setup>
    import { ref } from 'vue'; 
    import Navigation from '@/components/Navigation.vue';
    import Header from '@/components/Header.vue';
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
                <!-- <img class="logo-main-page" :src="logo" alt=""> -->
                <h1> Home </h1>    
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