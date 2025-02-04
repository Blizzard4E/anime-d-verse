<template>
    <ul class="flex gap-[42px] pb-4 mb-6 w-full overflow-auto scrollbar">
        <a v-for="anime in list" :href="`anime/${anime._id}`">
            <Card :anime="anime" />
        </a>
    </ul>
</template>

<script lang="ts" setup>
defineProps<{
    list: Anime[] | null;
}>();
</script>

<style></style>
