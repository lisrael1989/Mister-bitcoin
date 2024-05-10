import axios from "axios"

const BITCOIN_API = "https://blockchain.info"
const CHARTS_API = "https://api.blockchain.info/charts"

const exchangeRates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.75,
}

const marketPriceHistoryMock = {
  status: "ok",
  name: "Market Price (USD)",
  unit: "USD",
  period: "day",
  description: "Average USD market price across major bitcoin exchanges.",
  values: [
    { x: 1625702400, y: 33243.21 },
    { x: 1625788800, y: 33653.37 },
    { x: 1625875200, y: 32876.96 },
    { x: 1625961600, y: 32415.64 },
  ],
}

const avgBlockSizeMock = {
  status: "ok",
  name: "Average Block Size",
  unit: "MB",
  period: "day",
  description: "The average block size in MB.",
  values: [
    { x: 1625702400, y: 1.224 },
    { x: 1625788800, y: 1.223 },
    { x: 1625875200, y: 1.222 },
  ],
}

export const bitcoinService = {
  getRate,
  getMarketPriceHistory,
  getAvgBlockSize,
}

async function getRate(currency = "USD") {
  const value = exchangeRates[currency] || exchangeRates.USD
  try {
    const { data } = await axios.get(`${BITCOIN_API}/tobtc`, {
      params: { currency, value },
    })
    return data
  } catch (err) {
    console.error("Error getting rate:", err)
    return null
  }
}

async function getMarketPriceHistory(timespan = "5months") {
  try {
    const { data } = await axios.get(`${CHARTS_API}/market-price`, {
      params: { timespan, format: "json", cors: true },
    })
    return data
  } catch (err) {
    console.error("Error getting market price history:", err)
    return marketPriceHistoryMock
  }
}

async function getAvgBlockSize(timespan = "5months") {
  try {
    const { data } = await axios.get(`${CHARTS_API}/avg-block-size`, {
      params: { timespan, format: "json", cors: true },
    })
    return data
  } catch (err) {
    console.error("Error getting average block size:", err)
    // Returning mock data for development
    return avgBlockSizeMock
  }
}
