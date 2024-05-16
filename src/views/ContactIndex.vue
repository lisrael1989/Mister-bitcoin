<template>
  <ContactFilter @filter="onFilter" />
  <RouterLink to="/contact/edit"><button class="add-contact-btn">Add a contact</button></RouterLink>

  <ContactList @remove="remove" :contacts="contacts" />
</template>

<script>
import { contactService } from "../services/contact.service.js"
import ContactList from "@/cmps/ContactList.vue"
import ContactFilter from "@/cmps/ContactFilter.vue"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"

export default {
  data() {
    return {
      contacts: [],
    }
  },
  async created() {
    this.contacts = await contactService.getContacts()
  },
  methods: {
    async remove(contactId) {
      try {
        await contactService.deleteContact(contactId)
        const idx = this.contacts.findIndex((contact) => contact._id === contactId)
        this.contacts.splice(idx, 1)
        showSuccessMsg(`contact ${contactId} deleted`)
      } catch (err) {
        showErrorMsg("Cant delete contact")
      }
    },
    async onFilter(filterBy) {
      this.contacts = await contactService.getContacts(filterBy)
    },
  },
  components: {
    ContactFilter,
    ContactList,
  },
}
</script>

<style lang="scss">
.contacts-title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.add-contact-btn {
  margin: 10px 10px 10px;
  background-color: #333;
  color: whitesmoke;
  padding: 5px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
