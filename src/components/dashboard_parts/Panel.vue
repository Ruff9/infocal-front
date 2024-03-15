<template>
    <div class="panel-container">
        <div class="panel-titles-container">
            <div>Code postal:</div>
            <div>Code INSEE:</div>
            <div>Population:</div>
        </div>
        <div class="panel-results-container">
            <div>{{ postcode }}</div>
            <div>{{ insee_code }}</div>
            <div>{{ Intl.NumberFormat('fr').format(population) }} hbts</div>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        postcode: String,
        insee_code: String,
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