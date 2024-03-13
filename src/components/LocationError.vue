<template>
    <p class="location-error">{{ content }}</p>
</template>

<script setup>
    defineProps(['content'])
</script>

<style scoped>
    .location-error {
        margin-bottom: 20px;
        text-align: center;
    }
</style>