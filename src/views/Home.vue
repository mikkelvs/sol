<template>
  <div class="home" v-cloak>
    <video id="myVideo" width="100%" autoplay muted>
      <source src="../assets/hero_compressed.mp4" type="video/mp4" />
    </video>
    <news />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import News from '@/components/News.vue';

export default {
  name: 'home',
  components: {
    News
  },
  mounted() {
    var vid = document.getElementById("myVideo");
    vid.playbackRate = 0.5; 
  }
}
</script>
