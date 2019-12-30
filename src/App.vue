<template>
  <div id="app">

    <div id="logo">
      <a href="/"><img src="./assets/logo_transparent.png"></a>
    </div>

    
    <div id="body">

<div id="nav">
      <router-link to="/"><i class="fas fa-skull"></i> Home</router-link>
      <router-link to="/about"><i class="fas fa-skull"></i> About</router-link>
      <router-link to="/shows"><i class="fas fa-skull"></i> Shows</router-link>
    </div>

<transition name="fade">
    <router-view/>
    </transition>
    </div>
  </div>
</template>

<style lang="scss">

@import "~foundation-sites/scss/foundation";

// Global styles
@include foundation-global-styles;
@include foundation-forms;
@include foundation-typography;

// Grids (choose one)
@include foundation-xy-grid-classes;
// @include foundation-grid;
// @include foundation-flex-grid;

// Generic components
// @include foundation-button;
// @include foundation-button-group;
// @include foundation-close-button;
// @include foundation-label;
// @include foundation-progress-bar;
// @include foundation-slider;
// @include foundation-switch;
// @include foundation-table;
// Basic components
// @include foundation-badge;
// @include foundation-breadcrumbs;
// @include foundation-callout;
// @include foundation-card;
// @include foundation-dropdown;
// @include foundation-pagination;
// @include foundation-tooltip;

// Containers
// @include foundation-accordion;
// @include foundation-media-object;
// @include foundation-orbit;
// @include foundation-responsive-embed;
// @include foundation-tabs;
// @include foundation-thumbnail;
// Menu-based containers
// @include foundation-menu;
// @include foundation-menu-icon;
// @include foundation-accordion-menu;
// @include foundation-drilldown-menu;
// @include foundation-dropdown-menu;

// Layout components
// @include foundation-off-canvas;
// @include foundation-reveal;
// @include foundation-sticky;
// @include foundation-title-bar;
// @include foundation-top-bar;

// Helpers
// @include foundation-float-classes;
// @include foundation-flex-classes;
// @include foundation-visibility-classes;
// @include foundation-prototype-classes;

$fa-font-path: "./assets/fonts";
@import "~@fortawesome/fontawesome-free/scss/fontawesome.scss";
@import "~@fortawesome/fontawesome-free/scss/solid.scss";

$background-color-top: #000000;
$background-color-bottom: #2c3e50;
$text-color: #ffffff;
$nav-color: #ffffff;

html,
body {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color;
  background-color: $background-color-bottom;
  height: 100%;

  #logo {
    padding-top: 2rem;
    width: 100%;
    background-color: $background-color-top;

    img {
      max-width: 10rem;
    }

  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $nav-color;
    margin-right: 5rem;

    &:last-of-type {
      margin-right: auto;
    }

    .fas {
      color: #2c3e50;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#body {
  width: 100%;
  background: linear-gradient($background-color-top, $background-color-bottom);
}

@font-face {
  font-family: InriaSerif;
  src: url(./assets/fonts/InriaSerif-Regular.ttf);
}

@font-face {
  font-family: MaShanZhengRegular;
  src: url(./assets/fonts/MaShanZheng-Regular.ttf);
}

h1 {
  color: $text-color;
  font-family: MaShanZhengRegular;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

[v-cloak] {
  display: none;
}

</style>
