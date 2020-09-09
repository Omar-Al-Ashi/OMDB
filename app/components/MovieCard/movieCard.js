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
        movieCardClicked(id) {
            this.$emit('clicked', id);
        }
    }
}
