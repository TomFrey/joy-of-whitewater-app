<script setup>
   


</script>



<template>

    <div class="form-field-wrapper">
        <v-text-field
            v-model="email"
            variant="outlined"
            label="Email"
            prepend-icon="mdi-email"
            type="email"
            required
        />
    </div>
   
</template>



<style lang="scss" scoped>
   @import '@/scss/base/specifications';

   

</style>