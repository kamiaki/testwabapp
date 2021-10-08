<template>
    <van-grid gutter="5" :column-num="4">
        <van-grid-item
                v-for="item in lampMsgs"
                :key="item">
            <van-image :src="item.iconUrl"/>
            <div> {{item.name}}</div>
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
            watch(lampMsgs, () => {
                for (let i in props.lampMsgs) {
                    lampMsgs[i].iconUrl = line[lampMsgs[i].id].iconUrl
                    lampMsgs[i].name = line[lampMsgs[i].id].name + lampMsgs[i].msg
                }
            }, {immediate: true})

            return {
                lampMsgs
            }
        }
    }
</script>

<style scoped>

</style>