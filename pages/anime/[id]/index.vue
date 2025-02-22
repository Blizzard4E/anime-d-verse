<template>
    <div class="flex flex-col gap-4" v-if="animesData">
        <Hero :anime="animesData.data" />
        <h1 class="text-[32px] font-bold">Episodes</h1>
        <Episodes :anime="animesData.data" />
        <div class="flex justify-between">
            <h1 class="font-bold text-3xl">Discussion</h1>
            <client-only>
                <ForumThreadCreate
                    v-if="userState"
                    :anime-id="route.params.id.toString()"
                />
            </client-only>
        </div>
        <ForumThreadList :list="reversedThreads" v-if="threadsData" />
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const { userState } = useAuth();
const {
    data: animesData,
    status: animesStatus,
    refresh: animesRefresh,
} = await useFetch<ContentResponse<Anime>>(
    `${runtimeConfig.public.apiURL}/anime/${route.params.id}`
);
const {
    data: threadsData,
    status: threadsStatus,
    refresh: threadsRefresh,
} = await useFetch<Thread[]>(
    `${runtimeConfig.public.apiURL}/threads/anime/${route.params.id}`
);

const reversedThreads = computed(() =>
    threadsData.value ? [...threadsData.value].reverse() : []
);
</script>

<style></style>
