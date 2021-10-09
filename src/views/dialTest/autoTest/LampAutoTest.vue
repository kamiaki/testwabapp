<template>
    <div class="flexRoot">
        <div class="item" :class="item.state == 0 ? 'normal' : 'abnormal'"
             v-for="item in autoTestData.lampData" :key="item">
            <div class="imgCss"
                 :style="{backgroundImage: 'url(' + item.iconUrl + ')'}"></div>
            <div class="lampTest"
            >{{item.name}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LampAutoTest",
        props: ['autoTestData'],
        setup(props) {


            return {
                autoTestData: props.autoTestData
            }
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
        background: #07c160;
    }

    .imgCss {
        background: no-repeat;
        background-size: 100% 100%;
        width: 100%;
        height: 100px;
    }

    .lampTest {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
    }

    .normal {
        background: #e8fff3;
    }

    .abnormal {
        background: #ffdddd;
    }
</style>