<template>
    <div class="auto-resizable-iframe">
        <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9Ox3ValuuO4" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'VideoPlayer',
    data() {
        return {
            video: null
        }
    },
    mounted() {
        this.setvideo();
    },
    methods: {
        setvideo() {
            const vm = this;

            axios.get('/wp/v2/posts/44').then((response) => {
                vm.video = response.data.content.rendered;
            });
        }
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

</style>