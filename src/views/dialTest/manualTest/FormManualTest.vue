<template>
    <van-dropdown-menu>
        <van-dropdown-item teleport="body" v-model="value1" :options="option1"/>
        <van-dropdown-item teleport="body" v-model="value2" :options="option2"/>
    </van-dropdown-menu>
</template>

<script>
    import {ref} from 'vue';

    export default {
        name: "FormManualTest",
        setup() {
            const value1 = ref(1);
            const value2 = ref(2);
            const option1 = [
                {text: '线程数 1', value: 1},
                {text: '线程数 2', value: 2},
                {text: '线程数 5', value: 5},
            ];
            const option2 = [
                {text: '测试量 2', value: 2},
                {text: '测试量 5', value: 5},
                {text: '测试量 10', value: 10},
            ];
            return {
                value1,
                value2,
                option1,
                option2,
            };
        }
    }
</script>

<style scoped>

</style>