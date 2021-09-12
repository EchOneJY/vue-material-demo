<template>
  <div id="app">
    <div class="app-container" :class="{ 'nav-open': NavbarStore.showNavbar }">
      <router-view name="header" />
      <div class="app-content">
        <router-view />
      </div>
      <router-view name="footer" />
    </div>
  </div>
</template>
