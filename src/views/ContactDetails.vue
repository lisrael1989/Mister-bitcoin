<template>
  <h2 v-if="!contact">Loading...</h2>
  <section v-else class="contact-details">
    <h2>{{ contact.name }}</h2>
    <h2>{{ contact.email }}</h2>
    <h2>{{ contact.phone }}</h2>
    <RouterLink to="/contact"><button>Back</button></RouterLink>
  </section>
</template>

<script>
import { contactService } from "@/services/contact.service.js"

export default {
  data() {
    return {
      contact: null,
    }
  },
  async created() {
    const { contactId } = this.$route.params

    this.contact = await contactService.get(contactId)
  },
}
</script>

<style lang="scss"></style>
