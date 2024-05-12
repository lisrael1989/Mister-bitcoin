<template>
  <div class="Statistics">
    <h1>Statistics Page</h1>
    <BarChart
      v-if="monthlyLabels.length && monthlyValues.length"
      :labels="monthlyLabels"
      :values="monthlyValues"
    />
    <LineChart
      v-if="dailyLabels.length && dailyValues.length"
      :labels="dailyLabels"
      :values="dailyValues"
    />
  </div>
</template>

<script>
import { bitcoinService } from "@/services/bitcoin.service.js"
import BarChart from "@/cmps/BarChart.vue"
import LineChart from "@/cmps/LineChart.vue"

export default {
  name: "Statistics",
  components: {
    BarChart,
    LineChart,
  },
  data() {
    return {
      monthlyLabels: [],
      monthlyValues: [],
      dailyLabels: [],
      dailyValues: [],
    }
  },
  async created() {
    try {
      // Fetch market price data
      const marketPriceHistory = await bitcoinService.getMarketPriceHistory("5months")

      // Aggregate data by month
      const monthlyData = this.aggregateByMonth(marketPriceHistory.values)
      this.monthlyLabels = Object.keys(monthlyData)
      this.monthlyValues = Object.values(monthlyData)

      // Prepare daily data
      this.dailyLabels = marketPriceHistory.values.map((item) =>
        new Date(item.x * 1000).toLocaleDateString()
      )
      this.dailyValues = marketPriceHistory.values.map((item) => item.y)
    } catch (err) {
      console.error("Error fetching market price history:", err)
    }
  },
  methods: {
    aggregateByMonth(data) {
      const result = {}
      data.forEach((item) => {
        const date = new Date(item.x * 1000)
        const month = date.toLocaleString("default", { month: "long", year: "numeric" })
        if (!result[month]) result[month] = 0
        result[month] += item.y
      })
      return result
    },
  },
}
</script>

<style scoped>
.Statistics {
  display: flex;
  max-width: 1000px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  padding: 20px;
  margin: 0 auto;
}
</style>
