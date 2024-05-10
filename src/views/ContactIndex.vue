<template>
  <h1>Contacts</h1>
  <RouterLink to="/contact/edit"><button>Add a contact</button></RouterLink>
  <!-- <contactFilter @filter="onFilter" /> -->
  <ContactList @remove="removecontact" :contacts="contacts" />
</template>

<script>
import { contactService } from "@/services/contact.service.js"
import contactList from "./cmps/ContactList.vue"
import contactFilter from "../cmps/ContactFilter.vue"
import { eventBusService, showErrorMsg, showSuccessMsg } from "@/services/event-bus.service"

export default {
  data() {
    return {
      contacts: [],
    }
  },
  async created() {
    this.contacts = await contactService.query()
  },
  methods: {
    async removecontact(contactId) {
      try {
        await contactService.remove(contactId)

        const idx = this.contacts.findIndex((contact) => contact._id === contactId)
        this.contacts.splice(idx, 1)

        // eventBusService.emit('show-user-msg', { txt: `contact ${contactId} deleted`, type: 'success', timeout: 4000 })
        showSuccessMsg(`contact ${contactId} deleted`)
      } catch (err) {
        showErrorMsg("Couldnt delete contact")
      }
    },
    async onFilter(filterBy) {
      this.contacts = await contactService.query(filterBy)
    },
  },
  components: {
    contactList,
    contactFilter,
  },
}
</script>

<style lang="scss"></style>
