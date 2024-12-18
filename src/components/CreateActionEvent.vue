<script setup>
 import { RouterLink } from 'vue-router';
  

  const createEvent = () => {

  }

</script>



<template>

   <div class="create-event-action-wrapper">
      <RouterLink class="create-event-action" to="/event/new">
         <h2>create</h2>
         <img src="@/assets/images/icons/new.svg" alt="Neuen Event erstellen">
      </RouterLink>
   </div>
   
   
</template>



<style lang="scss" scoped>
   @import '@/scss/base/specifications';

   .create-event-action-wrapper{
      width: 30%;
   }

   .create-event-action{
         cursor: pointer;
        padding: 0.5*$basicHeight $basicWidth;
        text-decoration: none;
      //  border: 1px solid black;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-start;

        h2{
            padding-right: $basicWidth;
            color: black;
            //flex: 0 1 10%;
        }

        img{
            width: 10%;
            //flex: 0 1 10%;
        }
    }

</style>