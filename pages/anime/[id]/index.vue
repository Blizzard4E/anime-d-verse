<template>
    <div class="flex flex-col gap-4">
        <Hero :anime="anime" />
        <h1 class="text-[32px] font-bold">Episodes</h1>
        <Episodes :anime="anime" />
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const anime = fakeDataList[Number(route.params.id)];
</script>

<style></style>
