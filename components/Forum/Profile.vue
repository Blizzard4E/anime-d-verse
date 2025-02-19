<template>
    <client-only>
        <div
            class="flex py-4 border-t-[1px] border-t-gray-700 gap-4 bg-dblack group transition-all"
            v-if="userState"
        >
            <img
                :src="userState.profile_url"
                class="w-[60px] aspect-square rounded-[16px] object-cover"
                alt=""
            />
            <div>
                <h3 class="text-lg font-bold">
                    {{ userState.username }}
                </h3>
                <a href="/forum/logout" class="text-gray-400 hover:text-dpink">
                    Logout
                </a>
            </div>
        </div>
    </client-only>
</template>

<script lang="ts" setup>
const { userState } = useAuth();
</script>

<style></style>
