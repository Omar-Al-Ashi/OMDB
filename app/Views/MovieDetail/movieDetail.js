import SelectedPageService from "../../shared/selected-page-service";

export default {
    components: {},

    mounted() {
        SelectedPageService.getInstance().updateSelectedPage("Home");
    },

    props: {
        id: {type: String},
        image: {type: String},
        rank: {type: Number},
        imDbRating: {type: Number},
        title: {type: String},
        crew: {type: String,},
        year: {type: String,},
        imDbRatingCount: {type: String,},
        tags: {type: Array},
    },

    beforeMount() {
    },

    computed: {},

    data() {
        return {
            crewMembers: []
        }
    },
    methods: {
        loaded() {
            this.crewMembers = this.crew.split(',');
        },

        onDrawerButtonTap() {
            this.$navigateBack()
        }
    }
};
