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
            <ListView for="(item, index) in items"
                      separatorColor="transparent">
                <v-template>
                    <movieCard @clicked="movieCardClicked"
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

    export default {
        components: {
            "movieCard": movieCard
        },

        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Home");
        },

        computed: {
            message() {
                return "<!-- Page content goes here -->";
            }
        },

        beforeMount() {
            this.items = generatedData;
        },

        data() {
            return {
                items: null
            }
        },
        methods: {
            loaded() {

            },

            movieCardClicked(id) {
                console.log("item clicked with id", id)
                //    TODO move to another page with props
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
