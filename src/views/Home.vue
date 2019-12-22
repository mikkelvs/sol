<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
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
  }
}
</script>
