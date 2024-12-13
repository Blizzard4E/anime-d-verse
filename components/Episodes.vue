<template>
    <div class="flex flex-wrap gap-[26px]">
        <a
            v-for="(episode, i) in anime.episodes"
            :href="`/anime/${anime._id}/episode/${i + 1}`"
        >
            <EpisodeCard :anime="anime" :episode-number="i + 1" />
        </a>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    anime: Anime;
}>();
</script>

<style></style>
