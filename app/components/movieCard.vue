<template lang="html">
    <FlexboxLayout backgroundColor="#faebd7" height="200" width="100%" @tap="movieCardClicked(id)">
        <Image :src="picture" height="100" width="100" backgroundColor="aqua"/>

        <FlexboxLayout flexDirection="column" justifyContent="space-around">
            <Label :text="title" class="text"/>
            <Label :text="score" class="text"/>
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
    .text {
        font-size: 20;
        color: #0F336D;
    }
</style>
