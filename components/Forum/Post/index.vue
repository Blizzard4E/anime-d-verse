<template>
    <div
        class="flex py-6 border-t-[1px] border-t-gray-700 gap-8 bg-dblack group transition-all"
    >
        <div>
            <img
                :src="post.profile_url"
                class="w-[120px] aspect-square rounded-[16px] object-cover"
                alt=""
            />
            <h3
                class="text-center text-lg mt-2 font-bold"
                :class="post.username == thread.username ? 'text-dpink' : ''"
            >
                {{ post.username }}
            </h3>
        </div>
        <div class="flex flex-col gap-2">
            <h4 class="font-bold">
                Posted on {{ formatDate(post.created_at) }}
            </h4>
            <p v-html="convertToBr(post.content)"></p>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    post: Post;
    thread: Thread;
}>();
</script>

<style></style>
