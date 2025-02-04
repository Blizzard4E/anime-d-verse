<template>
    <div
        class="w-[270px] h-[360px] flex flex-col justify-end relative overflow-hidden group"
        :style="{
            borderRadius: '38px',
        }"
    >
        <div
            class="absolute top-0 left-0 w-[270px] h-[360px] group-hover:scale-110 duration-[.25s] z-0"
            :style="{
                background: `linear-gradient(to top ,rgba(20, 20, 20, 1) 0%, rgba(20, 20, 20, 0) 40%), url(${
                    runtimeConfig.public.apiURL +
                    '/' +
                    convertPathSlashes(anime.posterUrl)
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
            {{ anime.title }}
        </h2>
    </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
defineProps<{
    anime: Anime;
}>();
</script>

<style></style>
