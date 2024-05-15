<template>
  <main class="flex">
    <section>
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
      <button class="buy-bitcoin-btn">
        <span class="box">
          Buy BTC
          <div class="star-1">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>bitcoin</title>
              <path
                d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z"
              ></path>
            </svg>
          </div>
          <div class="star-2">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>bitcoin</title>
              <path
                d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z"
              ></path>
            </svg>
          </div>
          <div class="star-3">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>bitcoin</title>
              <path
                d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z"
              ></path>
            </svg>
          </div>
          <div class="star-4">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>bitcoin</title>
              <path
                d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z"
              ></path>
            </svg>
          </div>
          <div class="star-5">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>bitcoin</title>
              <path
                d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z"
              ></path>
            </svg>
          </div>
          <div class="star-6">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>bitcoin</title>
              <path
                d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z"
              ></path>
            </svg>
          </div>
        </span>
      </button>
    </section>
    <section>
      <div class="walletBalanceCard">
        <div class="svgwrapper">
          <svg viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="0.539915"
              y="6.28937"
              width="21"
              height="4"
              rx="1.5"
              transform="rotate(-4.77865 0.539915 6.28937)"
              fill="#7D6B9D"
              stroke="black"
            ></rect>
            <circle
              cx="11.5"
              cy="5.5"
              r="4.5"
              fill="#E7E037"
              stroke="#F9FD50"
              stroke-width="2"
            ></circle>
            <path
              d="M2.12011 6.64507C7.75028 6.98651 12.7643 6.94947 21.935 6.58499C22.789 6.55105 23.5 7.23329 23.5 8.08585V24C23.5 24.8284 22.8284 25.5 22 25.5H2C1.17157 25.5 0.5 24.8284 0.5 24V8.15475C0.5 7.2846 1.24157 6.59179 2.12011 6.64507Z"
              fill="#ea8b19"
              stroke="black"
            ></path>
            <path
              d="M16 13.5H23.5V18.5H16C14.6193 18.5 13.5 17.3807 13.5 16C13.5 14.6193 14.6193 13.5 16 13.5Z"
              fill="#ea8b19"
              stroke="black"
            ></path>
          </svg>
        </div>

        <div class="balancewrapper">
          <span class="balanceHeading">{{ user.name }}</span>
          <p class="balance"><span id="currency">$</span>{{ user.balance }}</p>
        </div>

        <button class="addmoney"><span class="plussign">+</span>Add Money</button>
      </div>
    </section>
  </main>
</template>

<script>
import { bitcoinService } from "@/services/bitcoin.service"
import { userService } from "@/services/user.service.js"

export default {
  data() {
    return {
      bitcoinRate: null,
      usdAmount: 0,
      user: "",
    }
  },

  async created() {
    this.bitcoinRate = await bitcoinService.getRate()
    this.user = await userService.getUser()
  },
  methods: {
    convertUsdToBtc(usdAmount) {
      return (usdAmount / this.bitcoinRate).toFixed(8)
    },
  },
}
</script>

<style lang="scss">
main {
  padding: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  & .bitcoin-rate {
    background-color: #ea8b19;
    color: white;
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
.buy-bitcoin-btn {
  background: linear-gradient(30deg, #000 35%, #ea8b19 73%);
  position: relative;
  padding: 17px 45px;
  font-size: 20px;
  font-weight: 500;
  color: white;
  border: 3px solid #ea8b19;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
}

.star-1 {
  position: absolute;
  fill: #ea8b19;
  top: 20%;
  left: 20%;
  width: 25px;
  height: auto;
  filter: drop-shadow(0 0 0 #ea8b19);
  z-index: -5;
  transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
}

.star-2 {
  position: absolute;
  fill: #ea8b19;
  top: 45%;
  left: 45%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 0 #ea8b19);
  z-index: -5;
  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-3 {
  position: absolute;
  fill: #ea8b19;
  top: 40%;
  left: 40%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 0 #ea8b19);
  z-index: -5;
  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-4 {
  position: absolute;
  fill: #ea8b19;
  top: 20%;
  left: 40%;
  width: 8px;
  height: auto;
  filter: drop-shadow(0 0 0 #ea8b19);
  z-index: -5;
  transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-5 {
  position: absolute;
  fill: #ea8b19;
  top: 25%;
  left: 45%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 0 #ea8b19);
  z-index: -5;
  transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-6 {
  position: absolute;
  fill: #ea8b19;
  top: 5%;
  left: 50%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 0 #ea8b19);
  z-index: -5;
  transition: all 0.8s ease;
}

.buy-bitcoin-btn:hover {
  background: #000;
  color: #ea8b19;
  box-shadow: 0 0 50px #ea8b19;
}

.buy-bitcoin-btn:hover .star-1 {
  position: absolute;
  top: -110%;
  left: -60%;
  width: 30px;
  height: auto;
  filter: drop-shadow(0 0 10px #ea8b19);
  z-index: 2;
}

.buy-bitcoin-btn:hover .star-2 {
  position: absolute;
  top: -45%;
  left: 0%;
  width: 20px;
  height: auto;
  filter: drop-shadow(0 0 10px #ea8b19);
  z-index: 2;
}

.buy-bitcoin-btn:hover .star-3 {
  position: absolute;
  top: 55%;
  left: 15%;
  width: 11px;
  height: auto;
  filter: drop-shadow(0 0 10px #ea8b19);
  z-index: 2;
}

.buy-bitcoin-btn:hover .star-4 {
  position: absolute;
  top: 45%;
  left: 85%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 10px #ea8b19);
  z-index: 2;
}

.buy-bitcoin-btn:hover .star-5 {
  position: absolute;
  top: 25%;
  left: 140%;
  width: 25px;
  height: auto;
  filter: drop-shadow(0 0 10px #ea8b19);
  z-index: 2;
}

.buy-bitcoin-btn:hover .star-6 {
  position: absolute;
  top: -5%;
  left: 60%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 10px #ea8b19);
  z-index: 2;
}

.fil0 {
  fill: #ea8b19;
}

.box {
  width: 120px;
  height: 45px;
  float: left;
  transition: 0.5s linear;
  position: relative;
  display: block;
  padding: 8px;
  margin: -10px -15.5px;
  background: transparent;
  text-transform: uppercase;
  font-weight: 900;
}

.box:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  color: white;
  background: black;
}

.box:hover:before {
  border-color: #fff;
  height: 100%;
  transform: translateX(0);
  transition: 0.3s transform linear, 0.3s height linear 0.3s;
}

.box:hover:after {
  border-color: #ea8b19;
  height: 100%;
  transform: translateX(0);
  transition: 0.3s transform linear, 0.3s height linear 0.5s;
}

.box:before {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  height: 4px;
  width: 100%;
  border-bottom: 4px solid transparent;
  border-left: 4px solid transparent;
  box-sizing: border-box;
  transform: translateX(100%);
}

.box:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  border-top: 4px solid transparent;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  transform: translateX(-100%);
}

.walletBalanceCard {
  width: fit-content;
  height: 55px;
  background-color: #1c1f2f;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding: 0px 12px;
  font-family: Arial, Helvetica, sans-serif;
}
.svgwrapper {
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.svgwrapper svg {
  width: 100%;
}
.balancewrapper {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 120px;
  gap: 0px;
}
.balanceHeading {
  font-size: 8px;
  color: rgb(214, 214, 214);
  font-weight: 100;
  letter-spacing: 0.6px;
}
.balance {
  font-size: 13.5px;
  color: white;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.addmoney {
  padding: 1px 15px;
  border-radius: 20px;
  background-color: #ea8b19;
  color: white;
  border: none;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.addmoney:hover {
  background-color: whitesmoke;
  color: #ea8b19;
}
.plussign {
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
