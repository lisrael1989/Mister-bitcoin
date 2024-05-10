<template>
  <form class="contact-filter">
    <h2>Filter</h2>
    <input @input="onFilter" v-model="filterBy.txt" type="text" placeholder="By name" />
    <input @input="onFilter" v-model="filterBy.email" type="text" placeholder="By email" />
    <input @input="onFilter" v-model="filterBy.phone" type="text" placeholder="By phone" />
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
  justify-content: start;
  gap: 10px;

  padding: 10px;
  background-color: goldenrod;
  color: whitesmoke;
  margin: 10px 10px;
}
</style>
