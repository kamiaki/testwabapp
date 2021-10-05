<template>
    <van-nav-bar
            title="拨测系统"
            @click-right="onClickRight"
            fixed="true"
            placeholder="true"
    >
        <template #right>
            <van-icon name="point-gift-o" size="18"/>
        </template>
    </van-nav-bar>
</template>

<script>
    export default {
        name: "TitlePage",
        setup() {
            const onClickRight = function () {
                alert('更多')
            };
            return {
                onClickRight,
            };
        }
    }
</script>

<style scoped>

</style>