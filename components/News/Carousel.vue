<template>
    <ul class="flex gap-[42px] pb-4 mb-6 w-full overflow-auto scrollbar">
        <a v-for="news in list" :href="`news/${news.id}`" :key="news.id">
            <NewsCard :news="news" />
        </a>
    </ul>
</template>

<script lang="ts" setup>
defineProps<{
    list: News[] | null;
}>();
</script>

<style></style>
