<template>
  <div class="relative overflow-x-auto shadow-md p-2 sm:rounded-lg md:m-5">
    <div class="mb-1">
      <h2>Number filter：{{ parseInt(slider * .7) }}</h2>
      <input id="small-range" type="range" v-model="slider"
        class="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700">
    </div>
    <table class="w-full text-sm text-left text-gray-500 ">
      <thead class="text-xs text-gray-700 uppercase bg-gray-200">
        <tr>
          <th cope="col" class="px-1 py-2">Date</th>
          <th colspan="5" scope="colgroup" class="px-1 py-2">White</th>
          <th cope="col" class="px-1 py-2 text-red-500">Red</th>
          <th cope="col" class="px-1 py-2 font-bold">Power Play</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(result, index) in filteredData" :key="index" class="bg-white border-b hover:bg-slate-100"
          :class="{ 'bg-rose-100': index === 0 }">
          <td v-for="[key, value] in Object.entries(result)" :key=key
            :class="{ 'text-red-500': key === '红球', 'font-bold': key === '倍数', 'text-[0.7rem]': key == '日期' }"
            class="px-1 py-2">
            {{ value }}</td>
        </tr>
      </tbody>
    </table>

    <div class="flex justify-between my-2">
      <div>
        <Button color="alternative" size="xs" class="ml-4" @click="data.reverse()">↑↓</Button>
      </div>
      <div>
        <Button color="alternative" size="xs" class='mx-1' @click="prevPage" :disabled="currentPage === 0">Previous
          Page</Button>
        <Button color="default" size="xs" class='mx-2' @click="nextPage" :disabled="currentPage === totalPages">Next
          Page</Button>
        <span class="text-sm mr-2">Current Page {{ currentPage }}， Total Page {{ totalPages }}</span>
      </div>

    </div>
  </div>
</template>




<script setup>
import { ref, computed } from 'vue';
import { Button } from 'flowbite-vue'

const props = defineProps({
  data: Array,
  perPage: Number

})

// const data = ref(null)


const data = props.data.map(item => {
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

  }
}
).reverse()


const currentPage = ref(0)

const totalPages = computed(() => Math.ceil(props.data.length / props.perPage))

const slider = ref(0)


const paginatedData = computed(
  () => data.slice(currentPage.value * props.perPage, (currentPage.value + 1) * props.perPage)
)


const filteredData = computed(() => paginatedData.value.map(item => {
  // Create a new object with Num1 set to "1"
  let cols = ['Num1', 'Num2', 'Num3', 'Num4', 'Num5']
  let numbers = cols.map((Num) => item[Num] > slider.value * .7 ? item[Num] : null)
  const whiteBall = {}

  for (let i = 0; i < cols.length; i++) {
    whiteBall[cols[i]] = numbers[i];
  }

  return {
    ...item,
    ...whiteBall
  }
}))

console.log(filteredData.value)

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

function prevPage() {
  if (currentPage.value > 0) {
    currentPage.value--;
  }
}


</script>