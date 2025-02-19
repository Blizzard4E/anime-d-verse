<template>
    <client-only>
        <div>
            <ForumProfile />
        </div>
        <div class="flex justify-between">
            <h1 class="font-bold text-3xl">Threads</h1>
            <ForumThreadCreate v-if="userState" />
            <a
                v-else
                href="/forum/login"
                class="rounded-full text-white text-lg px-4 py-2 bg-dpink hover:text-dpink hover:bg-white transition-all font-bold"
            >
                Login
            </a>
        </div>
        <ForumThreadList :list="reversedThreads" v-if="threadsData" />
    </client-only>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
const { userState } = useAuth();

const {
    data: threadsData,
    status: threadsStatus,
    refresh: threadsRefresh,
} = await useFetch<Thread[]>(`${runtimeConfig.public.apiURL}/threads`);

const reversedThreads = computed(() =>
    threadsData.value ? [...threadsData.value].reverse() : []
);
</script>

<style></style>
