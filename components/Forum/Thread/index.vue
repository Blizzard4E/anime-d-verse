<template>
    <a
        :href="'/forum/thread/' + thread.id"
        class="grid grid-cols-4 py-6 border-t-[1px] border-t-gray-700 gap-8 bg-dblack group transition-all"
    >
        <div class="col-span-3 flex justify-between px-4">
            <div class="flex flex-col justify-between">
                <div class="text-xl group-hover:text-dpink transition-all">
                    {{ thread.title }}
                </div>
                <div class="text-gray-400">
                    {{ formatDate(thread.created_at) }}
                </div>
            </div>
            <div class="text-md text-gray-400">
                {{ thread.num_posts }} Replies
            </div>
        </div>
        <div class="flex gap-8">
            <img
                :src="thread.profile_url"
                class="w-20 aspect-square rounded-[16px] object-cover"
                alt=""
            />
            <div class="flex flex-col justify-between">
                <div class="text-lg line-clamp-2">
                    {{ thread.username }}
                </div>
                <div class="text-gray-400">
                    <span class="mr-1 text-gray-400">Joined:</span>
                    {{ formatDate(thread.user_created_at) }}
                </div>
            </div>
        </div>
    </a>
</template>

<script lang="ts" setup>
defineProps<{
    thread: Thread;
}>();
</script>

<style></style>
