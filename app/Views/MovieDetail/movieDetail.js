import SelectedPageService from "../../shared/selected-page-service";

export default {
    components: {},

    mounted() {
        SelectedPageService.getInstance().updateSelectedPage("Home");
    },

    computed: {},

    props: {
        id: {type: String},
        picture: {type: String},
        rating: {type: Number},
        title: {String},
        tags: {Array},
    },

    beforeMount() {
    },

    data() {
        return {}
    },
    methods: {
        loaded() {
        },

        onDrawerButtonTap() {
            this.$navigateBack()
        }
    }
};