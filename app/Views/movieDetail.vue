<template>
    <Page class="page" @loaded="loaded">
        <ActionBar class="action-bar">
            <ActionItem icon="res://navigation/menu"
                        android:visibility="collapsed"
                        @tap="onDrawerButtonTap"
                        ios.position="left">
            </ActionItem>
            <Label class="action-bar-title" text="Home"></Label>
        </ActionBar>

        <GridLayout class="page-content">
            <StackLayout padding="10">
                <Image :src="picture" height="200" width="100%"
                       loadMode="async"
                       :useCache="true"
                       stretch="aspectFill"/>
                <FlexboxLayout flexDirection="column" justifyContent="space-around" padding="10">
                    <Label :text="title" class="title-text"/>
                    <Label :text="age"/>
                </FlexboxLayout>

                <FlexboxLayout flexWrap="wrap" margin="10">
                    <Label v-for="tag in tags" :text="tag" borderColor="#faebd7" borderRadius="20"
                           backgroundColor="#e0ffe9"
                           margin="5"
                           padding="10"/>
                </FlexboxLayout>
            </StackLayout>
        </GridLayout>

    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import generatedData from "../../generated.json"

    export default {
        components: {},

        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Home");
        },

        computed: {},

        props: {
            id: {type: String},
            picture: {type: String},
            age: {type: Number},
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
                // utils.showDrawer();
                this.$navigateBack()
            }
        }
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';
    // End custom common variables
    // Custom styles
    .primary-text {
        font-size: 20;
    }

    .secondary-text {
        font-size: 18;
    }

</style>
