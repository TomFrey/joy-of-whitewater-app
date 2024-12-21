<script setup>
    import { defineProps } from 'vue';
    import { watch } from 'vue';

   
    defineProps({
        data: Object
    });


    // watch(
    //     () => loginData,
    //     () => { 
    //             loginData.value = loginData;
    //             console.log('loginData.email -> '+loginData.email);
    //         }
    // );

</script>



<template>

    <div class="form-field-wrapper">
        <v-text-field
            v-model="data.email"
            variant="outlined"
            label="Email"
            prepend-icon="mdi-email"
            type="email"
            required
            autocomplete="email"
        />
    </div>
   
</template>



<style lang="scss" scoped>
   @import '@/scss/base/specifications';

   

</style>