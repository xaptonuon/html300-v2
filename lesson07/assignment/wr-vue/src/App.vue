<template>
  <!-- Put header here so that it appears above navbar on each page  -->
  <header>
    <h1 id="h1"></h1>
  </header>
  <!-- navbar links  -->
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/travel">Travel</router-link> |
    <router-link to="/safety">Safety</router-link> |
    <router-link to="/activities">Activities</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import '@/sass/components.content';
@import '@/sass/base.normalize';
@import '@/sass/settings.responsive';
@import '@/sass/styles.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: #1c337d; /* Navigation color */
}

nav a.router-link-exact-active {
  color: #fff;
}

</style>