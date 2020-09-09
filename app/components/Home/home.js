import * as utils from "~/shared/utils";
import SelectedPageService from "../../shared/selected-page-service";
import generatedData from "../../../moviesData.json"
import movieCard from "../movieCard";
import movieDetail from "../../Views/movieDetail";

export default {
    components: {
        "movieCard": movieCard
    },

    mounted() {
        SelectedPageService.getInstance().updateSelectedPage("Home");
    },

    beforeMount() {
        this.isLoading = true;
        this.getMoviesData((movies) => {
            this.items = movies
        })
    },

    data() {
        return {
            items: null,
            isLoading: false
        }
    },
    methods: {
        loaded() {

        },

        getMoviesData(callback) {
            setTimeout(() => {
                this.isLoading = false;
                callback(generatedData)
            }, 1500)
        },

        movieCardClicked(id) {
            let movieData = this.getSpecificMovieInfo(id);

            this.$navigateTo(movieDetail, {
                props: {
                    id: movieData.id,
                    picture: movieData.picture,
                    rating: movieData.rating,
                    title: movieData.title,
                    tags: movieData.tags,
                }
            })
        },

        getSpecificMovieInfo(id){
            let movieItem = null;
            this.items.forEach(item => {
                if (item.id === id) {
                    movieItem = item
                }
            });
            return movieItem
        },

        onDrawerButtonTap() {
            utils.showDrawer();
        }
    }
};
