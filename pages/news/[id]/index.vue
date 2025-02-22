<template>
    <div>
        <div class="grid grid-cols-3 pb-8">
            <div class="col-span-2 flex flex-col gap-6" v-if="newsData">
                <h1 class="text-white w-full text-3xl font-bold line-clamp-4">
                    {{ newsData.title }}
                </h1>
                <h2 class="text-md">
                    By
                    <span class="ml-2 text-dpink">{{
                        newsData.author.username
                    }}</span>
                </h2>
                <img
                    class="w-full"
                    :src="runtimeConfig.public.apiURL + newsData.cover_image"
                    alt=""
                />
                <client-only>
                    <p class="text-lg" v-html="newsData.content"></p>
                </client-only>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const runtimeConfig = useRuntimeConfig();

const {
    data: newsData,
    status: newsStatus,
    refresh: newsRefresh,
} = await useFetch<News>(
    `${runtimeConfig.public.apiURL}/news/${route.params.id}`
);
</script>

<style></style>
