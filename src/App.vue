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
              <router-link to="/bio"><i class="fas fa-book-dead"></i> Bio</router-link>
              <router-link to="/live"><i class="fas fa-music"></i> Live</router-link>
              <router-link to="/media"><i class="fas fa-record-vinyl"></i> Media</router-link>
              <router-link to="/press"><i class="fas fa-file-download"></i> Press &amp; Booking</router-link>
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

        <div class="grid-x grid-margin-x">

          <div class="cell medium-6 footer-column">
            <h4>Booking</h4>

            <div class="grid-x">
              <div class="cell small-1 footer-icon"><i class="fas fa-at"></i></div>
              <div class="cell small-11"><a
                  href="mailto:booking@stormtroopersoflove.dk">Booking</a></div>
              <div class="cell small-1 footer-icon"><i class="fas fa-home"></i></div>
              <div class="cell small-11"><a href="http://www.stormtroopersoflove.dk">Web</a>
              </div>
              <div class="cell small-1 footer-icon"><i class="fab fa-facebook-square"></i></div>
              <div class="cell small-11"><a
                  href="https://www.facebook.com/stormtroopersoflove/">Facebook</a></div>
              <div class="cell small-1 footer-icon"><i class="fab fa-instagram"></i></div>
              <div class="cell small-11"><a
                  href="https://www.instagram.com/stormtroopersoflove/">Instagram</a></div>
              <div class="cell small-1 footer-icon"><i class="fab fa-youtube"></i></div>
              <div class="cell small-11"><a href="https://www.youtube.com/channel/UC23uwjz1epS2WBEwccSEDQw">YouTube</a></div>
              <div class="cell small-1 footer-icon"><i class="fab fa-bandcamp"></i></div>
              <div class="cell small-11"><a
                  href="https://stormtroopersoflove.bandcamp.com/">Bandcamp</a></div>
            </div>

          </div>
          <div class="cell medium-3 small-6 footer-column">
            <h4>Label</h4>
            <p>
              <strong>Stormtroopers Of Love</strong> is proudly presented by
              <a href="https://www.discogs.com/label/252520-Hola-Pete-Records">Hola Pete Records</a>
            </p>

          </div>
          <div class="cell medium-3 small-6 footer-column">
            <img src="./assets/hola_pete_records.png"></div>

        </div>
      </div>

    </footer>

  </div>
</template>

<style lang="scss">

// settings
$background-color-top: #000000;
$background-color-bottom: #222222;
$text-color: #ffffff;
$nav-color: #ffffff;
$brand-background-color: #280349;
$brand-color-main: #00ed00;
$brand-color-secondary: mediumvioletred;
$footer-background-color: #000000;
$footer-header-color: #777777;
$header-font: 'Bangers',
cursive;
$secondary-header-font: 'Bangers',
cursive;
$header-icon-color: #85c1ca;

@import './scss/_settings';
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
@include foundation-visibility-classes;
// @include foundation-prototype-classes;

$fa-font-path: "./assets/fonts";
@import "~@fortawesome/fontawesome-free/scss/fontawesome.scss";
@import "~@fortawesome/fontawesome-free/scss/solid.scss";
@import "~@fortawesome/fontawesome-free/scss/brands.scss";

// fonts
@font-face {
  font-family: 'Bangers';
  src: url('./assets/fonts/Bangers-Regular.ttf');
}

@font-face {
  font-family: 'Lato';
  src: url('./assets/fonts/Lato-Regular.ttf');
}

html,
body {
  height: 100%;

}

#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
  height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: $brand-color-main;
  font-family: $header-font;
}

h1 {
  margin-bottom: 1rem;
}

h1,
h2,
h3 {
  text-shadow: 1px 1px #fff;
}

h2 {
  margin-top: 2rem;
}

h5 {
  color: $brand-color-secondary;
  font-family: $secondary-header-font;

  .fas {
    color: $header-icon-color;
    margin-right: 0.5em;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

[v-cloak] {
  display: none;
}

.btn-social {
  border-radius: 5px;
  font-family: $header-font;
  width: 100%;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);

  .fab {
    margin-right: 0.2rem;
  }
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

    @include breakpoint(medium) {
      max-width: 20rem;
    }
  }
}

#nav {
  padding: 1rem;
  text-align: center;
  font-family: $header-font;

  a {
    font-weight: bold;
    color: $nav-color;
    margin-right: 1rem;
    font-size: 1rem;

    @include breakpoint(medium) {
      margin-right: 3rem;
      font-size: 1.5rem;
    }

    &:last-of-type {
      margin-right: auto;
    }

    .fas {
      color: $brand-color-secondary;
      margin-right: 0.2rem;
    }

    &.router-link-exact-active {
      color: $brand-color-main;
    }
  }
}

#body {
  width: 100%;
  background: linear-gradient($background-color-top, $background-color-bottom);
  padding-bottom: 2rem;
}

footer {
  float: left;
  width: 100%;
  background-color: $footer-background-color;
  padding-top: 2rem;

  color: $text-color;

  @include breakpoint(medium) {
    padding-bottom: 2rem;
  }

  h4 {
    color: $footer-header-color;
    font-family: $secondary-header-font;
  }

  .footer-column {
    margin-bottom: 2rem;

    @include breakpoint(medium) {
      margin-bottom: auto;
    }
  }

  .footer-icon {
    text-align: left;
  }
}

</style>
