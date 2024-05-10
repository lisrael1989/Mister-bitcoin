<template>
  <h2>Add Contact</h2>
  <h2 v-if="!contact">Loading...</h2>
  <form v-else @submit.prevent="save" class="contact-edit">
    <input v-model="contact.name" type="text" placeholder="name" />
    <input v-model="contact.email" type="email" placeholder="email" />
    <input v-model="contact.phone" type="text" placeholder="phone" />
    <button class="save-contact-btn">Save</button>
  </form>
</template>

<script>
import { contactService } from "@/services/contact.service"
import { showSuccessMsg } from "@/services/event-bus.service"

export default {
  data() {
    return {
      contact: null,
    }
  },
  methods: {
    async save() {
      await contactService.saveContact(this.contact)
      showSuccessMsg("contact saved.")
      this.$router.push("/contact")
    },
  },
  async created() {
    const contactId = this.$route.params.contactId
    if (contactId) {
      try {
        this.contact = await contactService.getContactById(contactId)
      } catch (err) {
        console.error(err)
        this.contact = contactService.getEmptyContact()
      }
    } else {
      this.contact = contactService.getEmptyContact()
    }
  },
}
</script>

<style lang="scss">
.contact-edit {
  display: grid;
  justify-items: start;
  gap: 10px;

  padding: 10px;
  background-color: rgb(245, 224, 145);

  & .save-contact-btn {
    place-self: end;
    background-color: #333;
    color: whitesmoke;
    cursor: pointer;
  }
}
</style>
