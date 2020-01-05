<template>

    <div>

        <h2>News</h2>





    
            <div class="news-item" v-for="(post, index) in posts" :key="index">
            <h5><i class="fas fa-skull"></i>{{ post.title.rendered }}</h5>
            <div v-html="post.content.rendered"></div>
            
                
            </div>
        

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

         $('ul').css('color', 'red');
     }
}

</script>

<style>

.news-item {
    border-bottom: 1px dashed #ffffff;
    margin-bottom: 2rem;
}

</style>