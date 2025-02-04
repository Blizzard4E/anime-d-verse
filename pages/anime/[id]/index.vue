<template>
    <div class="flex flex-col gap-4" v-if="animesData">
        <Hero :anime="animesData" />
        <h1 class="text-[32px] font-bold">Episodes</h1>
        <Episodes :anime="animesData" />
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const runtimeConfig = useRuntimeConfig();

const {
    data: animesData,
    status: animesStatus,
    refresh: animesRefresh,
} = await useFetch<Anime>(
    `${runtimeConfig.public.apiURL}/anime/${route.params.id}`
);
</script>

<style></style>
