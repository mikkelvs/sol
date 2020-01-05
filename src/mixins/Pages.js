import axios from 'axios';

export default {
    name: 'PagesMixin',
    data() {
        return {
            title: null,
            content: null
        }
    },
    methods: {
        getPage(id) {
            const vm = this;

            axios.get('/wp/v2/pages/' + id).then((response) => {
                console.log('LIVE', response);
                vm.title = response.data.title.rendered;
                vm.content = response.data.content.rendered;
    
            });
        }
    }
}

