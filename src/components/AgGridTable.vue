<template>
    <AgGridVue style="width: 100%; height: 200px" class="ag-theme-alpine" :columnDefs="columnDefs" :rowData="rowData">
    </AgGridVue>
</template>
  
<script setup>
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";

import { ref } from "vue";

const columnDefs = ref([
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" },
])
const rowData = ref([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
])

</script>