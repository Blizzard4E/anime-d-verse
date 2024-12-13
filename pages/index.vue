<template>
    <div class="flex flex-col gap-4">
        <Hero :anime="fakeDataList[0]" />
        <h1 class="font-bold text-[32px]">Latest Shows</h1>
        <Carousel :list="fakeDataList" />
    </div>
</template>

<script lang="ts" setup></script>

<style></style>
