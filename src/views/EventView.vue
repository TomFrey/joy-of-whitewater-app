<script setup>
    import Header from '@/components/Header.vue';
    import Navigation from '@/components/Navigation.vue';
    import EventList from '@/components/EventList.vue';

    //import PageContent from '@/components/PageContent.vue';

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
                <h1> Events </h1>    
                <EventList></EventList>
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