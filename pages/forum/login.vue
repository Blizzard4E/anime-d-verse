<template>
    <div class="w-full h-[400px] grid place-items-center">
        <form
            @submit.prevent="login"
            class="relative z-10 w-full flex flex-col gap-4 max-w-[550px] bg-dblack rounded-[16px] p-8"
        >
            <h4 class="text-2xl text-center font-bold">Login</h4>
            <div class="grid gap-2">
                <label for="title" class="text-lg font-bold">Username</label>
                <input
                    class="w-full px-4 py-2 text-lg rounded-lg bg-gray-800 text-white focus:outline-none"
                    type="text"
                    name="title"
                    id="title"
                    v-model="username"
                />
            </div>
            <div class="grid gap-2">
                <label for="title" class="text-lg font-bold">Password</label>
                <input
                    class="w-full px-4 py-2 text-lg rounded-lg bg-gray-800 text-white focus:outline-none"
                    type="password"
                    name="title"
                    id="title"
                    v-model="password"
                />
            </div>
            <div class="flex justify-end gap-4 mt-8">
                <a
                    href="/forum/register"
                    class="rounded-[8px] text-white text-lg px-4 py-1 hover:text-dpink transition-all font-bold"
                >
                    Register
                </a>
                <button
                    type="submit"
                    class="rounded-[8px] text-white text-lg px-4 py-1 bg-dpink hover:text-dpink hover:bg-white transition-all font-bold"
                >
                    Login
                </button>
            </div>
        </form>
    </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
const { userState } = useAuth();
const username = ref();
const password = ref();

onMounted(() => {
    if (userState.value) navigateTo("/forum");
});

const login = async () => {
    let formData = new FormData();
    if (username.value) formData.append("username", username.value);
    if (password.value) formData.append("password", password.value);
    const response = await $fetch<SessionResponse>(
        `${runtimeConfig.public.apiURL}/login`,
        {
            method: "POST",
            body: formData,
        }
    );
    if (response) {
        localStorage.setItem("session_token", response.session_token);
        let formData2 = new FormData();
        formData2.append("session_token", response.session_token);

        const response2 = await $fetch<UserState>(
            `${runtimeConfig.public.apiURL}/user`,
            {
                method: "POST",
                body: formData2,
            }
        );
        userState.value = response2;
        navigateTo("/forum");
    }
};
</script>

<style></style>
