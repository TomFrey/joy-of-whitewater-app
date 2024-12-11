<script setup>
  import { RouterView } from 'vue-router';

  // import { ref, onMounted } from 'vue'; 
   

  //   const activePage = ref(0);
  //   const state = ref('aktive');

  //   const toggleState = () => {
  //     if (state.value === 'aktive') {
  //       state.value = 'inaktive';
  //     } else {
  //       state.value = 'aktive';
  //     }
  //   };

  //   const tasks = ref(['Aufgabe 1', 'Aufgabe 2', 'Aufgabe 3']);

  //   const newTask = ref('default X');

  //   const addTask = () => {
  //     tasks.value.push(newTask.value);
  //   };

  //   const deleteTask = (index) => {
  //     tasks.value.splice(index, 1);
  //   };


  //   onMounted(async () => {
  //     try {
  //       const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  //       const data = await response.json();
  //       tasks.value = data.map((task) => task.title);
        
  //     } catch (error) {
  //       console.log('Fehler fetching tasks');
  //     }

  //   });

</script>



<template>
  <RouterView />
  
</template>



<style lang="scss" scoped>

</style>
