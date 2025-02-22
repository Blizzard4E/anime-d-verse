<template>
    <div class="flex flex-col gap-4">
        <NewsHero :news="newsData[0]" v-if="newsData && newsData.length > 0" />
        <NewsCarousel :list="newsData.slice(1)" v-if="newsData" />
    </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();

const {
    data: newsData,
    status: newsStatus,
    refresh: newsRefresh,
} = await useFetch<News[]>(`${runtimeConfig.public.apiURL}/news`);
</script>

<style></style>
