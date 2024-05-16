<template>
  <form class="contact-filter">
    <div>
      <h2>Filter</h2>
      <input @input="onFilter" v-model="filterBy.txt" type="text" placeholder="By name" />
      <input @input="onFilter" v-model="filterBy.email" type="text" placeholder="By email" />
      <input @input="onFilter" v-model="filterBy.phone" type="text" placeholder="By phone" />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      filterBy: { txt: "", email: "", phone: "" },
    }
  },
  methods: {
    onFilter() {
      this.$emit("filter", this.filterBy)
    },
  },
}
</script>

//
<style lang="scss">
.contact-filter {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px;
  background-color: goldenrod;
  color: whitesmoke;
  margin: 10px 10px;
  height: 100px;
  border-radius: 8px;

  & h2 {
    color: white;
    text-align: center;
    padding-bottom: 5px;
    font-size: 1.75em;
    font-weight: 600;
  }

  & input {
    margin-right: 10px;
    border-radius: 5px;
    padding: 5px;
  }
}
</style>
