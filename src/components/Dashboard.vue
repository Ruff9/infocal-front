<template>
    <div class="dashboard-container">
        <MainTitle
            v-if="data != {}"
            :city="data['city']"
        />
        <Panel
            :postcode="data['postcode']"
            :insee_code="data['insee_code']"
            :population="data['population']"
        />
    </div>
</template>

<script setup>
    import MainTitle from './dashboard_parts/MainTitle.vue'
    import Panel from './dashboard_parts/Panel.vue'

    const props = defineProps(['data'])
</script>

<style scoped>

</style>