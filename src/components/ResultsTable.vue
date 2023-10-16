<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-5">
        <table class="w-full text-sm text-left text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-200">
                <tr>
                    <th v-for="key in Object.keys(data[0])" :key="key" scope="col" class="px-6 py-3">{{ key }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(result, index) in paginatedData" :key="index" class="bg-white border-b hover:bg-slate-100">
                    <td v-for="value in Object.values(result)" class="px-6 py-4">{{ value }}</td>
                </tr>
            </tbody>
        </table>

        <div class="flex justify-between my-2">
            <div>
                <Button color="alternative" size="xs" class="ml-4" @click="data.reverse()">↑↓</Button>
            </div>
            <div>
                <Button color="alternative" size="xs" class='mx-1' @click="prevPage"
                    :disabled="currentPage === 0">上一页</Button>
                <Button color="default" size="xs" class='mx-2' @click="nextPage"
                    :disabled="currentPage === totalPages">下一页</Button>
                <span class="text-sm mr-2">当前页数 {{ currentPage }}， 全部页数 {{ totalPages }}</span>
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

const data = ref(props.data)

const currentPage = ref(0)

const totalPages = computed(() => Math.ceil(props.data.length / props.perPage))


const paginatedData = computed(
    () => data.value.slice(currentPage.value * props.perPage, (currentPage.value + 1) * props.perPage)
)



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