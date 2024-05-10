<template>
  <Line id="line-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Line } from "vue-chartjs"
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js"

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

export default {
  name: "LineChart",
  props: {
    labels: {
      type: Array,
      required: true,
    },
    values: {
      type: Array,
      required: true,
    },
  },
  computed: {
    chartData() {
      return {
        labels: this.labels,
        datasets: [
          {
            label: "Bitcoin Price (USD)",
            borderColor: "#f7931a",
            backgroundColor: "#f7931a",
            data: this.values,
            fill: false,
          },
        ],
      }
    },
  },
  data() {
    return {
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Bitcoin Price Per Day",
          },
        },
      },
    }
  },
  components: {
    Line,
  },
}
</script>

<style scoped>
#line-chart-id {
  margin-top: 20px;
}
</style>
