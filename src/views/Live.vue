<template>
    <div class="live" v-cloak>
        <h1>{{ title }}</h1>

        <div v-html="content"></div>

        <div class="news-item" v-for="(post, index) in posts" :key="index">
            <pre>{{  }}</pre>
            <h5><i class="fas fa-skull"></i>{{ parseDate(post.date)}}: {{ post.title.rendered }}</h5>
            
            <div v-html="post.content.rendered"></div>
            
                
            </div>
    </div>
</template>

<script>
import axios from 'axios';
import PageMixin from '../mixins/Pages.js';
import PostsMixin from  '../mixins/Posts.js';

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

export default {
    name: 'Shows',
    mixins: [ PageMixin, PostsMixin ],
    data() {
        return {
            title: null,
            content: null
        }
    },
    mounted() {


         const vm = this;

         axios.get('/wp/v2/posts?categories=3').then((response) => {
             vm.posts = response.data;
         });


this.getPage(8);
    }
}
</script>