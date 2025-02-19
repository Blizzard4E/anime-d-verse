<template>
    <div class="w-full h-[400px] grid place-items-center">
        <h1 class="text-3xl">Logging Out...</h1>
    </div>
</template>

<script lang="ts" setup>
const { userState } = useAuth();

const logout = () => {
    localStorage.setItem("session_token", "");
    userState.value = null;
    navigateTo("/forum");
};
onMounted(() => {
    logout();
});
</script>

<style></style>
