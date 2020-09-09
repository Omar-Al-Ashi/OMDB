<template lang="html">
    <FlexboxLayout backgroundColor="#faebd7" height="200" width="100%" @tap="movieCardClicked(id)">
        <Image :src="picture" height="100" width="100" backgroundColor="aqua"
               loadMode="async"
               :useCache="true"
               stretch="aspectFill"/>

        <FlexboxLayout flexDirection="column" justifyContent="space-around" padding="0 10">
            <Label :text="title" class="primary-text"/>
            <Label :text="score" class="secondary-text"/>
        </FlexboxLayout>
    </FlexboxLayout>
</template>

<script>
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
            score: {
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
</script>

<style lang="css" scoped>
    .primary-text {
        font-size: 20;
        color: #0F336D;
    }

    .secondary-text {
        font-size: 18;
        color: #103791;
    }
</style>
