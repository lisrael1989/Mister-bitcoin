<template>
  <header class="app-header">
    <div class="logo-section">
      <!-- <img src="@/assets/Mr_Bitcoin_Logo.png" alt="Mr Bitcoin Logo" /> -->
      <h2>🪙Mr. Bitcoin</h2>
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/contact">Contacts</RouterLink>
      <RouterLink to="/Statistics">Statistics</RouterLink>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

h2 {
  font-weight: 600;
}
.logo-section {
  display: flex;
}
img {
  width: 50px;
  border-radius: 50%;
}
nav a.router-link-exact-active {
  color: var(--color-text);
  font-weight: 600;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
