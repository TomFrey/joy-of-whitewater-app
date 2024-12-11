<script setup>
    import { ref, onMounted } from 'vue'; 
    import Event from '@/components/Event.vue';   
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
    import config from '@/appConfig.js'
   
    const jowEvents = ref();
    const isLoading = ref(true);

    onMounted(async () => {
        try {
            const response = await fetch('https://digitalriver.me/api/v1/events', {
                method: 'GET',
                headers: {
                    'Authorization': config.production.token,
                    'Accept': 'application/json'
                }
            });
            const data = await response.json();  //{data: [{'id': 1, 'name': 'Kajak Level 2'}, {}, ...]}
            jowEvents.value = data.data;    
              
        } catch (error) {
            console.log('Fehler fetching joyOfWhitewater events: ' + error);
        } finally {
            isLoading.value = false;
        }

    });
</script>



<template>

    <h2>Alle Events aus der DB</h2>
    <!-- Spinner anzeigen, während dem laden -->
    <div v-if="isLoading" class="spinner">
        <PulseLoader :color="'#000000'" :size="'25px'" />
    </div>
    <div v-else>
        <Event v-for="jowEvent in jowEvents" :key="jowEvent.id" :jowEvent="jowEvent"/>
    </div>

</template>



<style lang="scss" scoped>

</style>