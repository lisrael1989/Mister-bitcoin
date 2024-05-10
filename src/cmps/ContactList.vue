<template>
  <section class="contact-list">
    <ul>
      <li v-for="contact in contacts" :key="contact._id">
        <ContactPreview :contact="contact" />
        <div class="actions">
          <RouterLink :to="`/contact/${contact._id}`"
            ><button class="contacts-btn">Details</button></RouterLink
          >
          <RouterLink :to="`/contact/edit/${contact._id}`"
            ><button class="contacts-btn">Edit</button></RouterLink
          >
          <button class="contacts-btn" @click="onRemove(contact._id)">🗑️</button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import ContactPreview from "../cmps/ContactPreview.vue"

export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onRemove(contactId) {
      this.$emit("remove", contactId)
    },
  },
  components: {
    ContactPreview,
  },
}
</script>

<style lang="scss">
.contact-list ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 10px;

  list-style: none;
  padding: 10px;
}

.contact-list li {
  display: grid;
  padding: 10px;
  cursor: pointer;
  background-color: #333;
  color: whitesmoke;
  border-radius: 8px;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.434);

  .actions {
    margin-top: 20px;
    align-items: center;
    cursor: pointer;

    & .contacts-btn {
      background-color: goldenrod;
      color: whitesmoke;
      cursor: pointer;
    }
  }
}
</style>
