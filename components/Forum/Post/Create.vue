<template>
    <div>
        <button
            @click="showPost = true"
            class="rounded-full text-white text-lg px-4 py-2 bg-dpink hover:text-dpink hover:bg-white transition-all font-bold"
        >
            Post
        </button>
        <div
            class="fixed w-screen h-screen grid place-items-center top-0 left-0"
            v-if="showPost"
        >
            <div
                class="absolute w-screen h-screen bg-black/40 top-0 left-0"
                @click="resetUI"
            ></div>
            <form
                @submit.prevent="postThread"
                class="relative z-10 w-full flex flex-col gap-4 max-w-[550px] bg-dblack rounded-[16px] p-8"
            >
                <h4 class="text-2xl text-center font-bold">Post on Thread</h4>
                <div class="grid gap-2">
                    <label for="content" class="text-lg font-bold"
                        >Content</label
                    >
                    <textarea
                        class="w-full px-4 py-2 text-lg rounded-lg bg-gray-800 text-white focus:outline-none"
                        name="content"
                        id="content"
                        v-model="content"
                    />
                </div>
                <div class="flex justify-end gap-4 mt-8">
                    <button
                        @click="resetUI"
                        class="rounded-[8px] text-white text-lg px-4 py-1 hover:text-dpink transition-all font-bold"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        class="rounded-[8px] text-white text-lg px-4 py-1 bg-dpink hover:text-dpink hover:bg-white transition-all font-bold"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
const showPost = ref(false);
const content = ref();
const { userState } = useAuth();
const route = useRoute();
const emit = defineEmits(["success"]);

const postThread = async () => {
    if (!userState.value) return navigateTo("/login");
    let formData = new FormData();
    if (content.value) formData.append("content", content.value);
    formData.append("thread_id", route.params.id.toString());
    formData.append("author_id", userState.value.id.toString());
    const response = await $fetch(`${runtimeConfig.public.apiURL}/post`, {
        method: "POST",
        body: formData,
    });
    if (response) {
        emit("success");
        resetUI();
    }
};

const resetUI = async () => {
    showPost.value = false;
    content.value = "";
};
</script>

<style></style>
