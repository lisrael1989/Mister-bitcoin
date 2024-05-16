<template>
  <img :src="`https://robohash.org/${contact._id}`" alt="contact image" class="contact-image" />

  <h2>{{ contact.name }}</h2>
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
