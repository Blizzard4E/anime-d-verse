<template>
    <div
        class="w-full h-[480px] relative group overflow-hidden grid grid-cols-2"
        :style="{
            borderTopLeftRadius: '70px',
            borderBottomLeftRadius: '70px',
        }"
    >
        <a
            :href="`news/${news.id}`"
            class="w-full group-hover:scale-110 duration-[.25s] z-0"
            :style="{
                background: `linear-gradient(to top ,rgba(20, 20, 20, 1) 0%, rgba(20, 20, 20, 0) 40%), url(${
                    runtimeConfig.public.apiURL +
                    convertPathSlashes(news.cover_image)
                })`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderTopLeftRadius: '38px',
                borderBottomLeftRadius: '38px',
            }"
        ></a>
        <div
            class="w-full py-4 flex flex-col gap-[10px] relative z-10 bg-dblack px-8"
        >
            <h3 class="text-dpink">{{ news.author.username }}</h3>
            <a :href="`news/${news.id}`">
                <h2
                    class="text-white w-full max-w-[600px] text-3xl font-bold line-clamp-4"
                >
                    {{ news.title }}
                </h2>
            </a>
            <client-only>
                <p
                    v-html="news.content"
                    class="text-gray-400 w-full max-w-[600px] text-[20px] leading-5 line-clamp-6"
                ></p>
            </client-only>
        </div>
    </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();

const props = defineProps<{
    news: News;
}>();
</script>

<style></style>
