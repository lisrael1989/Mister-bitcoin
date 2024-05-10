<template>
  <main class="flex">
    <section>
      <h1 class="title">Welcome to Mr. Bitcoin</h1>
      <h3>Where You can exchange bitcoin fast and easily</h3>
      <p class="bitcoin-rate" v-if="bitcoinRate">
        Current Bitcoin rate:<span>{{ bitcoinRate }}</span> BTC per <span>1</span> USD
      </p>
      <p v-else>Loading Bitcoin rate...</p>
    </section>
    <div class="usd-to-btc-converter" v-if="bitcoinRate">
      <h4>Convert USD to BTC</h4>
      <label for="usdAmount">Enter USD amount:</label>
      <input
        type="number"
        v-model.number="usdAmount"
        id="usdAmount"
        min="0"
        placeholder="Amount in USD"
      />
      <p class="bitcoin-rate" v-if="usdAmount > 0">
        {{ usdAmount }} USD = {{ convertUsdToBtc(usdAmount) }} BTC
      </p>
    </div>
  </main>
</template>

<script>
import { bitcoinService } from "@/services/bitcoin.service"

export default {
  data() {
    return {
      bitcoinRate: null,
      usdAmount: 0,
    }
  },
  async created() {
    this.bitcoinRate = await bitcoinService.getRate()
  },
  methods: {
    convertUsdToBtc(usdAmount) {
      return (usdAmount / this.bitcoinRate).toFixed(8)
    },
  },
}
</script>

<style lang="scss" scoped>
main {
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & .bitcoin-rate {
    background-color: gold;
    color: black;
    width: fit-content;
    padding: 5px;
    border-radius: 8px;

    & span {
      font-weight: 600;
    }
  }

  .usd-to-btc-converter {
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 5px;
    }

    input {
      padding: 5px;
      border-radius: 5px;
      border: 1px solid #ccc;
      margin-bottom: 10px;
    }

    p {
      font-weight: bold;
    }
  }
}
</style>
