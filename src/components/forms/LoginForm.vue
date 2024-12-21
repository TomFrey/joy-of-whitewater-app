<script setup>
    import { ref } from 'vue'; 
    import EmailField from '@/components/forms/EmailField.vue';
    import PasswordField from '@/components/forms/PasswordField.vue';
    import SubmitButton from '@/components/forms/SubmitButton.vue';
   

    const loginData = ref({email: '', password: ''});



    const sendFormData = () => {
        console.log('sendFormData -> ' + loginData.value.email + ' ' + loginData.value.password);
    }


</script>



<template>

    <div class="login-form-wrapper">

        <v-form>
            <v-sheet class="login-form"
            :elevation="4"
            height="auto"
            width="100%"
            border
            rounded>
                <email-field :data="loginData"></email-field>
                <password-field :data="loginData"></password-field>
                <SubmitButton @submit-clicked="sendFormData"/>
            </v-sheet>

        </v-form>

      


    </div>
   
</template>



<style lang="scss" scoped>
   @import '@/scss/base/specifications';

   .login-form{
        padding: $basicHeight $basicWidth;
   }

</style>