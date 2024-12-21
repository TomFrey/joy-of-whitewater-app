<script setup>
    import { defineProps, ref } from 'vue';
   
    defineProps({
        data: Object
    });

    let visible = ref(false);
    const toggleVisible = () => {
        console.log('toggleVisible -> ' + visible.value);
        if(visible.value){
            visible.value = false;
            return;
        }
        visible.value = true;
    }
</script>



<template>

    <div class="form-field-wrapper">
        <v-text-field
            v-model="data.password"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            @click:append-inner="toggleVisible()"
            variant="outlined"
            label="Passwort"
            prepend-icon="mdi-lock-outline"
            required
            autocomplete="current-password"
        />
    </div>
   
</template>



<style lang="scss" scoped>
   @import '@/scss/base/specifications';

   

</style>