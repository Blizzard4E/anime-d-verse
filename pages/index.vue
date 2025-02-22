<template>
    <div class="flex flex-col gap-4">
        <Hero
            :anime="animesData.data[0]"
            v-if="animesData && animesData.data.length > 0"
        />
        <h1 class="font-bold text-[32px]">Latest Shows</h1>
        <Carousel
            :list="animesData.data"
            v-if="animesData && animesData.data.length > 0"
        />
    </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();

const {
    data: animesData,
    status: animesStatus,
    refresh: animesRefresh,
} = await useFetch<ContentResponse<Anime[]>>(
    `${runtimeConfig.public.apiURL}/anime`
);
</script>

<style></style>
