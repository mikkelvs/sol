<template>

    <div class="bio">

        <h1>{{ title }}</h1>

        <div v-html="content"></div>

    </div>
</template>

<script>
import PageMixin from '../mixins/Pages.js';

export default {
    name: 'Press',
    mixins: [ PageMixin ],
    mounted() {
        this.getPage(12);
    }
}

</script>