<template>
    <div
        class="w-[360px] h-[200px] flex flex-col justify-end relative overflow-hidden group cursor-pointer"
        :style="{
            borderRadius: '38px',
        }"
    >
        <div
            class="absolute top-0 left-0 w-[360px] h-[200px] group-hover:scale-110 duration-[.25s] z-0"
            :style="{
                background: `linear-gradient(to top ,rgba(20, 20, 20, 1) 0%, rgba(20, 20, 20, 0) 70%), url(${
                    anime.episodes[episodeNumber - 1].thumbnailUrl ??
                    anime.coverUrl
                })`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '38px',
            }"
        ></div>
        <h2
            class="w-full h-[60px] text-[24px] font-bold px-4 leading-6 relative z-10"
        >
            EP {{ episodeNumber }} -
            {{ anime.episodes[episodeNumber - 1].title }}
        </h2>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    anime: Anime;
    episodeNumber: number;
}>();
</script>

<style></style>
