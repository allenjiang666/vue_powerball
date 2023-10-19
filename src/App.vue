<template>
  <Layout>
    <div v-if="data">
      <RouterView :data="data" :perPage=14 />
    </div>
    <div class="text-center" v-else>Loading...</div>
  </Layout>
</template>


<script setup>

import { ref, onMounted } from 'vue';
import Layout from './components/Layout.vue';
import { RouterView } from 'vue-router';
import { functions } from './lib/appwrite.js';

const data = ref(null)

async function fetchData() {
  try {
    const response = await functions.createExecution(
      '652affab1f6d99dc9f59', '', false, '/', 'GET',
      {}
    );
    data.value = JSON.parse(response.responseBody).slice(1200);


  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

onMounted(() => fetchData())

</script>




