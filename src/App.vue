<template>
  <div id="app">

    <div id="logo">
      <a href="/"><img src="./assets/logo_transparent.png"></a>
    </div>


    <div id="body">

      <div class="grid-container">

        <div class="grid-x grid-margin-x">

          <div class="cell">

            <div id="nav">
              <router-link to="/"><i class="fas fa-book-dead"></i> Bio</router-link>
              <router-link to="/about"><i class="fas fa-music"></i> Live</router-link>
              <router-link to="/shows"><i class="fas fa-record-vinyl"></i> Media</router-link>
              <router-link to="/shows"><i class="fas fa-file-download"></i> Press &amp; Booking</router-link>
            </div>

          </div>

          <div class="cell">

            <transition name="fade">
              <router-view />
            </transition>

          </div>
        </div>


      </div>
    </div>

    <footer>

      <div class="grid-container">

 <h3>Stormtroopers Of Love</h3>

        <div class="cell medium-4">
         <h4>Booking</h4>
         sdsaafafadffa
        </div>
        <div class="cell medium-4"></div>
        <div class="cell medium-4"><img src="./assets/hola_pete_records.png"></div>
      </div>

    </footer>

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
@include foundation-button;
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
@import "~@fortawesome/fontawesome-free/scss/brands.scss";

$background-color-top: #000000;
$background-color-bottom: #222222;
$text-color: #ffffff;
$nav-color: #ffffff;
$brand-background-color: #280349;;
$brand-color-main: #00ed00;
$brand-color-secondary: mediumvioletred;
$footer-background-color: #000000;
$footer-header-color: #777777;


html,
body {
  height: 100%;
  
}

#app {
  //font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: 'Courier Prime', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: $text-color;
  //background-color: $background-color-top;
  
  //background-attachment: fixed;
  
  
  
  height: 100%;

  @include breakpoint(medium) {
    //background-size: 100%;
}



  #logo {
    text-align: center;
    padding-top: 2rem;
    width: 100%;
    background-color: $brand-background-color;
    background-image: url('./assets/bg.png');
    background-position: bottom;
    background-repeat: no-repeat;

    img {
      max-width: 10rem;
    }

  }
}

// fonts
@import url('https://fonts.googleapis.com/css?family=Bangers&display=swap');
@import url('https://fonts.googleapis.com/css?family=Courier+Prime&display=swap');
@import url('https://fonts.googleapis.com/css?family=Londrina+Solid&display=swap');

#nav {
  padding: 1rem;
text-align: center;
  font-family: 'Bangers', cursive;

  a {
    font-weight: bold;
    color: $nav-color;
    margin-right: 1rem;
    font-size: 1rem;

    @include breakpoint(medium) {
    margin-right: 3rem;
}

    &:last-of-type {
      margin-right: auto;
    }

    .fas {
      color: lightgreen;
      margin-right: 0.2rem;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#body {
  width: 100%;
  background: linear-gradient($background-color-top, $background-color-bottom);
  padding-bottom: 2rem;
}

@font-face {
  font-family: InriaSerif;
  src: url(./assets/fonts/InriaSerif-Regular.ttf);
}

@font-face {
  font-family: MaShanZhengRegular;
  src: url(./assets/fonts/MaShanZheng-Regular.ttf);
}

h1, h2, h3, h4, h5, h6 {
  color: $brand-color-main;
  font-family: 'Bangers', cursive;
}

h2 {
  margin-top: 2rem;
}

h1 {
  
  //text-align: center;
  margin-bottom: 1rem;
}

h5 {
  color: $brand-color-secondary;
  font-family: 'Londrina Solid', cursive;

  .fas {
    color: #85c1ca;
    margin-right: 0.5em;
  }
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

.btn-social {
  border-radius: 5px;
  background-color: $brand-color-secondary;
  font-family: 'Bangers', cursive;
  width: 100%;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);



  .fab {
      margin-right: 0.2rem;
    }
}

footer {
  float:left;
  width: 100%;
  background-color: $footer-background-color;
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: $text-color;

  h1, h2, h3, h4, h5, h6 {
    color: $footer-header-color;
  }
}

</style>
