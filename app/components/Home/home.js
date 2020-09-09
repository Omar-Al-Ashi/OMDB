import * as utils from "~/shared/utils";
import SelectedPageService from "../../shared/selected-page-service";
import generatedData from "../../../moviesData.json"
import movieCard from "../movieCard";
import movieDetail from "../../Views/movieDetail";
import API from '../../services/API'

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
            this.movieItems = movies
        })
    },

    data() {
        return {
            movieItems: null,
            isLoading: false
        }
    },
    methods: {
        loaded() {
        },

        /**
         * Simulates getting data from an API and returns the data as a callback
         * @param callback
         */
        getMoviesData(callback) {

            API.getMostPopularMovies({}, (moviesList) => {
                this.isLoading = false;
                callback(moviesList.items)
            });
        },

        /**
         * Executed whenever the user clicks on a card
         * It routes to movieDetails view with props
         * @param id
         */
        movieCardClicked(id) {
            let movieData = this.getSpecificMovieInfo(id);

            this.$navigateTo(movieDetail, {
                props: {
                    id: movieData.id,
                    image: movieData.image,
                    rank: movieData.rank,
                    title: movieData.title,
                    imDbRating: movieData.imDbRating,
                    crew: movieData.crew,
                    year: movieData.year,
                    imDbRatingCount: movieData.imDbRatingCount,
                }
            })
        },

        /**
         * Loops over the movieItems to get a specific movie info
         * @param id
         * @returns {*}
         */
        getSpecificMovieInfo(id){
            let movieItem = null;
            this.movieItems.forEach(item => {
                if (item.id === id) {
                    movieItem = item
                }
            });
            return movieItem
        },

        /**
         * Executed when the user clicks on the drawer button
         * opens the drawer
         */
        onDrawerButtonTap() {
            utils.showDrawer();
        }
    }
};
