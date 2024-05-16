<template>
  <h2>{{ contact.name }}</h2>
  <!-- <p>{{ contact.email }}</p>
  <p>{{ contact.phone }}</p> -->
  <h3>🪙{{ contact.balance }}</h3>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.contact-preview {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.contact-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}
</style>
