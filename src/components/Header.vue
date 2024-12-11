<script setup>
    import logo from '@/assets/images/Logo_Welle_schwarzeSchrift.svg';
    const title = 'TheJoyOfWhitewater Application';

</script>


<template>
   <header>
        <div class="header-wrapper">
            <img class="logo-header" :src="logo" alt="">
            <h1> {{ title }} </h1>   
        </div>
    </header>
</template>


<style lang="scss" scoped>
    @import '@/scss/base/specifications';

    header{
      //height: $heightHeader;
      background-color: $standardBackgroundColor;
      padding-bottom: $basicHeight;
    }

    .header-wrapper{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
    }

    .logo-header{
        width: 15%;
    }
</style>

