import moment from 'moment';

export default {
    name: 'Posts',
    data() {
        return {
            posts: []
        }
    },
    methods: {
        parseDate(date) {
            return moment(date).format('DD/MM/YYYY');
        }
    }
}