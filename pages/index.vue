<template>
    <div class="flex flex-col gap-4">
        <Hero :anime="animesData[0]" v-if="animesData" />
        <h1 class="font-bold text-[32px]">Latest Shows</h1>
        <Carousel :list="animesData" />
    </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();

const {
    data: animesData,
    status: animesStatus,
    refresh: animesRefresh,
} = await useFetch<Anime[]>(`${runtimeConfig.public.apiURL}/anime`);
</script>

<style></style>
