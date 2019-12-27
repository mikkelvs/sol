<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <button class="button">Test</button>
      <i class="fas fa-camera"></i>
      <pre>HEJ</pre>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

@import "~foundation-sites/scss/foundation";
@include foundation-everything;

$fa-font-path: "/webfonts";
@import "~@fortawesome/fontawesome-free/scss/fontawesome.scss";
@import "~@fortawesome/fontawesome-free/scss/solid.scss";


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@font-face {
  font-family: InriaSerif;
  src: url(../public/webfonts/InriaSerif-Regular.ttf);
}

@font-face {
  font-family: MaShanZhengRegular;
  src: url(../public/webfonts/MaShanZheng-Regular.ttf);
}

h1 {
  color: blue;
  font-family: MaShanZhengRegular;
}

</style>
