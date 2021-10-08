<template>
    <van-notice-bar left-icon="volume-o" :scrollable="false">
        <van-swipe
                vertical
                class="notice-swipe"
                :autoplay="3000"
                :show-indicators="false"
        >
            <van-swipe-item v-for="item in msgList" :key="item">
                {{item}}
            </van-swipe-item>
        </van-swipe>
    </van-notice-bar>
</template>

<script>
    import {toRef, ref, reactive, computed} from 'vue'
    import {line} from "/@/dictionary/dataDictionary.js";

    export default {
        name: "NotifyAutoTest",
        props: ['notifyMsgs'],
        setup(props) {
            const msgList = computed(() => {
                const tmpList = reactive([])
                const notifyMsgs = props.notifyMsgs
                for (let i in notifyMsgs) {
                    const name = line[notifyMsgs[i].type].name
                    const msg = notifyMsgs[i].msg
                    const time = notifyMsgs[i].time
                    const fullText = `${Number(i) + 1} ${name} ${msg} ${time}`
                    tmpList.push(fullText)
                }
                return tmpList
            })

            return {
                msgList
            }
        }
    }
</script>

<style scoped>
    .notice-swipe {
        height: 40px;
        line-height: 40px;
    }
</style>