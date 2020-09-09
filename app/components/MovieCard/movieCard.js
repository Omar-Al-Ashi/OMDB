export default {
    props: {
        id: {
            type: String
        },
        image: {
            type: String
        },
        title: {
            type: String
        },
        rank: {
            type: String
        }
    },
    data() {
        return {}
    },
    methods: {

        /**
         * Executed when the user clicks on a movie card
         * emits to the parent
         * @param id
         */
        movieCardClicked(id) {
            this.$emit('clicked', id);
        }
    }
}
