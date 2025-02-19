<template>
    <div v-if="threadData">
        <client-only>
            <div class="flex justify-between">
                <h1 class="font-bold text-2xl">
                    <a href="/forum" class="hover:text-dpink duration-300"
                        >Threads</a
                    >
                    > {{ threadData.title }}
                </h1>
                <ForumPostCreate @success="postsRefresh" v-if="userState" />
                <a
                    v-else
                    href="/forum/login"
                    class="rounded-full text-white text-lg px-4 py-2 bg-dpink hover:text-dpink hover:bg-white transition-all font-bold"
                >
                    Login
                </a>
            </div>
        </client-only>
        <div class="mt-6 flex gap-4 mb-8">
            <img
                :src="threadData.profile_url"
                class="w-20 aspect-square rounded-[16px] object-cover"
                alt=""
            />
            <div class="flex flex-col justify-between">
                <div class="text-lg line-clamp-2">
                    {{ threadData.username }}
                </div>
                <div class="text-gray-400">
                    {{ formatDate(threadData.created_at) }}
                </div>
            </div>
        </div>
        <div v-for="post in postsData">
            <ForumPost :post="post" :thread="threadData" />
        </div>
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const { userState } = useAuth();

const {
    data: threadData,
    status: threadStatus,
    refresh: threadRefresh,
} = await useFetch<Thread>(
    `${runtimeConfig.public.apiURL}/threads/${route.params.id}`
);
const {
    data: postsData,
    status: postsStatus,
    refresh: postsRefresh,
} = await useFetch<Post[]>(
    `${runtimeConfig.public.apiURL}/posts/${route.params.id}`
);
</script>

<style></style>
