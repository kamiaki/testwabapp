<template>
    <van-grid gutter="5" :column-num="4">
        <van-grid-item
                v-for="item in lampMsgs"
                :key="item">
            <icon>
                <van-image :src="item.iconUrl"/>
            </icon>
            <text>
                <div> {{item.name}}</div>
            </text>
        </van-grid-item>
    </van-grid>
</template>

<script>
    import {ref, reactive, watch, computed} from 'vue'
    import {line} from "/@/dictionary/dataDictionary.js";

    export default {
        name: "LampAutoTest",
        props: ['lampMsgs'],
        setup(props) {
            const lampMsgs = props.lampMsgs
            for (let i in props.lampMsgs) {
                lampMsgs[i].iconUrl = line[lampMsgs[i].id].iconUrl
                lampMsgs[i].name = line[lampMsgs[i].id].name
            }
            return {
                lampMsgs
            }
        }
    }
</script>

<style scoped>

</style>