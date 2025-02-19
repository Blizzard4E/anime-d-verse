<template>
    <nav class="justify-between flex">
        <a href="/">
            <h1 class="flex gap-4 items-center">
                <span class="oswald font-medium text-white text-5xl"
                    >Anime D.</span
                ><span class="graffiti text-dpink text-6xl">Verse</span>
            </h1>
        </a>
        <div class="flex gap-8 text-lg">
            <a
                class="transition-all"
                href="/"
                :class="
                    router.currentRoute.value.path == '/' ||
                    router.currentRoute.value.path.startsWith('/anime')
                        ? 'text-dpink'
                        : 'hover:text-dpink'
                "
                >Shows</a
            >
            <a
                class="transition-all"
                href="/news"
                :class="
                    router.currentRoute.value.path.startsWith('/news')
                        ? 'text-dpink'
                        : 'hover:text-dpink'
                "
                >News</a
            >
            <a
                class="transition-all"
                href="/forum"
                :class="
                    router.currentRoute.value.path.startsWith('/forum')
                        ? 'text-dpink'
                        : 'hover:text-dpink'
                "
                >Forum</a
            >
        </div>
    </nav>
</template>

<script lang="ts" setup>
const router = useRouter();
</script>

<style></style>
