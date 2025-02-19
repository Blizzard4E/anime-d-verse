<template>
    <div>
        <button
            @click="showCreate = true"
            class="rounded-full text-white text-lg px-4 py-2 bg-dpink hover:text-dpink hover:bg-white transition-all font-bold"
        >
            Create
        </button>
        <div
            class="fixed w-screen h-screen grid place-items-center top-0 left-0 z-30"
            v-if="showCreate"
        >
            <div
                class="absolute w-screen h-screen bg-black/40 top-0 left-0"
                @click="resetUI"
            ></div>
            <form
                @submit.prevent="createThread"
                class="relative z-10 w-full flex flex-col gap-4 max-w-[550px] bg-dblack rounded-[16px] p-8"
            >
                <h4 class="text-2xl text-center font-bold">Create Thread</h4>
                <div class="grid gap-2">
                    <label for="title" class="text-lg font-bold">Title</label>
                    <input
                        class="w-full px-4 py-2 text-lg rounded-lg bg-gray-800 text-white focus:outline-none"
                        type="text"
                        name="title"
                        id="title"
                        v-model="title"
                    />
                </div>

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
                <div class="grid gap-2">
                    <label for="anime_ID" class="text-lg font-bold"
                        >Anime</label
                    >
                    <input
                        class="w-full px-4 py-2 text-lg rounded-lg bg-gray-800 text-white focus:outline-none"
                        type="text"
                        name="anime_ID"
                        id="anime_ID"
                        v-model="animeId"
                    />
                </div>
                <div class="flex justify-end gap-4 mt-8">
                    <button
                        type="button"
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
const props = defineProps<{
    animeId?: string;
}>();
const runtimeConfig = useRuntimeConfig();
const showCreate = ref(false);
const title = ref();
const content = ref();
const animeId = ref(props.animeId);
const { userState } = useAuth();

const createThread = async () => {
    if (!userState.value) return navigateTo("/login");
    let formData = new FormData();
    if (title.value) formData.append("title", title.value);
    formData.append("author_id", userState.value.id.toString());
    if (animeId.value) formData.append("anime_id", animeId.value);
    const response = await $fetch<string>(
        `${runtimeConfig.public.apiURL}/thread`,
        {
            method: "POST",
            body: formData,
        }
    );
    if (response) {
        let formData2 = new FormData();
        formData2.append("thread_id", response);
        formData2.append("author_id", userState.value.id.toString());
        formData2.append("content", content.value);
        const response2 = await $fetch(`${runtimeConfig.public.apiURL}/post`, {
            method: "POST",
            body: formData2,
        });
        if (response2) navigateTo("/forum/thread/" + response);
    }
};

const resetUI = () => {
    showCreate.value = false;
    title.value = "";
    content.value = "";
    animeId.value = props.animeId;
};
</script>

<style></style>
