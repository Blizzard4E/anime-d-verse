<template>
    <div
        class="w-[360px] h-[270px] flex flex-col justify-end relative overflow-hidden group"
        :style="{
            borderRadius: '38px',
        }"
    >
        <div
            class="absolute top-0 left-0 w-[360px] h-[270px] group-hover:scale-110 duration-[.25s] z-0"
            :style="{
                background: `linear-gradient(to top ,rgba(20, 20, 20, 1) 0%, rgba(20, 20, 20, 0) 60%), url(${news.cover_url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '38px',
            }"
        ></div>
        <h2
            class="w-full bottom-4 text-[24px] font-bold px-4 leading-6 relative z-10 line-clamp-2"
        >
            {{ news.title }}
        </h2>
    </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
defineProps<{
    news: News;
}>();
</script>

<style></style>
