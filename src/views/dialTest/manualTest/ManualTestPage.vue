<template>
    <FormManualTest></FormManualTest>
    <ContentManualTest></ContentManualTest>
</template>

<script>
    import FormManualTest from '/@/views/dialTest/manualTest/FormManualTest.vue'
    import ContentManualTest from '/@/views/dialTest/manualTest/ContentManualTest.vue'

    export default {
        name: "ManualTestPage",
        components: {FormManualTest, ContentManualTest}
    }
</script>

<style scoped>

</style>