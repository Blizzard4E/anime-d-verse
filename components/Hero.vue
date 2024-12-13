<template>
    <div
        class="w-full h-[480px] relative group overflow-hidden"
        :style="{
            borderTopRightRadius: '70px',
            borderBottomRightRadius: '70px',
        }"
    >
        <div
            class="absolute top-0 left-0 w-full h-[480px] group-hover:scale-110 duration-[.25s]"
            :style="{
                background: `linear-gradient(to right ,rgba(20, 20, 20, 1) 22%, rgba(20, 20, 20, 0) 100%), url(${anime.coverUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderTopRightRadius: '70px',
                borderBottomRightRadius: '70px',
            }"
        ></div>
        <a
            class="w-full h-[480px] py-[40px] flex flex-col gap-[10px] relative z-10"
            :href="`/anime/${anime._id}`"
        >
            <img
                :src="anime.logoUrl"
                class="w-auto h-[200px] self-start"
                alt="Logo"
            />
            <h1
                class="font-bold text-[40px] h-[48px] truncate w-full max-w-[600px]"
            >
                {{ anime.title }}
            </h1>
            <ul class="gap-[10px] items-center h-[30px] hidden md:flex">
                <li
                    v-for="(genre, i) in anime.genres"
                    class="flex items-center gap-[10px]"
                >
                    <span
                        v-if="i != 0"
                        class="bg-gray-400 w-[5px] h-[5px] rounded-full"
                    ></span>
                    <span class="font-normal text-[20px]">{{
                        genre.title
                    }}</span>
                </li>
            </ul>
            <p
                class="text-gray-400 h-[84px] w-full max-w-[600px] text-[20px] leading-5 line-clamp-4"
            >
                {{ anime.description }}
            </p>
        </a>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    anime: Anime;
}>();
</script>

<style></style>
