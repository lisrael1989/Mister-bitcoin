<template>
  <section class="contact-list">
    <ul>
      <li v-for="contact in contacts" :key="contact._id">
        <ContactPreview :contact="contact" />
        <div class="actions">
          <RouterLink :to="`/contact/${contact._id}`">
            <button class="contacts-btn" title="Contact-Details">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                width="20px"
                height="20px"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-6h2v6zm0-8h-2V7h2v4z"
                />
              </svg>
            </button>
          </RouterLink>
          <RouterLink :to="`/contact/edit/${contact._id}`">
            <button class="contacts-btn" title="Edit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                width="20px"
                height="20px"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                />
              </svg>
            </button>
          </RouterLink>
          <button class="contacts-btn" title="Remove" @click="onRemove(contact._id)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              width="20px"
              height="20px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"
              />
            </svg>
          </button>
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
