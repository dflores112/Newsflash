<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <nav class="mobile-menu">
      <RouterLink to="/"><img class="nav-icon" src="./assets/menu.png"/></RouterLink>
    </nav>
    <div class="wrapper">
      <!-- <img alt="Vue logo" class="logo" src="https://i.ibb.co/jGfSQX4/logo-no-background.png" width="125" height="" /> -->
      <!-- <h1>NEWSFLASH</h1>
      <HelloWorld /> -->
      <nav class="desktop-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <nav class="mobile-nav">
    <RouterLink to="/"><img class="nav-icon" src="./assets/home.png"/></RouterLink>
    <RouterLink to="/"><img class="nav-icon" src="./assets/discover.png"/></RouterLink>
    <RouterLink to="/about"><img class="nav-icon" src="./assets/profile.png"/></RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>
.nav-icon{
  /* height:16px; */
  width:16px;
  
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.mobile-nav {
  background-color: var(--color-background-soft);
  z-index: 1;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display:flex;
  justify-content: space-around;
}

.mobile-menu {
  margin-top:0px;
  
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  font-size: 12px;
  text-align: start;
  /* margin-top: 2rem; */
  padding:8px 0 8px 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  /* padding: 0 1rem; */
  /* border-left: 1px solid var(--color-border); */
}

nav a:first-of-type {
  border: 0;
}

@media (max-width: 767px) {
  .desktop-nav {
    display: none;
    /* or any other style rules */
  }
}

@media (min-width: 1024px) {
  .desktop-nav {
    display: block
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    /* margin: 0 2rem 0 0; */
    margin: 0 0 1rem 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
