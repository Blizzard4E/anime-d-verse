<template>
    <div>
        <ForumThread v-for="thread in list" :thread="thread" :key="thread.id" />
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    list: Thread[] | null;
}>();
</script>

<style></style>
