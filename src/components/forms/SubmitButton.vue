<script setup>
    const emit = defineEmits(['submitClicked']);   

    const submitButtonEvent = () => {
        console.log('submitClicked');
        emit('submitClicked')
    }
</script>



<template>

    <div class="submit-button-wrapper">
        <v-btn 
            append-icon="mdi-arrow-left-bottom"
            @click="submitButtonEvent">
            Submit
        </v-btn>
    </div>
   
</template>



<style lang="scss" scoped>
   @import '@/scss/base/specifications';

   .submit-button-wrapper{
    margin-bottom: 2*$basicHeight;
   }

</style>