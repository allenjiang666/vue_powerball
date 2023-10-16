<template>
  <div class="mt-2 text-center">
    <h1 class="mb-4 text-3xl font-extrabold text-gray-900">
      <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">PowerBall</span>
      分析
    </h1>
  </div>
  <div v-if="powballData">
    <ResultTable :data="powballData" :perPage=12 />
  </div>
  <div class="text-center" v-else>Loading...</div>
</template>



<script setup>
import { ref, onMounted } from 'vue';
import { functions } from './lib/appwrite.js';
import ResultTable from './components/resultsTable.vue'
import Chart from './components/Chart.vue'



const powballData = ref(null)

async function fetchData() {
  try {
    const response = await functions.createExecution(
      '652affab1f6d99dc9f59', '', false, '/', 'GET',
      { 'X-Custom-Header': '123' }
    );
    const data = JSON.parse(response.responseBody);

    powballData.value = data.map(item => {
      const date = `${item['Year']}-${item['Month']}-${item['Day']}`;

      let cols = ['Num1', 'Num2', 'Num3', 'Num4', 'Num5']
      let numbers = cols.map((Num) => item[Num]).sort((a, b) => parseInt(a) - parseInt(b))

      const whiteBall = {}

      for (let i = 0; i < cols.length; i++) {
        whiteBall[cols[i]] = numbers[i];
      }

      return {
        '日期': date,
        ...whiteBall,
        '红球': item['PowerBall'],
        '倍数': item['Power Play']

      };
    });

    ; // Update the ref with the fetched data

    // powballData.value = modifiedData; 


  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

onMounted(() => {
  fetchData();
})






</script>


