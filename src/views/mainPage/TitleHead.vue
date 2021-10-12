<template>
    <van-nav-bar
            title="拨测系统"
            @click-right="onClickRight"
            :fixed="true"
            :placeholder="true"
    >
        <template #right>
            <van-icon name="point-gift-o" size="18"/>
        </template>
    </van-nav-bar>
</template>

<script>
    import {Toast} from 'vant';
    import doge from '/@/assets/other/doge.png'

    export default {
        name: "TitlePage",
        setup() {
            const onClickRight = function () {
                Toast({
                    message: '汪汪汪汪汪！',
                    icon: doge,
                });
            };
            return {
                onClickRight,
            };
        }
    }
</script>

<style lang="less" scoped>
</style>