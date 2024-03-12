<template>
    <div class="panel-container">
        <div class="panel-titles-container">
            <div>Code postal:</div>
            <div>Code INSEE:</div>
            <div>Population:</div>
        </div>
        <div class="panel-results-container">
            <div>{{ postcode }}</div>
            <div>{{ insee }}</div>
            <div>{{ population }} hbts</div>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        postcode: String,
        insee: String,
        population: Number
    })
</script>

<style scoped>
    .panel-container {
        display: flex;
        border: 2px solid var(--border-color);
        padding: 10px;
        margin-top: 10px;
        border-radius: 5px;
    }

    .panel-titles-container {
        margin-right: 30px;
    }
</style>