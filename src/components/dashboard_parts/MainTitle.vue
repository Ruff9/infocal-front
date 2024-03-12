<template>
    <div class="title-container">{{ city }}</div>
</template>

<script setup>
    defineProps({
        city: String
    })
</script>

<style scoped>
    .title-container {
        text-align: center;
        font-size: 2em;
    }
</style>