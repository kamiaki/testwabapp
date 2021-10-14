<template>

    <van-form @submit="onSubmit">
        <van-row>
            <van-col span="10">
                <van-field
                        v-model="myDate"
                        is-link
                        readonly
                        name="myDate"
                        label=""
                        placeholder="选择日期区间"
                        @click="showDateSelect = true"
                />
            </van-col>
            <van-col span="6">
                <van-field
                        v-model="myType"
                        is-link
                        readonly
                        name="myType"
                        label=""
                        placeholder="网络类型"
                        @click="showTypeSelect = true"
                />
            </van-col>
            <van-col span="6">
                <van-field
                        v-model="myState"
                        is-link
                        readonly
                        name="myState"
                        label=""
                        placeholder="拨测状态"
                        @click="showStateSelect = true"
                />
            </van-col>
            <van-col span="2">
                <van-button block type="primary" native-type="submit">
                    <van-icon name="search" />
                </van-button>
            </van-col>
        </van-row>
        <!--日期选择器-->
        <van-calendar v-model:show="showDateSelect" teleport="body" type="range" @confirm="onConfirmDate"/>
        <!--类型选择器-->
        <van-popup v-model:show="showTypeSelect" position="bottom" teleport="body">
            <van-picker
                    :columns="columnsType"
                    @confirm="onConfirmType"
                    @cancel="showTypeSelect = false"
            />
        </van-popup>
        <!--状态选择器-->
        <van-popup v-model:show="showStateSelect" position="bottom" teleport="body">
            <van-picker
                    :columns="columnsState"
                    @confirm="onConfirmState"
                    @cancel="showStateSelect = false"
            />
        </van-popup>
    </van-form>

</template>

<script>
    import {ref} from 'vue';

    export default {
        name: "FormQueryTest",
        emits: ['doSearch'],
        props: ['formParms'],
        setup({formParms}, context) {
            // 日期选择
            const myDate = ref('');
            const showDateSelect = ref(false);
            let start = new Date()
            let end = new Date()
            const formatDate = (myDate) => `${myDate.getMonth() + 1}/${myDate.getDate()}`;
            const onConfirmDate = (values) => {
                [start, end] = values;
                showDateSelect.value = false;
                myDate.value = `${formatDate(start)} - ${formatDate(end)}`;
            };
            // 类型选择
            const myType = ref('');
            const showTypeSelect = ref(false);
            const columnsType = ['移动', '联通', '电信', '域名'];
            const onConfirmType = (value) => {
                myType.value = value;
                showTypeSelect.value = false;
            };
            // 状态
            const myState = ref('');
            const showStateSelect = ref(false);
            const columnsState = ['正常', '异常'];
            const onConfirmState = (value) => {
                myState.value = value;
                showStateSelect.value = false;
            };

            const onSubmit = (vals) => {
                formParms.start = start.getTime()
                formParms.end = end.getTime()
                formParms.myType = vals.myType
                formParms.myState = vals.myState
                context.emit('doSearch')
            };

            return {
                //
                myDate,
                showDateSelect,
                onConfirmDate,
                //
                myType,
                columnsType,
                onConfirmType,
                showTypeSelect,
                //
                myState,
                columnsState,
                onConfirmState,
                showStateSelect,
                //
                onSubmit,
            };
        }
    }
</script>

<style scoped>

</style>