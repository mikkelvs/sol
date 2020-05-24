<template>
    <div class="auto-resizable-iframe">
        <div v-html="content"></div>
    </div>
</template>

<script>
import PageMixin from '../mixins/Pages.js';

export default {
    name: 'VideoPlayer',
    mixins: [ PageMixin ],
    data() {
        return {
            video: null
        }
    },
    mounted() {
        this.getPage(48);
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