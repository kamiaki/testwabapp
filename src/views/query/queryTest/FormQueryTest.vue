<template>

    <van-form @submit="onSubmit">

        <van-cell title="选择日期区间" :value="date" @click="show = true"/>
        <van-calendar v-model:show="show" teleport="body" type="range" @confirm="onConfirm"/>

        <van-field
                v-model="result"
                is-link
                readonly
                name="picker"
                label="网络类型"
                placeholder="网络类型"
                @click="showPicker = true"
        />
        <van-popup v-model:show="showPicker" position="bottom" teleport="body">
            <van-picker
                    :columns="columns"
                    @confirm="onConfirm2"
                    @cancel="showPicker = false"
            />
        </van-popup>

        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
                查询
            </van-button>
        </div>
    </van-form>

</template>

<script>
    import {ref} from 'vue';

    export default {
        name: "FormQueryTest",
        setup() {
            const date = ref('');
            const show = ref(false);

            const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;
            const onConfirm = (values) => {
                const [start, end] = values;
                show.value = false;
                date.value = `${formatDate(start)} - ${formatDate(end)}`;
            };

            const result = ref('');
            const showPicker = ref(false);
            const columns = ['类型1', '类型2', '类型3'];

            const onConfirm2 = (value) => {
                result.value = value;
                showPicker.value = false;
            };


            const onSubmit = (values) => {
                console.log('submit', values);
                console.log('date', date);
            };

            return {
                date,
                show,
                onConfirm,
                result,
                columns,
                onConfirm2,
                showPicker,
                onSubmit,
            };
        }
    }
</script>

<style scoped>

</style>