<template>
  <header class="app-header">
    <div class="logo-section">
      <RouterLink to="/">
        <h2 class="logo">🪙Mr. Bitcoin</h2>
      </RouterLink>
    </div>
    <div><p>Hello ,Israel Litvak</p></div>
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

.logo {
  font-weight: 600;
  color: black;
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
  color: #ea8b19;
}

nav a:hover {
  background-color: lightyellow;
}

nav a:first-of-type {
  border: 0;
}
</style>
