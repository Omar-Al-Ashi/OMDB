export default {
    props: {
        id: {
            type: String
        },
        picture: {
            type: String
        },
        title: {
            type: String
        },
        rating: {
            type: Number
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
