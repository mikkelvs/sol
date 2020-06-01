<template>
  <div class="home" v-cloak>

    <h1>{{ title }}
    </h1>

    <div class="grid-x grid-margin-x">

      <div class="cell medium-6">

        <div v-html="content"></div>

        <div class="grid-x grid-margin-x">
          <div class="cell large-3">
            <a class="button btn-social" href="https://www.facebook.com/stormtroopersoflove/"><i
                class="fab fa-facebook-square"></i> Facebook</a>
          </div>
          <div class="cell large-3">
            <a class="button btn-social" href="https://www.instagram.com/stormtroopersoflove/"><i
                class="fab fa-instagram"></i> Instagram</a>
          </div>
          <div class="cell large-3">
            <a class="button btn-social" href="https://stormtroopersoflove.bandcamp.com/"><i
                class="fab fa-bandcamp"></i> Webshop</a>
          </div>
          <div class="cell large-3">
            <a class="button btn-social" href="https://www.youtube.com/channel/UC23uwjz1epS2WBEwccSEDQw"><i class="fab fa-youtube"></i> YouTube</a>
          </div>
        </div>

        <news />

      </div>

      <div class="cell medium-6">

        <video-player />

        <div class="bandcamp-container">
          <iframe
            src="https://bandcamp.com/EmbeddedPlayer/album=3111490631/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
            seamless><a href="http://stormtroopersoflove.bandcamp.com/album/death-rattle-and-roll">Death, Rattle and
              Roll by Stormtroopers of Love</a></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import News from '@/components/News.vue';
import VideoPlayer from '@/components/VideoPlayer.vue';
import PageMixin from '../mixins/Pages';

export default {
  name: 'home',
  components: {
    News,
    VideoPlayer
  },
  mixins: [PageMixin],
  mounted() {
    this.getPage(28);
  }
}
</script>

<style lang="scss">
.bandcamp-container {
  iframe {
    border: 0;
    width: 100%;
    min-height: 470px;
  }
}
</style>
