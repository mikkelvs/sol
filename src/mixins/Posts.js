

import moment from 'moment';

export default {
    name: 'Posts',
    data() {
        return {
            posts: []
        }
    },
    mounted() {
        console.log(moment);
    },
    methods: {
        parseDate(date) {
            return moment(date).format('DD/MM/YYYY');
        }
    }
}