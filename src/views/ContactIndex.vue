<template>
  <h2 class="contacts-title">Contacts List</h2>
  <ContactFilter @filter="onFilter" />
  <RouterLink to="/contact/edit"><button class="add-contact-btn">Add a contact</button></RouterLink>
  <ContactList @remove="remove" :contacts="contacts" />
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import { contactService } from "../services/contact.service.js"
import ContactList from "@/cmps/ContactList.vue"
import ContactFilter from "@/cmps/ContactFilter.vue"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"

export default {
  computed: {
    ...mapGetters({
      contacts: "getContacts",
    }),
  },
  async created() {
    this.contacts = await contactService.getContacts()
  },
  methods: {
    ...mapActions(["loadContacts", "deleteContact"]),
    async removeContact(contactId) {
      try {
        this.deleteContact(contactId)
        showSuccessMsg("Contacts deleted:", contactId)
      } catch {
        showErrorMsg("Couldn't delete contact", err)
      }
    },
    onFilter(filterBy) {
      this.loadContacts(filterBy)
    },
  },
  // async onFilter(filterBy) {
  //   this.contacts = await contactService.getContacts(filterBy)
  // },

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
  margin: 5px 10px;
  background-color: #333;
  color: whitesmoke;
  padding: 5px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
