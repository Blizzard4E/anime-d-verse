<template>
    <div class="flex flex-col gap-4">
        <div class="grid grid-cols-3 gap-[32px]" v-if="animesData">
            <div class="flex flex-col gap-4 col-span-2">
                <h1 class="text-[32px] font-bold">
                    EP {{ episodeNumber }} -
                    {{ animesData.episodes[episodeNumber - 1].title }}
                </h1>
                <video
                    class="col-span-2"
                    :src="
                        runtimeConfig.public.apiURL +
                        '/' +
                        convertPathSlashes(
                            animesData.episodes[episodeNumber - 1].videoUrl
                        )
                    "
                    controls
                />
                <Hero :anime="animesData" />
            </div>
            <div class="flex flex-col gap-4">
                <h2 class="text-[20px] font-bold">Other Episodes:</h2>
                <Episodes :anime="animesData" />
            </div>
        </div>
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
const episodeNumber = Number(route.params.number);
</script>

<style></style>
