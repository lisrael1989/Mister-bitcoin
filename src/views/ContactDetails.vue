<template>
  <h1 className="contact-title">Contact Deatils</h1>
  <h2 v-if="!contact">Loading...</h2>
  <section v-else class="contact-details">
    <RouterLink to="/contact"><button className="back-btn-details">Back</button></RouterLink>

    <div class="card-client">
      <!-- <div class="user-picture">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
          ></path>
        </svg>
      </div> -->
      <img :src="`https://robohash.org/${contact._id}`" alt="contact image" />

      <h2 className="name-client">{{ contact.name }}</h2>
      <p class="name-client">
        <span className="balance-row"> 🪙 {{ contact.balance }}</span>
      </p>
      <div class="social-media">
        <a :href="'mailto:' + contact.email">
          <svg
            fill="white"
            viewBox="0 0 36 36"
            version="1.1"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <title>email-line</title>
            <path
              class="clr-i-outline clr-i-outline-path-1"
              d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM30.46,28H5.66l7-7.24-1.44-1.39L4,26.84V9.52L16.43,21.89a2,2,0,0,0,2.82,0L32,9.21v17.5l-7.36-7.36-1.41,1.41ZM5.31,8H30.38L17.84,20.47Z"
            ></path>
            <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
          </svg>
          <span class="tooltip-social">Email</span>
        </a>
        <a :href="'tel:' + contact.phone">
          <svg
            fill="#000000"
            viewBox="0 0 24 24"
            id="phone"
            data-name="Line Color"
            xmlns="http://www.w3.org/2000/svg"
            class="icon line-color"
          >
            <path
              id="primary"
              d="M21,15v3.93a2,2,0,0,1-2.29,2A18,18,0,0,1,3.14,5.29,2,2,0,0,1,5.13,3H9a1,1,0,0,1,1,.89,10.74,10.74,0,0,0,1,3.78,1,1,0,0,1-.42,1.26l-.86.49a1,1,0,0,0-.33,1.46,14.08,14.08,0,0,0,3.69,3.69,1,1,0,0,0,1.46-.33l.49-.86A1,1,0,0,1,16.33,13a10.74,10.74,0,0,0,3.78,1A1,1,0,0,1,21,15Z"
              style="
                fill: none;
                stroke: white;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 2;
              "
            ></path>
          </svg>
          <span class="tooltip-social">call me</span>
        </a>

        <a :href="'https://wa.me/' + contact.phone">
          <svg
            fill="#000000"
            viewBox="-2 -2 24 24"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin"
            class="jam jam-whatsapp"
          >
            <path
              d="M9.516.012C4.206.262.017 4.652.033 9.929a9.798 9.798 0 0 0 1.085 4.465L.06 19.495a.387.387 0 0 0 .47.453l5.034-1.184a9.981 9.981 0 0 0 4.284 1.032c5.427.083 9.951-4.195 10.12-9.58C20.15 4.441 15.351-.265 9.516.011zm6.007 15.367a7.784 7.784 0 0 1-5.52 2.27 7.77 7.77 0 0 1-3.474-.808l-.701-.347-3.087.726.65-3.131-.346-.672A7.62 7.62 0 0 1 2.197 9.9c0-2.07.812-4.017 2.286-5.48a7.85 7.85 0 0 1 5.52-2.271c2.086 0 4.046.806 5.52 2.27a7.672 7.672 0 0 1 2.287 5.48c0 2.052-.825 4.03-2.287 5.481z"
            />
            <path
              d="M14.842 12.045l-1.931-.55a.723.723 0 0 0-.713.186l-.472.478a.707.707 0 0 1-.765.16c-.913-.367-2.835-2.063-3.326-2.912a.694.694 0 0 1 .056-.774l.412-.53a.71.71 0 0 0 .089-.726L7.38 5.553a.723.723 0 0 0-1.125-.256c-.539.453-1.179 1.14-1.256 1.903-.137 1.343.443 3.036 2.637 5.07 2.535 2.349 4.566 2.66 5.887 2.341.75-.18 1.35-.903 1.727-1.494a.713.713 0 0 0-.408-1.072z"
            />
          </svg>
          <span class="tooltip-social">Whatsapp</span>
        </a>
      </div>
    </div>
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

    this.contact = await contactService.getContactById(contactId)
  },
}
</script>

<style lang="scss">
.contact-title {
  text-align: center;
  margin: 30px auto;
  font-weight: 600;
  background-color: #ea8b19;
  color: whitesmoke;
}
.balance-row {
  padding-right: 20px;
}
.back-btn-details {
  cursor: pointer;
  color: white;
  margin-left: 20px;
  height: 30px;
  width: 70px;
  border-radius: 8px;
  background-color: #333;
}
.card-client {
  margin: 0 auto;
  // background: #0d579b;
  background: #4d4d4d;
  width: 20rem;
  margin-top: 30px;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 20px;
  padding-right: 20px;
  border: 4px solid #fff;
  box-shadow: 0 6px 10px #212121;
  border-radius: 10px;
  text-align: center;
  color: #fff;
  font-family: "Poppins", sans-serif;
  transition: all 0.3s ease;
}
.card-client:hover {
  transform: translateY(-10px);
}
.user-picture {
  overflow: hidden;
  object-fit: cover;
  width: 5rem;
  height: 5rem;
  border: 4px solid #fff;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
.user-picture svg {
  width: 2.5rem;
  fill: currentColor;
}
.name-client {
  margin: 0;
  margin-top: 20px;
  font-weight: 600;
  font-size: 1.5em;
}
.name-client span {
  display: block;
  font-weight: 200;
  font-size: 16px;
}
.social-media:before {
  content: " ";
  display: block;
  width: 100%;
  height: 2px;
  margin: 20px 0;
  background: #fff;
}
.social-media a {
  position: relative;
  margin-right: 15px;
  text-decoration: none;
  color: inherit;
}
.social-media a:last-child {
  margin-right: 0;
}
.social-media a svg {
  width: 1.1rem;
  fill: currentColor;
}
/*-- Tooltip Social Media --*/
.tooltip-social {
  background: #262626;
  display: block;
  position: absolute;
  bottom: 0;
  left: 50%;
  padding: 0.5rem 0.4rem;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: 600;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -90%);
  transition: all 0.2s ease;
  z-index: 1;
}
.tooltip-social:after {
  content: " ";
  position: absolute;
  bottom: 1px;
  left: 50%;
  border: solid;
  border-width: 10px 10px 0 10px;
  border-color: transparent;
  transform: translate(-50%, 100%);
}
.social-media a .tooltip-social:after {
  border-top-color: #262626;
}
.social-media a:hover .tooltip-social {
  opacity: 1;
  transform: translate(-50%, -130%);
}
</style>
