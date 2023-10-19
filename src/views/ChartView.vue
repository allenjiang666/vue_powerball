<template>
  <div v-if="data">
    <Table :data="data" />
  </div>
  <div class="text-center" v-else>Loading...</div>
</template>

<script setup>
import Table from '../components/Table.vue';
import { ref, } from 'vue';


const props = defineProps({
  data: Array,

})


const data = ref(null)


const coordinates = {
  red: {
    dates: [],
    numbers: []
  },
  white: {
    dates: [],
    numbers: []
  }
}

props.data.map(item => {
  const date = `${item['Year']}-${item['Month']}-${item['Day']}`
  let cols = ['Num1', 'Num2', 'Num3', 'Num4', 'Num5']
  cols.map((Num) => {
    coordinates.white.dates.push(date)
    coordinates.white.numbers.push(item[Num])
  })
  coordinates.red.dates.push(date)
  coordinates.red.numbers.push(item['PowerBall'])
})

data.value = coordinates

</script>
