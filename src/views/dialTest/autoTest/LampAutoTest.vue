<template>
    <div class="flexRoot">
        <div class="item" :class="item.state === 'connect' ? 'normal' : 'abnormal'"
             v-for="item in autoTestData.lampData" :key="item">
            <div class="imgCss"
                 :style="{backgroundImage: 'url(' + item.iconUrl + ')'}"></div>
            <div class="lampText"
            >{{item.name}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LampAutoTest",
        props: ['autoTestData'],
        setup({autoTestData}) {
            return {autoTestData}
        }
    }
</script>

<style scoped lang="less">
    .flexRoot {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }

    .item {
        flex: auto;
        margin: 0 5px;
        border-radius: 5px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);
        transition: all 0.5s ease-in-out;
    }

    .item:hover {
        transform: scale(1.05);
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05);
    }

    .imgCss {
        background: no-repeat;
        background-size: 100% 100%;
        margin: 10px auto 0px;
        width: 60px;
        height: 60px;
    }

    .lampText {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
    }

    .normal {
        background: #e8fff3;
    }

    .abnormal {
        background: #ffdddd;
    }
</style>