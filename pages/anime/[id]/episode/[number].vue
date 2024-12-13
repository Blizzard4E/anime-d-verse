<template>
    <div class="flex flex-col gap-4">
        <div class="grid grid-cols-3 gap-[32px]">
            <div class="flex flex-col gap-4 col-span-2">
                <h1 class="text-[32px] font-bold">
                    EP {{ episodeNumber }} -
                    {{ anime.episodes[episodeNumber].title }}
                </h1>
                <video
                    class="col-span-2"
                    :src="anime.episodes[episodeNumber - 1].videoUrl"
                    controls
                />
                <Hero :anime="anime" />
            </div>
            <div class="flex flex-col gap-4">
                <h2 class="text-[20px] font-bold">Other Episodes:</h2>
                <Episodes :anime="anime" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();
console.log(route.params);

const anime = fakeDataList[Number(route.params.id)];
const episodeNumber = Number(route.params.number);
</script>

<style></style>
