<template>
    <van-form @submit="onSubmit">
        <van-row>
            <van-col span="8">
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
                <van-button block type="primary" @click="empty">
                    <van-icon name="replay"/>
                </van-button>
            </van-col>
            <van-col span="2">
                <van-button block type="primary" native-type="submit">
                    <van-icon name="search" />
                </van-button>
            </van-col>
        </van-row>
        <!--日期选择器-->
        <van-calendar v-model:show="showDateSelect" teleport="body"
                      :min-date="new Date(2018,1,1)"
                      :max-date="new Date(2030,1,1)"
                      type="range" @confirm="onConfirmDate"/>        <!--类型选择器-->
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
    import utils from 'aki_js_utils'

    export default {
        name: "FormQueryTest",
        emits: ['doSearch'],
        props: ['formParms', 'alertData'],
        setup({formParms, alertData}, context) {
            // 日期选择
            const myDate = ref('');
            const showDateSelect = ref(false);
            let start = ''
            let end = ''
            const formatDate = (myDate) => `${myDate.getMonth() + 1}/${myDate.getDate()}`;
            const onConfirmDate = (values) => {
                [start, end] = values;
                showDateSelect.value = false;
                myDate.value = `${formatDate(start)} - ${formatDate(end)}`;
            };
            // 类型选择
            const myType = ref('');
            const showTypeSelect = ref(false);
            const columnsType = ['', '移动网络', '联通网络', '电信网络', '域名网络'];
            const onConfirmType = (value) => {
                myType.value = value;
                showTypeSelect.value = false;
            };
            // 状态
            const myState = ref('');
            const showStateSelect = ref(false);
            const columnsState = ['', '恢复', '异常'];
            const onConfirmState = (value) => {
                myState.value = value;
                showStateSelect.value = false;
            };

            const empty = function () {
                alertData.tableData = []
                start = ''
                end = ''
                myDate.value = ''
                myType.value = ''
                myState.value = ''
                formParms.start = ''
                formParms.end = ''
                formParms.myType = ''
                formParms.myState = ''
                formParms.currentPage = 1
                formParms.totalItems = 0
                formParms.itemsPerPage = 20
            }

            const onSubmit = (vals) => {
                if (start) formParms.start = utils.dateFormat(new Date(start), 'yyyy-MM-dd HH:mm:ss')
                if (end) formParms.end = utils.dateFormat(new Date(end), 'yyyy-MM-dd HH:mm:ss')
                formParms.myType = vals.myType
                formParms.myState = vals.myState
                context.emit('doSearch')
            };

            return {
                // 日期
                myDate,
                showDateSelect,
                onConfirmDate,
                // 网络类型
                myType,
                columnsType,
                showTypeSelect,
                onConfirmType,
                // 状态
                myState,
                columnsState,
                showStateSelect,
                onConfirmState,
                // 提交
                onSubmit,
                empty
            };
        }
    }
</script>

<style scoped lang="less">

</style>