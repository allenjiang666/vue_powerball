<template>
    <div ref="plotlyRef" class="h-[90vh]"></div>
</template>

<script setup>

import Plotly from 'plotly.js-dist';
import { ref, onMounted } from 'vue';

const props = defineProps({
    data: Object
})

const coordinates = ref(props.data)


const plotlyRef = ref(null);

onMounted(
    () => {
        const TESTER = plotlyRef.value

        Plotly.newPlot(TESTER, [
            {
                y: coordinates.value.white.dates,
                x: coordinates.value.white.numbers,
                mode: 'markers',
                type: 'scatter',
                name: '白球',
                marker: { size: 9 }
            },
            {
                y: coordinates.value.red.dates,
                x: coordinates.value.red.numbers,
                mode: 'markers',
                type: 'scatter',
                name: '红球',
                marker: {
                    size: 12,
                    color: "red"
                }
            }

        ], {
            margin: { t: 0 },
            title: 'Power 图表',
            xaxis: { tickfont: { size: 20 } },
            yaxis: { tickfont: { size: 15 } },
        });
    }
)

</script>
