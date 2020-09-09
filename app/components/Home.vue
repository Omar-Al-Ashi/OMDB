<template>
    <Page class="page" @loaded="loaded">
        <ActionBar class="action-bar">
            <!--
            Use the NavigationButton as a side-drawer button in Android
            because ActionItems are shown on the right side of the ActionBar
            -->
            <NavigationButton ios:visibility="collapsed" icon="res://menu"
                              @tap="onDrawerButtonTap"></NavigationButton>
            <!--
            Use the ActionItem for IOS with position set to left. Using the
            NavigationButton as a side-drawer button in iOS is not possible,
            because its function is to always navigate back in the application.
            -->
            <ActionItem icon="res://navigation/menu"
                        android:visibility="collapsed"
                        @tap="onDrawerButtonTap"
                        ios.position="left">
            </ActionItem>
            <Label class="action-bar-title" text="Home"></Label>
        </ActionBar>

        <GridLayout class="page-content">
            <ActivityIndicator color="#0DA3AA" :busy="isLoading"
                               verticalAlignment="center"></ActivityIndicator>
            <ListView for="(item, index) in items"
                      separatorColor="transparent">
                <v-template>
                    <movieCard @clicked="movieCardClicked"
                               padding="5 10"
                               :id="item.id"
                               :picture="item.picture"
                               :score="item.age"
                               :title="item.title"/>
                </v-template>
            </ListView>
        </GridLayout>

    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import generatedData from "../../generated.json"
    import movieCard from "./movieCard";
    import movieDetail from "../Views/movieDetail";

    export default {
        components: {
            "movieCard": movieCard
        },

        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Home");
        },

        computed: {
            message() {
            }
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
                        age: movieData.age,
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
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';
    // End custom common variables
    // Custom styles
</style>
