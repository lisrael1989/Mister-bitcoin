<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from "vue-chartjs"
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js"

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: "BarChart",
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
            label: "Market Price (USD)",
            backgroundColor: "#0d579b",
            borderColor: "#0d579b",
            data: this.values,
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
            text: "Bitcoin Market Price History",
          },
        },
      },
    }
  },
  components: {
    Bar,
  },
}
</script>
