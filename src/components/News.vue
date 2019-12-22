<template>

    <div>

        <h1>News</h1>



        <ul>
            <li v-for="(post, index) in posts" :key="index">{{ post.title.rendered }}</li>
        </ul>

    </div>

    

</template>

<script>
import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

export default {
    name: 'News',
    data() {
        return {
            posts: []
        }
    },
     mounted() {
         const vm = this;
         console.log('LORT', process.env.VUE_APP_API_BASE_URL);

         axios.get('/wp/v2/posts').then((response) => {
             vm.posts = response.data;
         });
     }
}

</script>