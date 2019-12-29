<template>
    <div class="shows" v-cloak>
        <h1>{{ title }}</h1>

        <div v-html="content"></div>
    </div>
</template>

<script>
import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

export default {
    name: 'Shows',
    data() {
        return {
            title: null,
            content: null
        }
    },
    mounted() {
        const vm = this;

        axios.get('/wp/v2/pages/6').then((response) => {
            console.log('SHOWS', response);
            vm.title = response.data.title.rendered;
            vm.content = response.data.content.rendered;

        });
    }
}
</script>