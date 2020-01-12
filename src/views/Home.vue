<template>
  <div class="home" v-cloak>

    <h1>{{ title }}
    </h1>

<div class="grid-x grid-margin-x">

<div class="cell medium-6">

  <p>
    Once again, we rise from the dead-end streets of Copenhagen! You know us from our old gangs The Defectors, Johnny Nightmare, The Wrecking Dead, and Parzival. Now we're back to play that sweet and rotten Danish psychobilly once more!
  </p>

  <div class="grid-x grid-margin-x">
    <div class="cell large-3">
      <a class="button btn-social" href="https://www.facebook.com/stormtroopersoflove/"><i class="fab fa-facebook-square"></i> Facebook</a>
    </div>
    <div class="cell large-3">
      <a class="button btn-social" href="https://www.instagram.com/stormtroopersoflove/"><i class="fab fa-instagram"></i> Instagram</a>
    </div>
<div class="cell large-3">
      <a class="button btn-social" href="https://stormtroopersoflove.bandcamp.com/"><i class="fab fa-bandcamp"></i> BandCamp</a>
    </div>
    <div class="cell large-3">
      <a class="button btn-social" href="https://www.youtube.com/channel/
            UC23uwjz1epS2WBEwccSEDQw"><i class="fab fa-youtube"></i> YouTube</a>
    </div>
  </div>

  <news />

</div>

<div class="cell medium-6">

<div class="auto-resizable-iframe">
    <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/9Ox3ValuuO4" frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>

<div class="bandcamp-container">
<iframe src="https://bandcamp.com/EmbeddedPlayer/album=3111490631/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="http://stormtroopersoflove.bandcamp.com/album/death-rattle-and-roll">Death, Rattle and Roll by Stormtroopers of Love</a></iframe>
</div>
</div>


</div>

    <!-- <video id="myVideo" width="100%" autoplay muted>
      <source src="../assets/hero_compressed.mp4" type="video/mp4" />
    </video> -->
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import News from '@/components/News.vue';
import PageMixin from '../mixins/Pages';

export default {
  name: 'home',
  components: {
    News
  },
  mixins: [ PageMixin ],
  mounted() {
        this.getPage(28);
    }
}
</script>

<style lang="scss">
.auto-resizable-iframe {
  max-width: 420px;
  margin: 0 auto 2rem auto;
}

.auto-resizable-iframe > div {
  position: relative;
  padding-bottom: 75%;
  height: 0px;
}

.auto-resizable-iframe iframe {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}

.bandcamp-container {
  

  iframe {
    border: 0;
    width: 100%;
    min-height: 470px;
  }
}

</style>
